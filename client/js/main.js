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
                "editDate": "date here"
            }
            $http.post(notesUrl, newNote).then(function(data) {
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
                $scope.notes = self.notes;
            })
            .catch(function(error) {
                error = error;
            });
    })
    .directive("listNotes", function() {

        return {
            templateUrl: "js/template.html",
            restrict: "E",
            link: function(scope, element, attr) {
                scope.deleteItem = function(id, index, event) {




                    //  console.log('will delete target item');
                    // console.log(Note.find)

                    console.log(id, index, event)
                        // console.log(scope.note._id);
                        //   delete scope.note;

                    // element[0].remove(); //delete from the page
                    //       console.log(notes);
                }
                scope.editItem = function() {
                    console.log('edit target item');
                }
            }
        }
    });
