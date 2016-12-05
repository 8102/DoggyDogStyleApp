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
		}],
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
