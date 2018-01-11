const webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
    entry: {
        polyfill : 'babel-polyfill',
        main : './src/index.js'
    },
    output: {
        path: BUILD_PATH,
        filename: 'js/[name].js'
    },
    //如果不需要react这段可以去掉
    resolve: {
        alias: {
            "react": "anujs/dist/ReactIE.js",
            "react-dom": "anujs/dist/ReactIE.js",
            'prop-types': 'anujs/lib/ReactPropTypes',
            'create-react-class': 'anujs/lib/createClass'
        }
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