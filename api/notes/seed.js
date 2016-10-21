'use strict';

var Note = require('./note.model');

Note.find({}).remove()
    .then(function(){
        Note.create({
              "title": "title 1",
              "content": "content 1",
              "date": "date here",
              "editDate": "date here"
          }, {
              "title": "title 2",
              "content": "content 2",
              "date": "date here",
              "editDate": "date here"
          }, {
              "title": "title 3",
              "content": "content 3",
              "date": "date here",
              "editDate": "date here"
        })
            .then(function() {
                console.log('finished populating notes');
            });
    });
