package api

import (
	"context"
	"fmt"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"

	pb "github.com/jponc/chat-app/proto/go/chatapp_apiservice_v1"
)

type Server struct {
	mongoDBClient *mongo.Client
	pb.UnimplementedApiServer
}

func New(mongoDBClient *mongo.Client) *Server {
	return &Server{
		mongoDBClient: mongoDBClient,
	}
}

func (s *Server) Hello(ctx context.Context, req *pb.HelloRequest) (*pb.HelloResponse, error) {
	collection := s.mongoDBClient.Database("testing").Collection("names")
	_, err := collection.InsertOne(ctx, bson.D{{Key: "name", Value: req.GetName()}})
	if err != nil {
		return nil, fmt.Errorf("failed to insert: %v", err)
	}

	return &pb.HelloResponse{Message: "Hello " + req.GetName()}, nil
}

func (s *Server) GetNames(ctx context.Context, req *pb.GetNamesRequest) (*pb.GetNamesResponse, error) {
	namesCollection := s.mongoDBClient.Database("testing").Collection("names")
	cur, err := namesCollection.Find(ctx, bson.M{})
	if err != nil {
		return nil, fmt.Errorf("failed to get items from names collection: %w", err)
	}

	var names []string

	defer cur.Close(ctx)
	for cur.Next(ctx) {
		var result bson.M
		err = cur.Decode(&result)
		if err != nil {
			return nil, fmt.Errorf("failed decoding an item: %w", err)
		}

		names = append(names, fmt.Sprintf("%s", result["name"]))
	}

	return &pb.GetNamesResponse{Names: names}, nil
}
