var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('../config/ppConfig');


router.get('/', function(req, res) {
  res.render('journal/journalList');
});

router.get('/createJournal', function(req, res) {
  res.render('journal/createJournal');
});

router.get('/editJournal', function(req, res) {
  res.render('journal/editJournal');
});


module.exports = router;
