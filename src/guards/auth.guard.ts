import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { adminAuth } from '../libs/firebase/auth';

const validateAuthorization = async (authorization: string | undefined) => {
  if (!authorization) {
    return false;
  }

  const decodedToken = await adminAuth.verifyIdToken(authorization);

  return !!decodedToken;
};

@Injectable()
export default class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    let authorization: string | undefined;
    context.getArgs().forEach((arg) => {
      if (arg && arg.authorization) {
        authorization = arg.authorization;
      }
    });

    const isValid = validateAuthorization(authorization);

    return isValid;
  }
}
