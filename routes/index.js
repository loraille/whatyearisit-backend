var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});




router.get('/year', (req, res) => {
  const date = new Date();
  const year = date.getFullYear().toString();
  res.json({ year: year });
});




module.exports = router;
