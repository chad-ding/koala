const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const appConf = require('./app.conf');
const utils = require('../utils');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const theme = require('../../src/theme');

const resolve = utils.resolve;
const assetsPath = utils.assetsPath;

const ExtractVendorCSS = new ExtractTextPlugin({ //extract library style files into vendor
    filename: assetsPath('css/vendor.[contenthash].css'),
    allChunks: true
});
const ExtractAppCSS = new ExtractTextPlugin({ //extract project style files into app
    filename: assetsPath('css/app.[contenthash].css'),
    allChunks: true
});

process.noDeprecation = true;

module.exports = {
    // Don't attempt to continue if there are any errors.
    bail: true,
    // We generate sourcemaps in production. This is slow but gives good results.
    // You can exclude the *.map files from the build during deployment.
    devtool: 'source-map',
    entry: {
        app: appConf.entry,
        vendor: [ //build the mostly used framework scripts into vendor.
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'redux',
            'redux-thunk',
            'prop-types',
            'whatwg-fetch',
            'promise-polyfill'
        ],
        antd: [ //build the mostly used components into a independent chunk,avoid of total package over size.
            'antd/lib/button',
            'antd/lib/icon',
            'antd/lib/breadcrumb',
            'antd/lib/form',
            'antd/lib/menu',
            'antd/lib/input',
            'antd/lib/input-number',
            'antd/lib/dropdown',
            'antd/lib/table',
            'antd/lib/tabs',
            'antd/lib/modal',
            'antd/lib/row',
            'antd/lib/col'
        ],
        common: [ //extract project common function into a independent chunk.
            `${resolve('src')}/commons/resource`,
            `${resolve('src')}/commons/utils`
        ]
    },
    output: {
        path: appConf.buildRoot,
        publicPath: appConf.assetsPublicPath,
        filename: assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: assetsPath('js/[id].[chunkhash].js')
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
            use: ExtractVendorCSS.extract({
                fallback: 'style-loader',
                use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    'autoprefixer-loader'
                ]
            })
        }, {
            test: /\.less$/,
            include: resolve('node_modules'),
            use: ExtractVendorCSS.extract({
                fallback: 'style-loader',
                use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    'autoprefixer-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            modifyVars: theme
                        }
                    }
                ]
            })
        }, {
            test: /\.less$/,
            include: resolve('src'),
            use: ExtractAppCSS.extract({
                fallback: 'style-loader',
                use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    'autoprefixer-loader',
                    'less-loader'
                ]
            })
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
                // need to pass as "prod" otherwise will be treat as variables
                NODE_ENV: `'${appConf.env}'`
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false // remove all comments
            },
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        // extract css into its own file
        // Note: this won't work without ExtractTextPlugin.extract(..) in `loaders`.
        ExtractVendorCSS,
        ExtractAppCSS,
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin(),
        // generate dist index.html with correct asset hash for caching.
        // you can customize output by editing /index.html
        // see https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: appConf.buildIndex,
            template: 'index.html',
            favicon: './src/favicon.ico',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        // split vendor js into its own file
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'antd', 'common'],
            minChunks: Infinity
        }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
            //chunks: ['vendor', 'antd', 'common']
        }),
        // copy custom static assets
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../../assets'),
            to: appConf.assetsSubDirectory,
            ignore: ['img/**', 'fonts/**']
        }]),
        new BundleAnalyzerPlugin({
            // Can be `server`, `static` or `disabled`.
            // In `server` mode analyzer will start HTTP server to show bundle report.
            // In `static` mode single HTML file with bundle report will be generated.
            // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
            analyzerMode: 'disabled',
            // Host that will be used in `server` mode to start HTTP server.
            analyzerHost: '127.0.0.1',
            // Port that will be used in `server` mode to start HTTP server.
            analyzerPort: 8888,
            // Path to bundle report file that will be generated in `static` mode.
            // Relative to bundles output directory.
            reportFilename: 'report.html',
            // Automatically open report in default browser
            openAnalyzer: true,
            // If `true`, Webpack Stats JSON file will be generated in bundles output directory
            generateStatsFile: false,
            // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
            // Relative to bundles output directory.
            statsFilename: 'stats.json',
            // Options for `stats.toJson()` method.
            // For example you can exclude sources of your modules from stats file with `source: false` option.
            // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
            statsOptions: null,
            // Log level. Can be 'info', 'warn', 'error' or 'silent'.
            logLevel: 'info'
        })
    ]
};