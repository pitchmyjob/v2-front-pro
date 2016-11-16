const webpack = require('webpack');

module.exports = {
  entry: [
    './public/src/index.js'
  ],
  output: {
    path: __dirname + '/dist/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist'
  }
};
