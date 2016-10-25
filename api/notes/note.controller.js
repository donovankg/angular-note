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
  // delete: function(req,res,next){
  //       var id = req.body._id;
  //       console.log('new id from note.control ',id);
  //       note.find({_id:id}).remove()
  //           .then(function(){
  //               res.send("note deleted")
  //           })
  //           .catch(function(err){
  //               console.log(err);
  //               res.status(400).send(err);
  //           })
  // },
  // save: function(req, res, next){
  //   console.log('test');
  //   var id = req.body._id;
  //
  //   Note.findOneAndUpdate({_id:id},req.body,{upsert:true, new:true})
  //   .then(function(notes){
  //     console.log(notes)
  //     res.send(notes)
  //   });
  //}
  .controller("productCtrl", function (noteService) {
    var self =this;
    self.createProduct= noteService.createProduct;
    self.deleteProduct= noteService.deleteProduct;
    self.updateProduct= noteService.updateProduct;
    self.startEdit = function (product) {
        self.editedProduct = product;
      }
    self.cancelEdit = function () {
        self.editedProduct = null;
      }

      self.products=noteService.getAll();

})
.factory("noteService",function($resource, productUrl){
  var productsResource = $resource(productUrl + ":id", { id: "@_id" });
  var products=productsResource.query();

  var deleteProduct = function (product) {
        product.$delete().then(function () {
            products.splice(self.products.indexOf(product), 1);
        });
  }
  var createProduct = function (product) {
        new productsResource(product).$save().then(function (newProduct) {
            products.push(newProduct);
            editedProduct = null;
        });
  }
  var updateProduct = function (product) {
      product.$save();
      editedProduct = null;
  }
  return {
    getAll:function(){
      return products;
    },
    deleteProduct:deleteProduct,
    createProduct:createProduct,
    updateProduct:updateProduct
  }

})
}
