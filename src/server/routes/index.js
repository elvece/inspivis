var express = require('express');
var router = express.Router();
var Tile = ('../models/tile.js');
var User = require('./models/user.js');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

    // Tile.findQ()
    //   .then(function(results){
    //     console.log(results);
    //     res.json(results);
    //   }).catch(function(results){
    //     res.json({'Error': results});
    //   })
    //   .done();

router.get('/account', ensureAuthenticated, function(req, res){
  User.findById(req.session.passport.user, function(err, user) {
    if(err) {
      console.log(err);  // handle errors
    } else {
      res.render('account', { user: user});
    }
  });
});

//authentication helper
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}

});

module.exports = router;
