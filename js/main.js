angular.module("toNote", [])
.controller("addNoteCtrl", function($scope) {
  console.log('loaded');
    $scope.addItem = function() {
        // $scope.notes.push({"id": 4,
        //   "title": "title 4",
        //   "content": "content 4",
        //   "date": "date here",
        //   "editDate": "date here"});
          console.log('add a new note');

          //set this
    }
})
    .controller("getNotesCtrl", function($http, $scope) {

        console.log('test');
        $http.get()
        .then(function(res){
          self.notes = res.data;
        })
        .catch(function(error){
          console.log('error happened in load notes');
        })

        scope = $scope;

        //request from localhost:3000/notes

        $scope.deleteItem = function() {

            console.log('will delete target item');
            // var targetSet = event.target.parentNode.parentNode.firstChild.textContent;
            // for (var key in $scope.notes) {
            //     if (targetSet == $scope.notes[key].id) {
            //         console.log('deleted Id ' + key);
            //
            //     }
            //     //  console.log(targetSet);
            //     //  console.log($scope.notes[key].id);
            // }
            // console.log(event.target.parentNode.parentNode);
            // console.log(event.target.parentNode.parentNode.remove());
            //            console.log($scope.notes);
        }
        $scope.editItem = function() {
            console.log('edit target item');
        }
    })
    .directive("listNotes", function() {

        return {
            templateUrl: "js/template.html",
            restrict: "E"
        }
    });
