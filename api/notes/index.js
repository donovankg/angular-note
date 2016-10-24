var express = require('express');
var controller = require('./note.controller');
require('./seed');
var router = express.Router();

router.get('/', function(req, res, next){
  console.log("authentucation is done here");
  next();
}, controller.getAll);
router.post('/', controller.create);
//router.put('/', controller.save);
router.delete('/', controller.delete);

module.exports = router;
