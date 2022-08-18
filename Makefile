.PHONY: build clean

CMD_DIR = ./cmd

build: clean
	@for f in $(shell ls ${CMD_DIR}); do echo Building $${f} && env GOARCH=amd64 GOOS=linux go build -ldflags="-s -w" -o bin/$${f} cmd/$${f}/*.go; done
	docker build -f deployments/api/Dockerfile -t chat-app-api bin/.
	docker build -f deployments/envoy/Dockerfile -t chat-app-envoy deployments/envoy/.

minikube_start: build
	kubectl apply -f deployments/api/deployment.yaml
	kubectl apply -f deployments/envoy/deployment.yaml
	kubectl apply -f deployments/mongodb/deployment.yaml
	kubectl create -f deployments/api/service.yaml
	kubectl create -f deployments/envoy/service.yaml
	kubectl create -f deployments/mongodb/service.yaml

minikube_delete:
	kubectl delete deployment api
	kubectl delete deployment envoy
	kubectl delete deployment mongodb
	kubectl delete svc api-svc
	kubectl delete svc envoy-svc
	kubectl delete svc mongodb-svc

minikube_docker:
	eval $(minikube docker-env)

minikube_portforward_envoy:
	kubectl port-forward service/envoy-svc 8080:8080

clean:
	rm -rf ./bin

compile_proto:
	cd proto && protoc --go_out=. --go-grpc_out=. *.proto
	cd proto && \
		protoc --js_out=import_style=commonjs,binary:./typescript/. \
		--grpc-web_out=import_style=typescript,mode=grpcweb:./typescript/. *.proto


