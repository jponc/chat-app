package main

import (
	"context"
	"fmt"
	"net"

	log "github.com/sirupsen/logrus"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"

	"google.golang.org/grpc"

	"github.com/jponc/chat-app/internal/api"
	pb "github.com/jponc/chat-app/proto/go/chatapp_apiservice_v1"
)

func main() {
	// Get Config
	config, err := NewConfig()
	if err != nil {
		log.Fatalf("cannot initialise config %v", err)
	}

	// Create mongoClient
	ctx, cancel := context.WithTimeout(context.Background(), config.MongoDBTimeout)
	defer cancel()

	log.Infof("Mongo URL : %s", config.MongoDBUrl)
	mongoClient, err := mongo.Connect(ctx, options.Client().ApplyURI(config.MongoDBUrl))
	defer func() {
		if err = mongoClient.Disconnect(ctx); err != nil {
			log.Fatalf("%w", err)
		}
	}()

	// Check mongoDB Client connection
	err = mongoClient.Ping(ctx, readpref.Primary())
	if err != nil {
		log.Fatalf("%w", err)
	}

	// Listen to TCP connections
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *&config.Port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	apiServer := api.New(mongoClient)

	// Creates the gRPC server
	grpcServer := grpc.NewServer()

	// Register ApiServer into gRPC server
	pb.RegisterApiServer(grpcServer, apiServer)
	log.Printf("server listening at %v, test", lis.Addr())
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
