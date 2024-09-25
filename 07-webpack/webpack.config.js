const HtmlWebpackPlugin = require("html-webpack-plugin");
const { hash } = require("node:crypto");
const path = require("node:path");

module.exports = {
	entry: "./src/app.ts",
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			{
				test: /.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			minify: false,

		})
	],
	output: {
		filename: "output.js",
		path: path.resolve(__dirname, "dist"),
		clean: true
	}
}