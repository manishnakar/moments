'use strict';

const webpack = require('webpack');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body',
});

let loadEnvs = new webpack.DefinePlugin({
  'global': {},
  'process.env': {
    'NODE_ENV': "'development'",
  },
  'global.GENTLY': false,
});

module.exports = {
  target: 'node',
  externals: {
    React: 'react',
  },
  entry: `${__dirname}/src/index.js`,
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
    path: `${__dirname}/public`,
  },
  plugins: [HTMLWebpackPluginConfig, loadEnvs, new WatchMissingNodeModulesPlugin(`${__dirname}/node_modules`)],
};
