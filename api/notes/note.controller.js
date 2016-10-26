var note = require('./note.model.js');
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
  getOne: function(req, res, next){
    var id = scope.note._id;
    console.log(id);
    note.find({_id:id})
    .then(function(data){
      console.log("-------> THIS IS IN NOTE.CONTROLLER", data)
      // res.status(200).send(note);
    }).catch(function(err){
      console.error(err.stack);
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
        console.log('new id from note.control ', id);
        note.find({_id:id}).remove()
            .then(function(){
                res.send("note deleted")
            })
            .catch(function(err){
                console.log(err);
                res.status(400).send(err);
            })
  },
  save: function(req, res, next){
    console.log('test');
    var id = req.body._id;

    Note.findOneAndUpdate({_id:id},req.body,{upsert:true, new:true})
    .then(function(notes){
      console.log(notes)
      res.send(notes)
    });
  }
}
