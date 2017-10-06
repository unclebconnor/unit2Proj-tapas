var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('../config/ppConfig');
var isLoggedIn = require('../middleware/isLoggedIn');

//get progression list (not breaking at the moment)
router.get('/', isLoggedIn, function(req, res) {
	db.chordProgression.findAll({
		where: {userId: req.user.dataValues.id},
		order: '"createdAt" DESC'
	})
	.then(function(progressionList){
		res.render('progression/progressionList',{
			currentUser:req.user,
			progressionList: progressionList
		});
	});
});

//get create progress page (working at the moment)
router.get('/createProgression', isLoggedIn, function(req, res) {
  	res.render('progression/createProgression', {
  		currentUser:req.user
  	});
});

router.get('/editProgression', isLoggedIn, function(req, res) {
  	res.render('progression/editProgression',{
		currentUser:req.user,
		progressionId: req.query.id
	});
});


//create a new progression
router.post('/createProgression', isLoggedIn, function(req, res) {
  	var newEntry = req.body;
  	db.chordProgression.create({
		userId: newEntry.userId,
		name: newEntry.progressionName,
		description: newEntry.progDesc,
		measureCount: newEntry.totalMeasures,
		keySignatureString: newEntry.keySignature,
		timeSignatureString: newEntry.timeSignature
	})
	.then(function(newEntry){
		db.chordProgression.findAll({
			where: {userId: newEntry.dataValues.userId},
			order: '"createdAt" DESC'
		})
		.then(function(progressionList){
			console.log(progressionList,"#####");
			res.render('progression/progressionList',{
				currentUser:req.user,
				progressionList: progressionList
			});
		});
	});
});

//post to create new progression segment item
router.post('/addProgressionSegment', isLoggedIn, function(req, res) {
  	var newProgressionSegment = req.body;
  	db.chordProgSegment.create({
		chordProgressionId: newProgressionSegment.progressionId,
		melIdString: newProgressionSegment.melElement,
		harmIdString: newProgressionSegment.harmElement,
		beats: newProgressionSegment.beats,
		sequence: newProgressionSegment.sequence
	// })
 //  	.then(function(){
	// 	db.sessionItem.findAll({
	// 		where: {sessionLogId: 5},
	// 		order: '"createdAt" ASC'
	// 	}).done()
	// 	.then(function(sessionList){
	// 		res.render('journal/editJournal', {
	// 			currentUser: req.user,
	// 			sessionList: sessionList
	// 		});
	// 	});
	});
});

module.exports = router;
