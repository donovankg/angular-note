angular.module("toNote", ['ngResource'])
    .constant("notesUrl", "http://localhost:3000/notes")
    .config(function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
})
    .controller("addNoteCtrl", function($scope, $http, notesUrl) {
        console.log('loaded');
        $scope.addItem = function(note) {
            var newDate = new Date();
            var newNote = {
                "title": "title 1",
                "content": "content 1",
                "date": newDate,
                "editDate": ""
            }
            $http.post(notesUrl, newNote).then(function(req, res, data) {
//                self.notes.push(newNote);
          console.log(req);
                $scope.displayMode = "list";
            }).catch(function() {
                console.log('catch')
            })

            //set this
        }
    })
    .controller("getNotesCtrl", function($scope, $http, notesUrl) {

        scope = $scope;
        $http.get(notesUrl)
            .then(function(res) {

                self.notes = res.data;
                scope.notes = self.notes;
            })
            .catch(function(error) {
                error = error;
            });
    })
    .directive("listNotes", function($http, notesUrl) {

        return {

            templateUrl: "js/template.html",
            restrict: "E",
            link: function(scope, element, attr) {
                //add a service, then add $resource into it

                scope.deleteItem = function(id, index, event) {
                  console.log('new stuff',id, index, event)

                  var itemToDelete,
                      deleteThis = id;

                    $http.get('/notesUrl', notes)
                        .then(function(val) {
                          console.log('------>notes here',notes);
                            itemToDelete =  val;
                        }).catch(function(err) {
                            return err.stack;
                        })

                scope.notes = self.notes;
            }
        }
    }
    })
    .controller("noteCtrl", function (noteService) {
        var self =this;
        self.createNote= noteService.createNote;
        self.deleteNote= noteService.deleteNote;
        self.updateNote= noteService.createNote;
        self.startEdit = function (note) {
            self.editedNote = note;
          }
        self.cancelEdit = function () {
            self.editedProduct = null;
          }

          self.products=noteService.getAll();

    })
    .factory("noteService",function($resource, notesUrl){
      var notesResource = $resource(notesUrl + ":id", { id: "@_id" });
      var notes=notesResource.query();

      var deleteNote = function (note) {
            note.$delete().then(function () {
                notes.splice(self.notes.indexOf(product), 1);
            });
      }
      var createNote = function (note) {
            new notesResource(product).$save().then(function (newNote) {
                notes.push(newNote);
                editedNote = null;
            });
      }
      var updateNote = function (note) {
          note.$save();
          editedNote = null;
      }
      return {
        getAll:function(){

          console.log(notes);
          return notes;

        },
        deleteNote:deleteNote,
        createNote:createNote,
        updateNote:updateNote
      }

    });
