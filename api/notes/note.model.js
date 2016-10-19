var mongoose = require('mongoose');
var noteSchema = new mongoose.Schema({
  //add whats needed for each note{

  id:{
    type: String,
    required: true
  },
  title:{
    type: String,
    required: false
  },
  content:{
    type: String,
    required: false
  },
  date:{
    type: String,
    required: false
  },
  editDate:{
    type: String,
    required: false
  }
})

module.exports = mongoose.model('note',noteSchema)
