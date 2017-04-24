var path = require('path');

module.exports = {
    env: process.env.NODE_ENV,
    entry: './src/index.js',
    devPort: 9200,
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/',
    //for proxy api
    proxyTable: {
        '/api': {
            target: 'http://localhost:8080/kaleido-webapp/',
            changeOrigin: true,
            pathRewrite: {
                '^/api' : '/api'     // rewrite path
            }
        }
    },
    buildIndex: path.resolve(__dirname, '../../dist/index.html'),
    buildRoot: path.resolve(__dirname, '../../dist'),
    // 关闭eslint
    eslintEnable: true,
    // 关闭babel(需要源码为非转换代码，并且eslint是正确配置才可以)
    babelEnable: true
};
