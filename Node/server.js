const Koa = require('koa');
const axios = require('axios');
//const koaSession = require('koa-session');
//const koaStatic = require('koa-static');
const bodyParser = require('koa-bodyparser');
const middleware = require('./utils/middleware');
const config = require('./config');
const colors = require('colors');
// controllers
const transController = require('./controllers/transController.js');

const server = new Koa();


var instance = axios.create({
  baseURL: 'http://169.51.7.198:31090/api/',
  timeout: 2000,
  headers: {'Content-Type': 'application/json'}
});

instance.get('/partner')
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});


server.use(bodyParser());

server.use(transController());

// request body parser

//server.use(middleware.errorHandler());

//Listen
server.listen(config.port);
/*
var Trans = require('./models/trans');

// create a new user called chris
var chris = new Trans({
    trans_id: "2333",
    description: "233",
    date: "1",
    Entry: [{ vaild_user: true, indicator: "233"},{vaild_user: false,indicator: "4555"}],
    Detail: [{ exchange: "1", asset: "2"}]
});



// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});
*/