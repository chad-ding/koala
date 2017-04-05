var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var appConf = require('./app.conf')
var utils = require('../utils')
var resolve = utils.resolve
var assetsPath = utils.assetsPath

module.exports = {
    entry: {
        app: ['./tasks/utils/dev-client', appConf.entry]
    },
    devtool: '#cheap-module-eval-source-map',
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
            'src': resolve('src'),
            'assets': resolve('assets')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            enforce: "pre",
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
            query: {
                limit: 10000,
                name: assetsPath('img/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                // need to pass as "devlopment"
                NODE_ENV: '"' + appConf.env + '"'
            }
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ]
}
