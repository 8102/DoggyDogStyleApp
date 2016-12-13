const path = require("path")

module.exports = {
	entry: {
		index: './src/index.jsx',
		debugHelpers: './src/debugHelpers.js'
	},
	output: {
		path: './www',
		filename: '[name].js'
	},
	module: {
		loaders: [{
			test: /\.js/,
			include: [
				path.resolve(__dirname, "src")
			],
			loader: "babel",
			query: {
				presets: [
					'es2015'
				]
			}
		}, {
			test: /\.jsx$/,
			include: [
				path.resolve(__dirname, "src")
			],
			loader: "babel",
			query: {
				presets: [
					'es2015',
					'react'
				]
			}
		}, {
			test: /\.css$/,
			loader: "style-loader!css-loader"
		},
		{
			test: /\.png$/,
			loader: "url-loader?limit=100000"
		},
		{
			test: /\.jpg$/,
			loader: "file-loader"
		},
		{
			test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=application/font-woff'
		},
		{
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=application/octet-stream'
		},
		{
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'file'
		},
		{
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=image/svg+xml'
		}
	],
	postLoaders: [{
		test: /index\.jsx$/,
		include: [
			path.resolve(__dirname, "src")
		],
		loader: "./android-fix-loader"
	}]
},
resolveLoader: {
	fallback: [
		__dirname,
		path.join(process.cwd(), 'node_modules')
	]
},
devtool: 'source-map'
}
