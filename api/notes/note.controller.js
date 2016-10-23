var note = require('./note.model');
var mongoose = require("mongoose");


module.exports={
  getAll: function(req, res, next){
    note.find({})
    .then(function(notes){
      res.status(200).send(notes);
    }).catch(function(err){
      console.log(err);
      next(err);
    })
  },
  create: function(req, res, next){
    note.create(req.body)
    .then(function(not){
      res.status(200).send(not);
    })
    .catch(function(err){
      console.log(err);
      next(err);
    })
  },
  delete: function(req,res,next){
        var id = req.params.id;
        note.find({_id:id}).remove()
            .then(function(){
                res.send("note deleted")
            })
            .catch(function(err){
                console.log(err);
                res.status(400).send(err);
            });
    }
}
