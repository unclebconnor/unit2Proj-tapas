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
  var today = new Date();
  // var date = today.getDate();
  // var month = today.getMonth() + 1;
  // var year = today.getFullYear();

  // today = month + "/" + date +"/" + year;
  res.render('journal/createJournal', {
  	currentUser: req.user,
  	today: today
  });
});

//get edit journal
router.get('/editJournal', isLoggedIn, function(req, res) {
	db.sessionLog.findOne({
  		where: {id: req.query.id},
  	})
  	.then(function(sessionLog){
  		db.activityType.findAll({
  			// add this later when users can create custom
  			// where: {id: req.query.id},
  		})
  		.then(function(activities){
  			db.chordProgression.findAll({
  				where: {userId: req.user.dataValues.id},
  				include: [{
  					model: db.chordProgSegment,required: false,
  				}]
  			})
  			.then(function(chordProgs){
				db.sessionItem.findAll({
					where: {sessionLogId: req.query.id},
					order: '"createdAt" ASC',
					include: [{
						nested: true,
						model: db.chordProgression,required: false,
						include: [{
							nested: true,
							model:db.chordProgSegment,required: false,
						}]
					}]
				})
				.then(function(sessionList){ 
					//needs to be JSON on the other side
					sessionList = JSON.parse(JSON.stringify(sessionList));
					res.render('journal/editJournal', {
						
						currentUser: req.user,
						sessionList: sessionList, //this sucker is JSON
						sessionLog: sessionLog,
						sessionLogId: req.query.id,
						activities: activities,
						chordProgs: chordProgs,
					});
				});
			});
  		});
  	});
});


//create journal entry go to edit page
router.post('/createJournal', isLoggedIn, function(req, res) {
  	var newEntry = req.body;
  	var date = newEntry.journalEntryDate;
  	if(!date){
  		date = new Date();
  	}
  	db.sessionLog.create({
		userId: newEntry.userId,
		title: newEntry.journalEntryTitle,
		date: date,
		notes: newEntry.journalEntryNotes,
		status: newEntry.journalEntryStatus
	})
	.then(function(newSession){
		res.redirect('/journal/editJournal?id='+newSession.dataValues.id);
	});
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
		chordProgressionId: newJournalItem.chordProgId
	})
	.then(function(newSession){
		res.redirect('/journal/editJournal?id='+newJournalItem.sessionLogId);
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


module.exports = router;
