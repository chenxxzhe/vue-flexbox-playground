var config = require('./webpack.config.js');
var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var HtmlPlugin = require('html-webpack-plugin');


module.exports = merge(config, {
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        // contentBase: path.join(__dirname, 'public'),
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
    },
});
