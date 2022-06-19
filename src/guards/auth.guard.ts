import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import FirebaseService from '../libs/firebase/firebase.service';

const validateAuthorization = async (firebase: FirebaseService, authorization: string | undefined) => {
  if (!authorization) {
    return false;
  }

  const decodedToken = await firebase.adminAuth.verifyIdToken(authorization);

  return !!decodedToken;
};

@Injectable()
export default class AuthGuard implements CanActivate {
  constructor(private firebase: FirebaseService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    let authorization: string | undefined;
    context.getArgs().forEach((arg) => {
      if (arg && arg.authorization) {
        authorization = arg.authorization;
      }
    });

    const isValid = validateAuthorization(this.firebase, authorization);

    return isValid;
  }
}
