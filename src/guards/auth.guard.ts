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
      if (arg && arg.authorization) {
        authorization = arg.authorization;
      }
      if (arg && arg.data && arg.data.id) {
        uid = arg.data.id;
      }
      if (arg && arg.where && arg.where.id) {
        uid = arg.where.id;
      }
    });

    const isValid = validateAuthorization(this.firebase, authorization, uid);

    return isValid;
  }
}
