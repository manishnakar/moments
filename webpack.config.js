'use strict';

// const HTMLWebpackPlugin = require('html-webpack-plugin');
//
// const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
//   template: `${__dirname}/src/index.html`,
//   filename: 'index.html',
//   inject: 'body',
// });

// let loadEnvs = new webpack.DefinePlugin({
//   'global': {},
//   'process.env': {
//     'NODE_ENV': "'development'",
//   },
//   'global.GENTLY': false,
// });

module.exports = {
  // target: 'node',
  // externals: {
  //   React: 'react',
  // },
  entry: `${__dirname}/src/index.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', 'jsx'],
  },
  // plugins: [HTMLWebpackPluginConfig],
};
