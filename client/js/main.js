angular.module("toNote", ['ngResource'])
    .constant("notesUrl", "http://localhost:3000/notes/")
    .config(function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    })
    .controller("addNoteCtrl", function($scope, notesUrl, noteService) {
        $scope.addItem = function(note) {
            var newDate = new Date();
            var newNote = {
                "title": txtTitle.value,
                "content": txtArea.value,
                "date": newDate,
                "editDate": ""
            }
            txtTitle.value ="";
            txtArea.value="";
            noteService.createNote(newNote)
        }
    })
    .controller("getNotesCtrl", function($scope, $http, notesUrl, noteService) {
        var self = this;

        self.createNote = noteService.createNote;
        self.deleteNote = noteService.deleteNote;
        self.updateNote = noteService.updateNote;
        console.log(self.updateNote);
        self.notes = noteService.getAll();
        self.startEdit = function(note) {
            self.editedNote = note;
        }
        self.cancelEdit = function() {
            self.editedNote = null;
        }
    })
    .directive("listNotes", function($http, notesUrl) {

        return {

            templateUrl: "js/template.html",
            restrict: "E",
            link: function(scope, element, attr) {
                //add a service, then add $resource into it

                scope.deleteItem = function(id, index, event) {
                    console.log('new stuff', id, index, event)

                    var itemToDelete,
                        deleteThis = id;
                }
            }
        }
    })
//    <button class='btnDelete' ng-click='deleteNote(gnc.note)'>Delete</button>

    .factory("noteService", function($resource,notesUrl) {
        var notesResource = $resource(notesUrl + ":id", {
            id: "@_id"
        });
        var notes = notesResource.query();
        var deleteNote = function(note) {
            console.log("delete hit on :",note );
            note.$delete().then(function() {
                notes.splice(notes.indexOf(note), 1);
            });
        }
        var createNote = function(note) {
            new notesResource(note).$save().then(function(value) {
                notes.push(value);
                editedNote = null;
            });
        }

        var updateNote = function(note) {
          console.log('update hit on: ',note);
            note.$save().then(function(){
              console.log('update it');
            });

            editedNote = null;
        }
        var getAll = function() {
            return notes;
        }
        return {
            deleteNote: deleteNote,
            createNote: createNote,
            updateNote: updateNote,
            getAll: getAll
        }

    });
