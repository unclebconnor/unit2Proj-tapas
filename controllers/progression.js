var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('../config/ppConfig');

router.get('/', function(req, res) {
  res.render('progression/progressionList');
});


module.exports = router;