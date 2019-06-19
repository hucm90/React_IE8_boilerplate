const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const es3ifyPlugin = require('es3ify-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {
    mode: 'development',

    // entry: [path.resolve(SRC_PATH, 'index.js')],
    output: {
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [SRC_PATH, 'node_modules'],

        alias: {
            '@reach/router': 'anujs/dist/Router',
            // "router": "anujs/dist/Router.js",
            'react': 'anujs/dist/ReactIE.js',
            'react-dom': 'anujs/dist/ReactIE.js',
            'prop-types': 'anujs/lib/ReactPropTypes',
            'devtools': 'anujs/lib/devtools',
            'create-react-class': 'anujs/lib/createClass'
        }
    },

    module: {
        rules: [
            { enforce: 'pre', test: /\.(js|jsx|ts|tsx)$/, exclude: /node_modules/, use: 'eslint-loader' },
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            // { test: /\.(png|jpg|gif|bmp|svg|swf|mp3|ogg)(\?.*$|$)/, loader: "url-loader?limit=2048&name=assets/[hash:5].[ext]"},
            // { test: /\.css$/, use: [{loader: MiniCssExtractPlugin.loader, options: {publicPath: '../'}}, "css-loader" ]},
        ]
    },

    plugins: [
        new es3ifyPlugin(),
        new HtmlWebpackPlugin({ template: './index.html' }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],

    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        stats: {
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false,
            chunkOrigins: false,
            version: false,
            publicPath: false,
            assets: false,
            builtAt: false,
        }
    },

    devtool: 'none'

    // devtool: 'eval-source-map'
};
