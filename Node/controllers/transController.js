const Trans = require('../models/trans');
const Joi = require('joi');
const Router = require('koa-router');
const middleware = require('../utils/middleware');

const router = new Router();

// check login
//router.use(middleware.checkLogin('json'));

router.get('/getTable', async function (ctx) {

    ctx.body = await Trans.find({});
});

router.post('/getTable', async function (ctx) {
    const dateTime = Date.now();
    const timestamp = Math.floor(dateTime / 1000);
    var tp1 = await ctx.request.body;
    var tp2 = {
        transactionId: tp1.transactionId,
        timestamp: tp1.timestamp,
        description: tp1.description,
        asset: tp1.asset,
        exchange: tp1.exchange,
        For_asset: tp1.For_asset,
    }
    var tmp = Trans(tp2);
    tmp.save(function(err) {
        if (err) throw err;

        console.log(tmp);
      });
      ctx.body={
        status: 200
    };
});


module.exports = router.routes.bind(router);