import { Server, ServerCredentials } from '@grpc/grpc-js';

import { HOST } from './config';
import { AuthServiceService } from './protos/auth';
import * as loginService from './services/login.service';

const server = new Server();

server.addService(AuthServiceService, { login: loginService.login });

server.bindAsync(HOST, ServerCredentials.createInsecure(), () => {
  server.start();
  console.log(`Server is running on ${HOST}`);
});
