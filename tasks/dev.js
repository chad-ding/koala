process.env.NODE_ENV = 'development';

const opn = require('opn');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const proxyMiddleware = require('http-proxy-middleware');
const webpackConfig = require('./conf/webpack.dev.conf');
const appConf = require('./conf/app.conf');
const utils = require('./utils');

const port = process.env.PORT || appConf.devPort;
const autoOpenBrowser = true;
const proxyTable = appConf.proxyTable;
const app = express();
const compiler = webpack(webpackConfig);
const uri = 'http://localhost:' + port;

utils.checkLoaderEnable(webpackConfig, 'eslintEnable', 'eslint-loader');
utils.checkLoaderEnable(webpackConfig, 'babelEnable', 'babel-loader');

const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
});

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {}
});

compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({ action: 'reload' });
        cb();
    });
});

// proxy api requests
if (proxyTable) {
    Object.keys(proxyTable).forEach(function(context) {
        let options = proxyTable[context];
        if (typeof options === 'string') {
            options = { target: options };
        }
        app.use(proxyMiddleware(options.filter || context, options));
    });
}

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve pure static assets
let staticPath = path.posix.join(appConf.assetsPublicPath, appConf.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

devMiddleware.waitUntilValid(function() {
    console.info('>>> Listening at ' + uri + '\n');
});

module.exports = app.listen(port, function(err) {
    if (err) {
        console.error(err);
        return;
    }

    // when env is testing, don't need open it
    if (autoOpenBrowser) {
        opn(uri);
    }
});