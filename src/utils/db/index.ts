// import serviceAccount from 'src/config/serviceAccountKey.json';
import admin from 'firebase-admin';
import type { ServiceAccount } from 'firebase-admin';

if (!admin.apps.length) {
  try {
    const serviceAccount: ServiceAccount = {
      projectId: process.env.FIREBASE_PROJECT_ID ?? '',
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL ?? '',
      privateKey: process.env.FIREBASE_PRIVATE_KEY ?? '',
    };

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.FIREBASE_DATABASE_URL,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log('Firebase admin initialization error', error.stack);
    }
  }
}

export default admin.firestore();
