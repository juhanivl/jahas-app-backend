var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js'); // this is important! link between route and model schema


/* GET /Users listing. */
router.get('/', function(req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
//CHANGE USERNAME
router.put('/:id', function(req, res, next){
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* POST /users */
router.post('/addUser', function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//update userSteps
router.put('/:id/updateUserSteps', function (req, res, next) {
  //FIRST GET CURRENT STEPS
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    var currentSteps = post.userSteps;
    var newSteps = req.body.userSteps;
    currentSteps=parseInt(currentSteps);
    newSteps=parseInt(newSteps);
    newSteps = newSteps + currentSteps;

    //newSteps = newSteps + currentSteps;
    req.body.userSteps =  newSteps;

    User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);

    });

  });

});

/* DELETE /users/:id */
router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
