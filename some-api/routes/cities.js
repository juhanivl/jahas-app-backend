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

module.exports = router;
