var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resourcddesss');
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.send(`hello ${id}, nice to meet you`);
});

module.exports = router;
