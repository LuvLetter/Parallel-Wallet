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

router.post('/blockchainSubmit', async function (ctx) {
    const dateTime = Date.now();
    const timestamp = Math.floor(dateTime / 1000);
    var tp1 = await ctx.request.body;
    var tp2 = {
        description: tp1.description,
        date: timestamp,
        Entry: tp1.Entry
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