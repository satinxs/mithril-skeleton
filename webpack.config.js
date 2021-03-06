const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './public/app.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};