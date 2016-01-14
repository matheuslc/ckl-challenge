var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: path.resolve(__dirname, 'src/js/main.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js'
	},

	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader',
			presets: ['react', 'es2015'],
			query: {
				cacheDirectory: true
			}
		},

		{
			test: /\.scss$/,
      loaders: ["style", "css", "sass"]
		}
	]}
}
