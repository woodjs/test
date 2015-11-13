var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/login').get(function (req, res) {

  res.send('hello man! welcome to the world of nodejs!');
});

module.exports = router;
