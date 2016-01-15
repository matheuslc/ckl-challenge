var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/js/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
	eslint: {
		configFile: path.resolve(__dirname, '.eslintrc')
	},
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }]
  }
}
