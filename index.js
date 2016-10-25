//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var notes = require('./api/notes');
//express App
var app = express();

//mongoDB
mongoose.connect('localhost','testNotes');

mongoose.connection.on('error', function(err){
  next(err);
})
// middleware
app.use(morgan('dev'));
app.use(express.static('client'));

//authentication
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());




//Router
app.use('/notes',notes);


//default router
app.use('/', function(req, res, next){
  
//req  = request
  //the request Object
//res = response
  //the response object
  res.sendFile(__dirname+'/client/index.html');
});

//Error Handler

app.use(function(err,req,res,next){
//  res.status(err.status).send(err.message);
})
//create Server
app.listen(3000);
console.log('the server is running, http://localhost:3000');
