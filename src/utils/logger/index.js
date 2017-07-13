/**
 *@Author: chad.ding
 *@Date: 2017-07-13 10:02:12
 */

let log4js = require('log4js');
let fs = require('fs');
let path = require('path');

let logger = {};
exports.logger = logger;

// 加载配置文件  
let objConfig = JSON.parse(fs.readFileSync(path.join(__dirname, 'log4js.json'), 'utf8'));
// 目录创建完毕，才加载配置，不然会出异常  
log4js.configure(objConfig);

let logDebug = log4js.getLogger('logDebug');
let logInfo = log4js.getLogger('logInfo');
let logWarn = log4js.getLogger('logWarn');
let logError = log4js.getLogger('logError');

logger.debug = function(msg) {
    if (msg == null){
        msg = '';
    }
    logDebug.debug(msg);
};

logger.info = function(msg) {
    if (msg == null){
        msg = '';
    }
    logInfo.info(msg);
};

logger.warn = function(msg) {
    if (msg == null){
        msg = '';
    }
    logWarn.warn(msg);
};

logger.error = function(msg, exp) {
    if (msg == null){
        msg = '';
    }
    if (exp != null){
        msg += '\r\n' + exp;
    }
    logError.error(msg);
};

// 配合express用的方法  
exports.use = function(app) {
    //页面请求日志, level用auto时,默认级别是WARN  
    app.use(log4js.connectLogger(logInfo, { level: 'debug', format: ':method :url' }));
};
