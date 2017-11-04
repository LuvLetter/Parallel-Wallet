//加工具函数，函数，如md5
const crypto = require('crypto');
const config = require('../config');
//Log
const winston = require('winston');
require('winston-daily-rotate-file');
const transport = new winston.transports.DailyRotateFile(config.log);
global.tolog = new (winston.Logger)({transports: [transport]});

exports.encry = function (word) {
    return crypto.createHash('sha256')
        .update(word)
        .digest('hex');
};

exports.md5 = function (str) {
    return crypto.createHash('md5').update(str).digest('hex');
};

exports.logtool = function (ctx, err) {
    tolog.error('Request-------');
    tolog.error('url: ' + ctx.url);
    tolog.error('method: ' + ctx.method);
    tolog.error('headers: ' + JSON.stringify(ctx.header));
    tolog.error('body: ');
    if (ctx.method === 'GET' || ctx.method === 'DELETE') {
        tolog.error(JSON.stringify(ctx.request.query));
    } else {
        tolog.error(JSON.stringify(ctx.request.body));
    }
    tolog.error('error info: ' + err);
};