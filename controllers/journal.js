var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('../config/ppConfig');
var isLoggedIn = require('../middleware/isLoggedIn');


router.get('/', isLoggedIn, function(req, res) {
  res.render('journal/journalList', {currentUser: req.user});
});

router.get('/editJournal', isLoggedIn, function(req, res) {
  res.render('journal/editJournal', {currentUser: req.user});
});

router.post('/editJournal', function(req, res) {
  var newEntry = req.body;
  db.sessionLog.create({
	userId: newEntry.userId,
	title: newEntry.journalEntryTitle,
	date: newEntry.journalEntryDate,
	notes: newEntry.journalEntryNotes,
	status: newEntry.journalEntryStatus
	});
  console.log(req.body);
});


module.exports = router;
