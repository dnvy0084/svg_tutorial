
module.exports = {

	entry: {
		filterableProductTable: './src/js/react/thinkingInReact/FilterableProductTableEntry.js',
		testmain: "./src/js/delegate.js",
		moviegalleryTest: "./src/js/test/movie/MovieGalleryTest.js"
	},

	output: {
		path: './src/js/dist',
		filename: '[name].bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_module|bower_components)/,
				loader: "babel-loader",
				query: {
					presets: [ "es2015", 'react' ]
				}
			}
		]
	},

	devtool: "sourcemap",
	watch: true,
	debug: true
}