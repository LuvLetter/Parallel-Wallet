var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/wallet',{
    useMongoClient: true,
    /* other options */
  });

// create a schema
var transSchema = new Schema({
  //trans_id: Number, 使用MongoDB ID
  description: String,
  date: Number,
  Entry: [{ vaild_user: Boolean, uid: Number, indicator: String,Detail: [{ exchange: Number, asset: Number}]}]
});

// the schema is useless so far
// we need to create a model using it
var Trans = mongoose.model('Trans', transSchema);

Trans.collection

// make this available to our users in our Node applications
module.exports = Trans;