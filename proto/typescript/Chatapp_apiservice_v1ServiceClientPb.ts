/**
 * @fileoverview gRPC-Web generated client stub for chatapp_apiservice_v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as chatapp_apiservice_v1_pb from './chatapp_apiservice_v1_pb';


export class ApiClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorHello = new grpcWeb.MethodDescriptor(
    '/chatapp_apiservice_v1.Api/Hello',
    grpcWeb.MethodType.UNARY,
    chatapp_apiservice_v1_pb.HelloRequest,
    chatapp_apiservice_v1_pb.HelloResponse,
    (request: chatapp_apiservice_v1_pb.HelloRequest) => {
      return request.serializeBinary();
    },
    chatapp_apiservice_v1_pb.HelloResponse.deserializeBinary
  );

  hello(
    request: chatapp_apiservice_v1_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null): Promise<chatapp_apiservice_v1_pb.HelloResponse>;

  hello(
    request: chatapp_apiservice_v1_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: chatapp_apiservice_v1_pb.HelloResponse) => void): grpcWeb.ClientReadableStream<chatapp_apiservice_v1_pb.HelloResponse>;

  hello(
    request: chatapp_apiservice_v1_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: chatapp_apiservice_v1_pb.HelloResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chatapp_apiservice_v1.Api/Hello',
        request,
        metadata || {},
        this.methodDescriptorHello,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatapp_apiservice_v1.Api/Hello',
    request,
    metadata || {},
    this.methodDescriptorHello);
  }

  methodDescriptorGetNames = new grpcWeb.MethodDescriptor(
    '/chatapp_apiservice_v1.Api/GetNames',
    grpcWeb.MethodType.UNARY,
    chatapp_apiservice_v1_pb.GetNamesRequest,
    chatapp_apiservice_v1_pb.GetNamesResponse,
    (request: chatapp_apiservice_v1_pb.GetNamesRequest) => {
      return request.serializeBinary();
    },
    chatapp_apiservice_v1_pb.GetNamesResponse.deserializeBinary
  );

  getNames(
    request: chatapp_apiservice_v1_pb.GetNamesRequest,
    metadata: grpcWeb.Metadata | null): Promise<chatapp_apiservice_v1_pb.GetNamesResponse>;

  getNames(
    request: chatapp_apiservice_v1_pb.GetNamesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: chatapp_apiservice_v1_pb.GetNamesResponse) => void): grpcWeb.ClientReadableStream<chatapp_apiservice_v1_pb.GetNamesResponse>;

  getNames(
    request: chatapp_apiservice_v1_pb.GetNamesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: chatapp_apiservice_v1_pb.GetNamesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chatapp_apiservice_v1.Api/GetNames',
        request,
        metadata || {},
        this.methodDescriptorGetNames,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatapp_apiservice_v1.Api/GetNames',
    request,
    metadata || {},
    this.methodDescriptorGetNames);
  }

}

