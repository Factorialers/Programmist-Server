import { getAuth as getAdminAuth } from 'firebase-admin/auth';
import { getAuth } from 'firebase/auth';
import { firebaseApp, firebaseAdminApp } from './index';

const auth = getAuth(firebaseApp);
const adminAuth = getAdminAuth(firebaseAdminApp);

export { auth, adminAuth };
