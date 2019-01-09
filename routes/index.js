var express = require('express');
var router = express.Router();
var prerender = require('prerender-node');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Metatags' });
});

router.get('/routes', function(req, res, next) {

    console.log(prerender);

    res.send('ok ok');
});

module.exports = router;
