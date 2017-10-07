var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('../config/ppConfig');
var isLoggedIn = require('../middleware/isLoggedIn');

//get journal list page
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

//get create journal
router.get('/createJournal', isLoggedIn, function(req, res) {
  res.render('journal/createJournal', {
  	currentUser: req.user
  });
});

//get edit journal
router.get('/editJournal', isLoggedIn, function(req, res) {
	db.sessionItem.findAll({
		where: {sessionLogId: req.query.id},
		order: '"createdAt" ASC'
	})
	.then(function(sessionList){
		console.log(sessionList, "########")
		res.render('journal/editJournal', {
			currentUser: req.user,
			sessionList: sessionList,
			sessionLogId: req.query.id
		});
	});
});


//create journal entry and return to journal list
//eventually have an if to redirect or reload edit page
router.post('/createJournal', isLoggedIn, function(req, res) {
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


//update edit journal
router.put('/editJournal', isLoggedIn, function(req, res) {
	db.sessionLog.update({
		title: req.body.journalEntryTitle,
		date: req.body.journalEntryDate,
		notes: req.body.journalEntryNotes,
		status: req.body.journalEntryStatus
	},{
		where: {id: req.body.sessionLogId}
	}).then(function(){
		res.end();
	})	
});


//post to create new journal item
router.post('/addJournalItem', isLoggedIn, function(req, res) {
  	var newJournalItem = req.body;
  	db.sessionItem.create({
		sessionLogId: newJournalItem.sessionLogId,
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
			where: {sessionLogId: newJournalItem.sessionLogId},
			order: '"createdAt" ASC'
		})
		.then(function(sessionList){
			res.render('journal/editJournal', {
				currentUser: req.user,
				sessionList: sessionList,
				sessionLogId: newJournalItem.sessionLogId
			});
		});
	});
});


module.exports = router;
