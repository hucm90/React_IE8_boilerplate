const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const es3ifyPlugin = require('es3ify-webpack-plugin');
const autoprefixer = require('autoprefixer');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');

// common
const Mode = 'development';
const Output = { publicPath: '/', chunkFilename: "[name].chunk.js" };
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
const SourceMapLoaderRule = { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' };
const UrlLoaderRule = { test: /\.(png|jpg|gif|bmp|svg|swf|mp3|ogg)(\?.*$|$)/, loader: 'url-loader', options: {limit: 2048, name: "assets/[hash:5].[ext]"} };

const ExtractLoader = { loader: MiniCssExtractPlugin.loader, options: { publicPath: '../' }};
const CssLoader = { loader: 'css-loader', options: {modules: {localIdentName: '[name]_[local]_[hash:base64:8]'}, sourceMap: true} };
const CssLoaderRule = { test: /\.css$/, use: [ExtractLoader, CssLoader] };
const SassLoaderRule = { test: /\.scss$/, use: [ExtractLoader, CssLoader, 'sass-loader']};

// plugins
const HtmlPluginInstance = new HtmlWebpackPlugin({ template: './index.html' });
const MiniCssExtractPluginInstance =  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
});

module.exports = {
    mode: Mode,
    // entry: [path.resolve(SRC_PATH, 'index.js')],
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
            SourceMapLoaderRule,
            UrlLoaderRule,
            CssLoaderRule,
            SassLoaderRule,
        ]
    },

    plugins: [
        // new es3ifyPlugin(),
        HtmlPluginInstance,
        MiniCssExtractPluginInstance,
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

    // devtool: 'none'
    devtool: 'eval-source-map'
};
