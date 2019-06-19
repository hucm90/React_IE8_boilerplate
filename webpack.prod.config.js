const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const es3ifyPlugin = require('es3ify-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {
    mode: process.env.NODE_ENV,

    // entry: [path.resolve(SRC_PATH, 'index.js')],
    output: {
        publicPath: "/"
    },

    resolve: {
        extensions: ['.js', '.jsx', ".ts", ".tsx"],
        modules: [SRC_PATH, "node_modules"],

        alias: {
            "@reach/router": path.resolve(ROOT_PATH, "lib", "Router"),
            "react": "anujs/dist/ReactIE.js",
            "react-dom": "anujs/dist/ReactIE.js",
            'prop-types': 'anujs/lib/ReactPropTypes',
            'devtools' : "anujs/lib/devtools",
            'create-react-class': 'anujs/lib/createClass'
        }
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { test: /\.(png|jpg|gif|bmp|svg|swf|mp3|ogg)(\?.*$|$)/, loader: "url-loader?limit=2048&name=assets/[hash:5].[ext]"},
            { test: /\.css$/, use: [{loader: MiniCssExtractPlugin.loader, options: {publicPath: '../'}}, "css-loader" ]},
        ]
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    ie8: true,
                },
            }),
        ],
    },

    plugins: [
        new es3ifyPlugin(),
        new HtmlWebpackPlugin({template: './index.html'}),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                ie8: true,
                compress: true,
                mangle: false,
            },
        }),
    ],

    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true
    }
};
