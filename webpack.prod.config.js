const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const es3ifyPlugin = require('es3ify-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');


// common
const Mode = 'production';
const Output = { publicPath: '/' };
const Extensions = ['.js', '.jsx', '.ts', '.tsx'];
const Modules = [SRC_PATH, 'node_modules'];
const Alias = {
    '@reach/router': path.resolve(SRC_PATH, 'Lib', 'Router'),
    'react': 'anujs/dist/ReactIE.js',
    'react-dom': 'anujs/dist/ReactIE.js',
    'prop-types': 'anujs/lib/ReactPropTypes',
    'devtools': 'anujs/lib/devtools',
    'create-react-class': 'anujs/lib/createClass'
};

// rules
const EslintRule = { enforce: 'pre', test: /\.(js|jsx|ts|tsx)$/, exclude: /node_modules/, use: 'eslint-loader' };
const TsLoaderRule = { test: /\.tsx?$/, loader: 'awesome-typescript-loader' };
const UrlLoaderRule = { test: /\.(png|jpg|gif|bmp|svg|swf|mp3|ogg)(\?.*$|$)/, loader: 'url-loader', options: {limit: 2048, name: "assets/[hash:5].[ext]"} };

const ExtractLoader = { loader: MiniCssExtractPlugin.loader, options: { publicPath: '../' }};
const CssLoader = { loader: 'css-loader', options: {modules: {localIdentName: '[name]_[local]_[hash:base64:8]'}, sourceMap: true} };
const CssLoaderRule = { test: /\.css$/, use: [ExtractLoader, { loader: 'css-loader', options: {sourceMap: true} }] };
const SassLoaderRule = { test: /\.scss$/, use: [ExtractLoader, CssLoader, 'sass-loader']};

// plugins
const Es3ifyPluginInstance = new es3ifyPlugin();
const HtmlPluginInstance = new HtmlWebpackPlugin({ template: './index.html' });
const UglifyJsPluginInstance = new UglifyJsPlugin({uglifyOptions: {ie8: true, compress: true, mangle: false,}});
const MiniCssExtractPluginInstance =  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
});



module.exports = {
    mode: Mode,
    // entry: [
    //     path.resolve(SRC_PATH, 'index.tsx'),
    // ],
    output: Output,

    resolve: {
        extensions: Extensions,
        modules: Modules,
        alias: Alias,
    },

    module: {
        rules: [
            EslintRule,
            TsLoaderRule,
            UrlLoaderRule,
            CssLoaderRule,
            SassLoaderRule,
        ]
    },

    optimization: {
        minimizer: [
            UglifyJsPluginInstance,
        ],
    },

    plugins: [
        Es3ifyPluginInstance,
        HtmlPluginInstance,
        MiniCssExtractPluginInstance,
        UglifyJsPluginInstance,
    ],

    devtool: "none"
};
