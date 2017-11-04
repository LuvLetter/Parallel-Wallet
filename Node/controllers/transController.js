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
    var tp1 = await ctx.request.body;
    tp1.push(new Date());
    var tmp = Trans(await ctx.request.body);
    tmp.save(function(err) {
        if (err) throw err;
      
        console.log(tmp);
      });
    });


module.exports = router.routes.bind(router);