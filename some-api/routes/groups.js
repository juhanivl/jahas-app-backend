var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Group = require('../models/Group.js'); // this is important! link between route and model schema


/* GET /groups listing. */
router.get('/', function(req, res, next) {
  Group.find(function (err, groups) {
    if (err) return next(err);
    res.json(groups);
  });
});

/* GET /groups/id */
router.get('/:id', function(req, res, next) {
  Group.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* POST /todos */
router.post('/createGroup', function(req, res, next) {
  Group.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id/', function(req, res, next) {
  Group.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//update groupSteps
router.put('/:id/updateGroupsSteps', function (req, res, next) {
  //FIRST GET CURRENT STEPS
  Group.findById(req.params.id, function (err, post) {
    if (err) return next(err);

    var currentSteps = post.groupSteps;
    var newSteps = req.body.groupSteps;
    currentSteps=parseInt(currentSteps);
    newSteps=parseInt(newSteps);
    newSteps = newSteps + currentSteps;

    //newSteps = newSteps + currentSteps;
    req.body.groupSteps =  newSteps;
    //req.body.groupSteps = getNewSteps(currentSteps, newSteps);

    Group.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
      //res.send(req.params); //vanhat askeleet
      //res.json(req.body.groupSteps); //lähetettävät askeleet!
    });

  });

});



//addMember SAFE TO DELETE
router.put('./:id/addMemberToGroup', function(req, res, next){
  Group.findById(req.params.id, function(err, post){
    if(err) return next(err);

    var currentMembers = post.members;
    var newMember = req.body.members;

    currentMembers.push(newMember);

    req.body.members = currentMembers;

    Group.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });

  });
});

//SAFE TO DELETE
router.put('/:id/getAndPut', function (req, res, next) {
  //FIRST GET CURRENT STEPS
  Group.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    //TODO: EI LISÄÄ MATEMAATTISESTI
    var currentSteps = post.groupSteps;
    var newSteps = req.body.groupSteps;


    //newSteps = newSteps + currentSteps;
    req.body.groupSteps = req.body.groupSteps + post.groupSteps;
    //req.body.groupSteps = getNewSteps(currentSteps, newSteps);

    Group.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
      //res.send(req.params); //vanhat askeleet
      //res.json(req.body.groupSteps); //lähetettävät askeleet!
    });

  });

});

module.exports = router;
