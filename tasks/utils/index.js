const path = require('path');
const appConf = require('../conf/app.conf');
const chalk = require('chalk');

exports.resolve = function resolve(dir) {
    return path.join(__dirname, '../..', dir);
};

exports.assetsPath = function assetsPath(_path) {
    return path.posix.join(appConf.assetsSubDirectory, _path);
};

exports.checkLoaderEnable = function(webpackConfig, key, loader) {
    if (!appConf[key]) {
        // disable this loader
        let rules = webpackConfig.module.rules;
        let found = null;
        rules.forEach(function(each) {
            if (each.loader === loader) {
                found = each;
                return false;
            }
        });
        if (found) {
            rules.splice(rules.indexOf(found), 1);
            console.log(chalk.yellow('Disable loader:' + loader));
        }
    }
};
