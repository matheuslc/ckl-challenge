var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: path.resolve(__dirname, 'src/js/main.js'),
    vendors: ['react', 'react-picture', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: 'dist/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: 'babel',
      query: {
        cacheDirectory: true,
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=8192&name=img/[name].[ext]'
    }],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', 2)
  ]
}
