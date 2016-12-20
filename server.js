// Initialize Firebase
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
require('firebase/storage');
const dotenv = require('dotenv');

dotenv.load();

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);
