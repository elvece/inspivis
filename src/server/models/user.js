var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var Schema = mongoose.Schema;

var User = new Schema('User', {
  oauthID: Number,
  name: String,
  created: Date
});

module.exports = mongoose.model('User', User);

