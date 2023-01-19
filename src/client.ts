import { credentials, ServiceError } from '@grpc/grpc-js';

import { HOST } from './config';
import { AuthServiceClient, LoginRequest, LoginResult } from './protos/auth';

const loginRequest: LoginRequest = {
  username: 'admin',
  password: 'qwerty',
};

const client = new AuthServiceClient(HOST, credentials.createInsecure());

client.login(
  loginRequest,
  (err: ServiceError | null, response: LoginResult) => {
    console.log(JSON.stringify(response));
  }
);
