.PHONY: build clean

CMD_DIR = ./cmd

build:
	@for f in $(shell ls ${CMD_DIR}); do echo Building $${f} && env GOARCH=amd64 GOOS=linux go build -ldflags="-s -w" -o bin/$${f} cmd/$${f}/*.go; done
	docker build -f deployments/api/Dockerfile -t chat-app-api .
	docker build -f deployments/envoy/Dockerfile -t chat-app-envoy deployments/envoy/.

minikube_apply:
	kubectl apply -f deployments/api/deployment.yaml
	kubectl apply -f deployments/envoy/deployment.yaml

minikube_expose_envoy:
	kubectl expose deployment envoy --type=NodePort --port=8080
	kubectl port-forward service/envoy 8080:8080

clean:
	rm -rf ./bin

compile_go_proto:
	protoc --go_out=. --go-grpc_out=. proto/*
