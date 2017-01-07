'use strict';

module.exports = {
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
};
