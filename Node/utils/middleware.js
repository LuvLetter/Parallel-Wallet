const Joi = require('joi');
const config = require('../config');
const errorList = require('../utils/error');
const util = require('../utils/util');

/**
 * 检查是否登录
 * @returns {function(*, *)}
 */
exports.checkLogin = (type) => {
    return async (ctx, next) => {
        if (ctx.session.user === config.auth.user && ctx.session.keyid === 'keypass') {
            await next();
            return
        }
        if (type === 'json') {
            throw 40001;
        }
        ctx.redirect('/login')
    };
};
/**
 * 检查请求格式
 * @param format 函数 返回joi格式
 * @param option
 * @returns {function(*, *)} 返回格式检查中间件
 */
exports.checkFormat = (format, option) => {
    return async (ctx, next) => {
        let body;
        if (ctx.method === 'GET' || ctx.method === 'DELETE') {
            body = Object.assign({}, ctx.request.query, ctx.params);
        } else {
            body = Object.assign({}, ctx.request.body, ctx.params);
        }

        delete body[0];
        const result = Joi.validate(body, format(), option);
        if (result.error) {
            ctx.status = 400;
            ctx.body = {
                status: 400,
                success: false,
                msg: result.error.message
            };
            return;
        }

        await next();
    }
};
/**
 * 异常捕获
 * @returns {function(*, *)}
 */
exports.errorHandler = () => {
    return async (ctx, next) => {
        await next().catch((err) => {
            if (typeof err === 'number') {
                const info = errorList[err];
                if (info) {
                    ctx.status = info.status;
                    ctx.body = {
                        errorCode: err,
                        status: info.status,
                        success: false,
                        msg: info.msg
                    };
                }
                return
            }
            util.logtool(ctx, err);

            ctx.status = 500;
            ctx.body = {
                status: 500,
                success: false,
                msg: '服务器异常'
            };
        });
    };
};