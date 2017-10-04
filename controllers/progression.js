var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('../config/ppConfig');
var isLoggedIn = require('../middleware/isLoggedIn');

router.get('/', function(req, res) {
  res.render('progression/progressionList');
});


router.get('/editProgression', function(req, res) {
  res.render('progression/editProgression');
});


module.exports = router;
