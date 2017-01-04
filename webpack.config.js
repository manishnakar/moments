'use strict';

const webpack = require('webpack');
require('dotenv').load({path: `${__dirname}/.env`});

const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body',
});

let loadEnvs = new webpack.DefinePlugin({
  'global': {},
  'process.env': {
    PORT: JSON.stringify(process.env.PORT),
    FIREBASE_API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY),
    FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
    FIREBASE_DATABASE_URL: JSON.stringify(process.env.FIREBASE_DATABASE_URL),
    FIREBASE_STORAGE_BUCKET: JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
    FIREBASE_MESSAGING_SENDER_ID: JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
  },
});

module.exports = {
  target: 'node',
  entry: `${__dirname}/app/index.js`,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`,
  },
  plugins: [HTMLWebpackPluginConfig, loadEnvs],
};
