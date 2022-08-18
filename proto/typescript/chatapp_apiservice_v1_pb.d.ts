import * as jspb from 'google-protobuf'



export class HelloRequest extends jspb.Message {
  getName(): string;
  setName(value: string): HelloRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
  static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloRequest;
  static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
  export type AsObject = {
    name: string,
  }
}

export class HelloResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): HelloResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HelloResponse): HelloResponse.AsObject;
  static serializeBinaryToWriter(message: HelloResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloResponse;
  static deserializeBinaryFromReader(message: HelloResponse, reader: jspb.BinaryReader): HelloResponse;
}

export namespace HelloResponse {
  export type AsObject = {
    message: string,
  }
}

export class GetNamesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNamesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNamesRequest): GetNamesRequest.AsObject;
  static serializeBinaryToWriter(message: GetNamesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNamesRequest;
  static deserializeBinaryFromReader(message: GetNamesRequest, reader: jspb.BinaryReader): GetNamesRequest;
}

export namespace GetNamesRequest {
  export type AsObject = {
  }
}

export class GetNamesResponse extends jspb.Message {
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): GetNamesResponse;
  clearNamesList(): GetNamesResponse;
  addNames(value: string, index?: number): GetNamesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNamesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNamesResponse): GetNamesResponse.AsObject;
  static serializeBinaryToWriter(message: GetNamesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNamesResponse;
  static deserializeBinaryFromReader(message: GetNamesResponse, reader: jspb.BinaryReader): GetNamesResponse;
}

export namespace GetNamesResponse {
  export type AsObject = {
    namesList: Array<string>,
  }
}

