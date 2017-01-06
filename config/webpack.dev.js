var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var path = require('path');
module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.join(__dirname, 'src'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ["style-loader", "css-loader","raw-loader"]
        }, {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader","raw-loader"]
                // loader: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
        }]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        hot: true,
        inline: true,
        host: '10.33.4.230'
    }
});
