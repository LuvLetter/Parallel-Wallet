var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/wallet',{
    useMongoClient: true,
    /* other options */
  });

// create a schema
var transSchema = new Schema({
  trans_id: Number,
  description: String,
  date: Number,
  Entry: [{ vaild_user: Boolean, indicator: String}],
  Detail: [{ exchange: Number, asset: Number}]
});

// the schema is useless so far
// we need to create a model using it
var Trans = mongoose.model('Trans', transSchema);

// make this available to our users in our Node applications
module.exports = Trans;