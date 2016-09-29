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

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Group.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /groups/:id */
router.put('/:id', function(req, res, next) {
  Group.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  Group.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Group.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id/superAdd', function (req, res, next) {
  //FIRST GET CURRENT STEPS
  Group.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    //TODO: EI LISÄÄ MATEMAATTISESTI
    var currentSteps = post.groupSteps;
    var newSteps = req.body.groupSteps;

    newSteps = newSteps + currentSteps;
    req.body.groupSteps = req.body.groupSteps + post.groupSteps;

    Group.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
      //res.send(req.params); //vanhat askeleet
      //res.json(req.body.groupSteps); //lähetettävät askeleet!
    });

  });

});

/*router.get('/:id/:groupSteps', function(req, res, next) {
  Group.findById(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});*/

/* GET /todos/id
router.get('/:id/:addSteps/'+number+'', function(req, res, next) {
  Group.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    var groupSteps = post.groupSteps;
    groupSteps = groupSteps + req.params.number;
    res.json(groupSteps);
  });
});
*/

/* PUT /groups/:id
router.put('/:id/addSteps', function(req, res, next) {
  Group.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
    //res.send(req.params); //vanhat askeleet
    //res.json(req.body.groupSteps); //lähetettävät askeleet!
  });
});
*/

module.exports = router;
