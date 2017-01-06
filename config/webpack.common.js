var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
let path = require('path');
module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'main': './src/main.ts',
        // 'main': './src/app/app.module.ts',
        'vendors': './src/vendors.ts'
    },

    resolve: {
        extensions: ['.ts', '.html', '.js', '.json', '.less', '.css', '.scss'],
        alias:{
            ionic:path.resolve(__dirname,'./node_modules')
        }
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.(png|jpg|jpeg|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
            }
        } ,{
            test: /\.json$/,
            loader: "json-loader"
        }, {
            test: [/ionicons\.svg/, /ionicons\.eot/, /ionicons\.ttf/, /ionicons\.woff/, /roboto-bold\.woff/, /roboto-medium\.woff/, /roboto-light\.woff/, /roboto-regular\.woff/, /roboto-bold\.ttf/, /roboto-medium\.ttf/, /roboto-light\.ttf/, /roboto-regular\.ttf/, /noto-sans-bold\.ttf/, /noto-sans-regular\.ttf/],
            loader: 'file-loader',
            query:{
                limit: 10000,
                name: 'fonts/[name].[hash:7].[ext]'
            }
        }],
        exprContextCritical: false  // angular 警告错误
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: path.resolve(__dirname, '../src/index.html')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'polyfills', 'vendors']
        }),
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, __dirname),  // angular 警告错误
        // new ExtractTextPlugin("index.[hash].css"),
        new webpack.LoaderOptionsPlugin({
            options: {
                sassLoader: {  // sassLoader
                    includePaths: [
                        "node_modules/ionic-angular",
                        "node_modules/ionicons/dist/scss"
                    ]
                }
            }
        })
    ]
};
