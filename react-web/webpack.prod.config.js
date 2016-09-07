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
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.(js|jsx)$/,
        loader: require.resolve('babel-loader'),
        include: path.resolve(__dirname, '../common'),
        babelrc: false,
        query: {
          presets: [require.resolve('babel-preset-es2015'), require.resolve('babel-preset-react')]
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
        include: path.join(__dirname, 'assets/images')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: [
          path.join(__dirname, 'node_modules/responsive-css'),
          path.join(__dirname, 'assets/css')
        ]
      },
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: WebpackStripLoader.loader('console.log')
      }
    ]
  },
  resolve: {
    root: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, '../common')
    ],
    extensions: ['', '.js', '.jsx']
  }
};
