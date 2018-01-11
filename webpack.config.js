const webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: BUILD_PATH,
        filename: 'js/[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }],
        postLoaders: [{
            test: /\.js$/,
            loader: "es3ify-loader"
        }]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    devServer: {
        disableHostCheck: true,
        progress: true,
        outputPath : BUILD_PATH,
        host : "0.0.0.0",
        port:3000
    },
}