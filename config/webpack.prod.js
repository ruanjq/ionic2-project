require('shelljs/global');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var path = require('path');



rm('-rf', path.resolve(__dirname, "../cordovaApp/www"));
mkdir('-p', path.resolve(__dirname, "../cordovaApp/www"));

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../cordovaApp/www'),
        // publicPath: 'www/',
        publicPath: '',
        filename: 'js/[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            include: path.resolve(__dirname, "../src"),
            loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader"
            })
        }, {
            test: /\.css$/,
            include: /node_modules/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader",
                publicPath: "../"     // 过滤 ionicons/dist/scss/ionicons 文件中的fonts 路径
            })
        }, {
            test: /\.scss$/,
            include: path.resolve(__dirname, "../src"),
            loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader!sass-loader"
            })
        }, {
            test: /\.scss$/,
            include: /node_modules/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader!sass-loader",
                publicPath: "../"  // 过滤 ionic-angular/css/ionic.min 文件中的fonts 路径
            })
        }]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
            mangle: {
                keep_fnames: true
            }
        }),
        new ExtractTextPlugin("css/[name].[hash].css")
        new webpack.LoaderOptionsPlugin({
            options: {
                htmlLoader: {
                    minimize: false // workaround for ng2
                }
            }
        })

    ]
});
