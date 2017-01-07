var config = {
  apiKey: process.env.FIREBASE_API_KEY || FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL || FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || FIREBASE_MESSAGING_SENDER_ID,
};

export default config;
