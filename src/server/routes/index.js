var express = require('express');
var router = express.Router();
var Tile = ('../models/tile.js');

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });

    Tile.findQ()
      .then(function(results){
        console.log(results);
        res.json(results);
      }).catch(function(results){
        res.json({'Error': results});
      })
      .done();
});

module.exports = router;
