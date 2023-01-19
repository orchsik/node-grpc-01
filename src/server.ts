import { Server, ServerCredentials } from '@grpc/grpc-js';

import { AuthServiceService } from './protos/auth';
import * as loginService from './services/login.service';

const server = new Server();

server.addService(AuthServiceService, { login: loginService.login });

server.bindAsync('localhost:8080', ServerCredentials.createInsecure(), () => {
  server.start();
});
