var path = require('path');
var webpack = require('webpack');
var WebpackStripLoader = require('strip-loader');

module.exports = {
  devtool: 'eval',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, './../app')
    },
    {
      test: /\.jsx$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, './../app')
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ],
      include: path.join(__dirname, './../app/common/assets/images')
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
      include: [
        path.join(__dirname, 'node_modules/responsive-css'),
        path.join(__dirname, './../app/common/assets/css/app')
      ]
    },
    {
      test: [/\.js$/, /\.jsx$/],
      exclude: /node_modules/,
      loader: WebpackStripLoader.loader('console.log')
    }]
  }
};