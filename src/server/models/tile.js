var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var Schema = mongoose.Schema;

var Tile = new Schema({
  image: String,
  description: String,
  artist: String,
  rating: Number,
  tags: [String]
});

module.exports = mongoose.model('Tiles', Tile);

