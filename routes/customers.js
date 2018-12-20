(function(){
  'use strict';

var express = require('express');
var router = express.Router();
var loginRequired = require('../controllers/userControllers').loginRequired;

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.body);
  res.send('customers route');
});

/* GET Customer by CLI. */
router.get('/cli/:cli', loginRequired, function(req, res, next) {
  console.log(req.params);
  res.send(`customer's cli = ${req.params.cli}`);
});

/* GET Customer by MEID. */
router.get('/meid/:meid', function(req, res, next) {
  console.log(req.params);
  res.send(`customer's meid = ${req.params.meid}`);
});

module.exports = router;

}());
