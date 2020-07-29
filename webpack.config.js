const path = require('path')

module.exports = {
	entry: [
		'./src/index.css',
		'./src/index.js'
	],
	output: {
		publicPath: '/',
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: {
					loader: 'script-loader'
				}
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}
		]
	}
}