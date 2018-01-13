const webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    autoprefixer = require('autoprefixer');

const ROOT_PATH = path.resolve(__dirname, ".");
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

const apiUrl = 'http://172.16.0.119/'; //api接口地址

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
        root : ['./scss'],
        extensions: ['', '.js', '.jsx'],
        alias: {
            "react": "anujs/dist/ReactIE.js",
            "react-dom": "anujs/dist/ReactIE.js",
            'prop-types': 'anujs/lib/ReactPropTypes',
            'devtools' : "anujs/lib/devtools",
            'create-react-class': 'anujs/lib/createClass'
        }
    },
    module: {
        loaders: [
            {test: /\.(js|jsx)(\?.*$|$)/,exclude: /node_modules/,loader: 'babel-loader'},
            {test: /\.(png|jpg|gif|bmp|svg|swf)(\?.*$|$)/, loader: "url?limit=2048&name=img/[hash].[ext]" },
            {test: /\.css$/,loader: "style!css"},
            {test: /\.scss$/,loader: "style!css!postcss!sass"},
        ],
        postLoaders: [{test: /\.(js|jsx)(\?.*$|$)/,loader: "es3ify-loader"}]
    },
    postcss: function () {
        return [autoprefixer];
    },
    plugins: [
        new ExtractTextPlugin("./css/[name].css"),
        new HtmlWebpackPlugin({template : "src/index.html"}),
        new CleanWebpackPlugin("build", {root:ROOT_PATH})
    ],
    devServer: {
        disableHostCheck: true,
        historyApiFallback: true,
        progress: true,
        outputPath : BUILD_PATH,
        host : "0.0.0.0",
        port:3000
    },
}