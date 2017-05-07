var path = require('path');


var config = {
    entry: path.resolve(__dirname, './src/app.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    resolve: {
        alias: {
            Views: path.resolve(__dirname, './src/views/'),
            Components: path.resolve(__dirname, './src/components'),
            store$: path.resolve(__dirname, './src/store.js'),
            types$: path.resolve(__dirname, './src/types.js'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: process.env.NODE_ENV === 'production',
                },
            },
        ],
    },
};

module.exports = config;
