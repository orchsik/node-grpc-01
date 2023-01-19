import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';

import { LoginCode, LoginRequest, LoginResult } from '../protos/auth';

const users = [{ id: 0, username: 'admin', password: 'qwerty' }];

const login = (
  call: ServerUnaryCall<LoginRequest, LoginResult>,
  callback: sendUnaryData<LoginResult>
) => {
  const user = users.find((user) => {
    return (
      user.username === call.request.username &&
      user.password === call.request.password
    );
  });

  if (user) {
    const result: LoginResult = {
      loginCode: LoginCode.SUCCESS,
      token: 'RandomSecretToken',
    };
    callback(null, result);
  } else {
    const result: LoginResult = {
      loginCode: LoginCode.FAIL,
    };
    callback(null, result);
  }
};

export { login };
