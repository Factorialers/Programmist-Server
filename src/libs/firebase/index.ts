import { ConfigService } from '@nestjs/config';
import { initializeApp as initializeAdminApp } from 'firebase-admin/app';
import { initializeApp } from 'firebase/app';
import Env from '../../config/environment/getter/getter.service';

const env = new Env(new ConfigService());

const firebaseApp = initializeApp(env.FirebaseConfig);
const firebaseAdminApp = initializeAdminApp(env.FirebaseAdminConfig);

export { firebaseApp, firebaseAdminApp };
