var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: path.join(__dirname, "src", "index.tsx"),
	output: {
		path: path.join(__dirname, "build"),
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "awesome-typescript-loader",
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
};
