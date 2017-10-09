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

//needs that query string yo
router.get('/editProgression', isLoggedIn, function(req, res) {
  	db.chordProgression.find({
  		where: {id: req.query.id},
  		order: '"sequence" ASC',
  		include: [{
  			model: db.chordProgSegment,required: false,
  			where: {chordProgressionId: req.query.id},
  		}]
  	})
  	.then(function(chordProg){
  		db.harmonicElement.findAll({
  			attributes: ['id','name','easyScore'],
  			order: '"id" ASC'
  		})
  		.then(function(harmElems){
  			db.melodicElement.findAll({
  				attributes: ['id','name','firstFourDur','secondFour'],
  				order: '"id" ASC'
  			})
  			.then(function(melElems){
  				//these 3 lines might be unnecessary now after required:false...check
  				var segments = [];
  				if(chordProg!==null){
  					segments = chordProg.dataValues.chordProgSegments;
  				}
  				res.render('progression/editProgression',{
					currentUser:req.user,
					progressionId: req.query.id,
					segments: segments,
					harmElems: harmElems,
					melElems: melElems,
					chordProg: chordProg
				});
  			});	
  		});	
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
	.then(function(newProg){
		res.redirect('/progression/editProgression?id='+newProg.dataValues.id);
	});
});

//post to create new progression segment item
router.post('/addProgressionSegment', isLoggedIn, function(req, res) {
  	var newProgressionSegment = req.body;
  	
  	db.melodicElement.findOne({
  		where: {id: newProgressionSegment.melElement}
  	})
  	.then(function(melElem){
  		db.harmonicElement.findOne({
  			where: {id: newProgressionSegment.harmElement}
  		})
  		.then(function(harmElem){
  			console.log("######HARM#####",harmElem,"######MEL#####",melElem)
  			db.chordProgSegment.create({
				chordProgressionId: newProgressionSegment.progressionId,
				melodicElementId: newProgressionSegment.melElement,
				harmonicElementId: newProgressionSegment.harmElement,
				harmName: harmElem.dataValues.name,
				melName: melElem.dataValues.name,
				harmEasyScore: harmElem.dataValues.easyScore,
				melFirstFour: melElem.dataValues.firstFourDur,
				melSecondFour: melElem.dataValues.secondFour,
				sequence: newProgressionSegment.sequence
			})
  		})
  	})
  	
	.then(function(){
		res.redirect('/progression/editProgression?id='+newProgressionSegment.progressionId);
	});
});

module.exports = router;
