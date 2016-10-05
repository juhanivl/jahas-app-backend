var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var City = require('../models/City.js'); // this is important! link between route and model schema


/* GET /cities listing. */
router.get('/', function(req, res, next) {
  City.find(function (err, cities) {
    if (err) return next(err);
    res.json(cities);
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  City.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  City.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  City.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  City.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



module.exports = router;
