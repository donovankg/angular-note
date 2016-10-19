var express = require('express');
var controller = require('./note.controller');
require('./seed');
var router = express.Router();

router.get('/', function(req, res, next){
  console.log("authentucation is done here");
  next();
}, controller.getAll);
router.post('/', controller.create);
//router.post('/save', controller.save);

module.exports = router;
