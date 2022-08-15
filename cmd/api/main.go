package main

import (
	"context"
	"fmt"
	"net"

	log "github.com/sirupsen/logrus"

	pb "github.com/jponc/chat-app/pbs/chatapp_apiservice_v1"
	"google.golang.org/grpc"
)

// server is used to implement api.ApiServer.
type server struct {
	pb.UnimplementedApiServer
}

// Hello implements api.ApiServer
func (s *server) Hello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloResponse, error) {
	log.Printf("Received: %v", in.GetName())
	return &pb.HelloResponse{Message: "Hello " + in.GetName()}, nil
}

func main() {
	config, err := NewConfig()
	if err != nil {
		log.Fatalf("cannot initialise config %v", err)
	}

	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *&config.Port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	// Creates the gRPC server
	s := grpc.NewServer()

	// Register ApiServer into gRPC server
	pb.RegisterApiServer(s, &server{})
	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
