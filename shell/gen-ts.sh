#!/bin/bash

protoc \
  - plugin=protoc-gen-ts_proto=.\node_modules.binprotoc-gen-ts_proto.cmd \
  - ts_proto_out=. ./protos/auth.proto \
  - ts_proto_opt=outputServices=grpc-js, env=node, esModuleInterop=true

 