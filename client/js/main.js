angular.module("toNote", [])
    .constant("notesUrl", "http://localhost:3000/notes")
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

                self.notes.push(newNote);
                $scope.displayMode = "list";
            }).catch(function() {
                console.log('catch')
            })
            console.log('add a new note');
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

    .directive("listNotes", function($http) {
var testNotes = "http://localhost:3000/notes";
        return {
            templateUrl: "js/template.html",
            restrict: "E",
            link: function(scope, element, attr) {
                //add a service, then add $resource into it
                scope.deleteItem = function(id, index, event, note) {
                  //console.log(scope.note._id);
                    //console.log(scope, element, attr);
                    console.log(scope.note._id);
                    delete (scope.note._id)
                  //  scope.notes.splice(scope.notes.indexOf(scope.note._id), 1)
                        //  console.log(id, index, event)
                    //console.log(notes);
                    //console.log(scope.note._id);
                    //   delete scope.note;

                    //  element[0].remove(); //delete from the page
                    //       console.log(notes);
                }
                scope.editItem = function(theId) {
                  console.log(scope.note)
                  var editNote = {
//                      "_id": theId,
                      "_v": scope.note.__v,
                      "title": "test title  1",
                      "content": "test content 1",
                      "date": scope.note.date,
                      "editDate": new Date()
                  }
                    console.log(editNote);


                    // $http.put(testNotes, editNote).then(function(data) {
                    //   //this is making a new isntance I think
                    //     scope.ServerResponse = data;
                    //     self.notes.push(editNote);
                    //     scope.displayMode = "list";
                    // }).catch(function() {
                    //     console.log('catch')
                    // })


                  //  console.log(notesUrl);
//                    .constant("notesUrl", "http://localhost:3000/notes")
                    scope.notes = self.notes;
                }
            }
        }
    });
