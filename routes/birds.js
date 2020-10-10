var express = require('express');
var router = express.Router();

router.get('/create', function(req, res, next) {
  res.render('create bird', { title: 'Express' });
});
router.get('/confirmation', function(req, res, next) {
  res.render('confirmation', { title: 'Express' });
});

router.post('/create', function(req, res, next) {

  let bird = {
    species: req.body.species,
    nickname: req.body.nickname,
    status: req.body.status
  }
  console.log(bird);
  res.redirect('confirmation');
});

module.exports = router;