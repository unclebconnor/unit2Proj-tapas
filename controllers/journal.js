var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('../config/ppConfig');
var isLoggedIn = require('../middleware/isLoggedIn');

router.get('/', isLoggedIn, function(req, res) {
	db.sessionLog.findAll({
		where: {userId: req.user.dataValues.id},
		order: '"date" DESC'
	})
	.then(function(sessionList){
		res.render('journal/journalList', {
			currentUser: req.user,
			sessionList: sessionList
		});
	});
});


router.get('/editJournal', isLoggedIn, function(req, res) {
  res.render('journal/editJournal', {currentUser: req.user});
});

router.post('/editJournal', isLoggedIn, function(req, res) {
  	var newEntry = req.body;
  	db.sessionLog.create({
		userId: newEntry.userId,
		title: newEntry.journalEntryTitle,
		date: newEntry.journalEntryDate,
		notes: newEntry.journalEntryNotes,
		status: newEntry.journalEntryStatus
	})
  	.then(function(){
		db.sessionLog.findAll({
			where: {userId: req.user.dataValues.id},
			order: '"date" DESC'
		})
		.then(function(sessionList){
			res.render('journal/journalList', {
				currentUser: req.user,
				sessionList: sessionList
			});
		});
	});
});

router.post('/addJournalItem', isLoggedIn, function(req, res) {
  	var newJournalItem = req.body;
  	db.sessionItem.create({
		sessionLogId: 5,
		// goalId: "coming soon",
		activityType: newJournalItem.activityType,
		title: newJournalItem.jiTitle,
		link: newJournalItem.jiLink,
		notes: newJournalItem.jiNotes,
		time: newJournalItem.time,
		completed: "false",
		// chordProgId:
	})
  	.then(function(){
		db.sessionItem.findAll({
			where: {sessionLogId: 5},
			order: '"createdAt" ASC'
		}).done()
		.then(function(sessionList){
			res.render('journal/editJournal', {
				currentUser: req.user,
				sessionList: sessionList
			});
		});
	});
});


module.exports = router;
