'use strict';

var Note = require('./note.model');

Note.find({}).remove()
    .then(function(){
        Note.create({
              "id": 1,
              "title": "title 1",
              "content": "content 1",
              "date": "date here",
              "editDate": "date here"
          }, {
              "id": 2,
              "title": "title 2",
              "content": "content 2",
              "date": "date here",
              "editDate": "date here"
          }, {
              "id": 3,
              "title": "title 3",
              "content": "content 3",
              "date": "date here",
              "editDate": "date here"
        })
            .then(function() {
                console.log('finished populating notes');
            });
    });
