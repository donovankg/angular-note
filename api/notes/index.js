var express = require('express');
var controller = require('./note.controller');
require('./seed');
var router = express.Router();

router.get('/', function(req, res, next){
  next();
}, controller.getAll);

router.post('/', controller.create);
router.put('/:id', controller.save);
router.delete('/:id', controller.delete);
module.exports = router;
