let config = {
    runLevel: process.env.run_level || 'product',
    db: 'mongodb://wattle:wattle@allet-shard-00-00-l3uxp.mongodb.net:27017,wallet-shard-00-01-l3uxp.mongodb.net:27017,wallet-shard-00-02-l3uxp.mongodb.net:27017/wattle',
    auth:{
        //后台管理
        user: 'hdunic',
        password: 'mouse',
    },
    session: {
        //session相关
        key: 'ihdu_login', /** (string) cookie key (default is koa:sess) */
        maxAge: 86400000, /** (number) maxAge in ms (default is 1 days) */
        overwrite: true, /** (boolean) can overwrite or not (default true) */
        httpOnly: true, /** (boolean) httpOnly or not (default true) */
        signed: true, /** (boolean) signed or not (default true) */
    },
    log: {
        //日志相关
        filename: './logs/log',
        datePattern: 'yyyy-MM.',
        json: false,
        prepend: true,
        level: 'info'
    },
    port: process.env.port || 4000,
    keys: process.env.keys || ['i-HDU_Login']
};

module.exports = config;
