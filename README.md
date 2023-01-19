## VSCode Extension
  - vscode-proto3 를 설치하면 편리.

## 규약(Contract)
  - 서버와 클라이언트 간에 통신하려면 규약이 필요.
  - REST를 사용할 때는 규약 필요X. JSON으로 원하는 모든 것을 보낼 수 있음.
  - gRPC는 프로토콜 버퍼를 사용하여 강력한 형식의 규약을 정의해야 한다. 규약은 특수 언어로 작성되며 .proto 파일에 저장.
  - protos라는 규약용 폴더를 만들고 규약을 관리하겠다.

## TypeScript 타입 생성
- 정의한 proto 규약을 TypeScript로 변환해야 NodeJS 애플리케이션에서 타입을 사용할 수 있다
- 이 동작을 수행해 주는 ts-proto 라이브러리 사용.
- protoc 설치 필요.(https://github.com/protocolbuffers/protobuf/releases)
  ```powershell
    protoc  `
      --plugin=protoc-gen-ts_proto=.\node_modules\.bin\protoc-gen-ts_proto.cmd `
      --ts_proto_out=. ./protos/auth.proto `
      --ts_proto_opt=outputServices=grpc-js `
      --ts_proto_opt=env=node `
      --ts_proto_opt=esModuleInterop=true
  ```

## 참고
- 클라이언트는 서버와 동일한 주소 및 자격 증명이 필요.
- gRPC를 사용하면 강력한 타입의 스키마로 서로 다른 서비스 간 쉽게 통신 가능.
- 데이터 형식을 JSON보다 효과적으로 압축할 수 있으므로 통신이 더 빨라집니다.

## 실행
```powershell
npx ts-node .\src\server.ts
npx ts-node .\src\client.ts
```