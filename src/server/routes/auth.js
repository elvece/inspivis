var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/instagram',
  passport.authenticate('instagram'),
  function(req, res){
    res.redirect('/login');
    // res.redirect('https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code')
  });

router.get('/instagram/callback',
  passport.authenticate('instagram', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/account');
  });

router.get('/login', function(req, res) {
    res.render('login', {
      user: req.user
    });
});

router.post('/login', passport.authenticate('instagram'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router;
