const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const appConf = require('./app.conf');
const utils = require('../utils');

const resolve = utils.resolve;
const assetsPath = utils.assetsPath;

module.exports = {
    entry: {
        app: ['./tasks/utils/dev-client', appConf.entry]
    },
    output: {
        path: appConf.buildRoot,
        filename: '[name].js',
        publicPath: appConf.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.json'],
        modules: [
            resolve('src'),
            'node_modules'
        ],
        alias: {
            src: resolve('src'),
            assets: resolve('assets')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            include: [resolve('src'), resolve('test')]
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.less/,
            loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src'), resolve('test')]
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: assetsPath('img/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                // need to pass as 'devlopment'
                NODE_ENV: `'${appConf.env}'`
            }
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            favicon: './src/favicon.ico',
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ],
    //devtool: '#cheap-module-eval-source-map',
    devtool: '#inline-source-map'
};