/*** webpack.config.js ***/
const path = require('path'), webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "examples/index.html"),
    filename: "./index.html"
});
module.exports = {
    entry: path.join(__dirname, "examples/index.js"),
    output: {
        path: path.resolve(__dirname, 'examples'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development') // production development
        }),
        new webpack.optimize.UglifyJsPlugin(),
        htmlWebpackPlugin
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001
    }
};