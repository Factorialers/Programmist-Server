import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import FirebaseService from '../libs/firebase/firebase.service';

const validateAuthorization = async (firebase: FirebaseService, authorization: string | undefined, uid: string | undefined) => {
  if (!(authorization && uid)) {
    return false;
  }

  const decodedToken = await firebase.adminAuth.verifyIdToken(authorization);

  return decodedToken.uid === uid;
};

@Injectable()
export default class AuthGuard implements CanActivate {
  constructor(private firebase: FirebaseService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    let authorization: string | undefined;
    let uid: string | undefined;
    context.getArgs().forEach((arg) => {
      if (arg && arg.req && arg.req.headers) {
        if (arg.req.headers.authorization) {
          authorization = arg.req.headers.authorization;
        }
        if (arg.req.headers.uid) {
          uid = arg.req.headers.uid;
        }
      }
    });

    const isValid = validateAuthorization(this.firebase, authorization, uid);

    return isValid;
  }
}
