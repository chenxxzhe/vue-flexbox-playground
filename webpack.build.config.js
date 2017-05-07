var config = require('./webpack.config.js');

var webpack = require('webpack');
var CleanFolder = require('clean-webpack-plugin');
var HtmlPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
var path = require('path');
var merge = require('webpack-merge');

// options: {
//     loaders: {
//         css: ExtractTextPlugin.extract({
//             use: 'css-loader',
//             fallback: 'vue-style-loader', // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
//         }),
//     },
// },
module.exports = merge(config, {
    devtool: 'cheap-module-source-map',
    plugins: [
        // clean ./dist
        new CleanFolder(path.resolve(__dirname, './dist')),
        // close vue.js warning
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new HtmlPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html'),
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            sourceMap: true,
        }),
        new ExtractTextPlugin({
            filename: 'style.[contenthash].css',
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true,
            },
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
    ],
});
