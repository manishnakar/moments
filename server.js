'use strict';

const express = require('express');
const firebase = require('firebase/app');
const dotenv = require('dotenv');
const debug = require('debug')('moments:server');

const app = express();

const PORT = process.env.PORT || 3000;
// // Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = firebase.storage;
//
// // Create a storage reference from our storage service
// const storageRef = storage.ref;

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);
dotenv.load();


module.exports = app.listen(PORT, () => {
  debug(`Listening on ${PORT}`);
});
