'use strict';

const express = require('express');
const firebase = require('firebase/app');
require('firebase/storage');
require('firebase/auth');
require('firebase/database');
const dotenv = require('dotenv');
// const debug = require('debug')('moments:server');

const app = express();

const PORT = process.env.PORT || 3000;

dotenv.load();

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

app.use(express.static('./'));

app.get('*', function(request, response) {
  response.sendFile('index.html', { root: '.' });
});


module.exports = app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
