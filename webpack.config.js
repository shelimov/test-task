var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
module.exports = [
{
  name: 'frontend',
  context: __dirname + '/src/client',
  entry: './index',
  output: {
    path: __dirname + '/build/client',
    filename: 'script.js'
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.sass$/,
      loader: ExtractTextPlugin.extract('style-loader','css-loader!sass-loader'),
      exclude: /node_modules/
    }]
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
},
{
  name: 'backend',
  entry: './index',
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  context: __dirname + '/src/server',
  externals: /^[a-z\-0-9]+$/,
  output: {
    path: __dirname + '/build/server',
    // publicPath: __dirname + '/src/server',
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: 'views', to: 'views'}
    ])
  ]
}]