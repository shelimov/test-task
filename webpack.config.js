var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  context: __dirname + '/src/client',
  entry: ['./index', './style.scss'],
  output: {
    path: __dirname + '/build',
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
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader','css-loader!sass-loader'),
      exclude: /node_modules/
    }]
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ]
}