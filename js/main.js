
angular.module("toNote", []).controller("getNotesCtrl", function($scope) {
        scope = $scope;
        $scope.notes = [{
            id: 1,
            title: "title 1",
            content: "content 1",
            date: "date here",
            editDate: "date here"
        }, {
            id: 2,
            title: "title 2",
            content: "content 2",
            date: "date here",
            editDate: "date here"
        }, {
            id: 3,
            title: "title 3",
            content: "content 3",
            date: "date here",
            editDate: "date here"
        }];
        $scope.deleteItem = function() {

//            console.log('will delete target item');
            var targetSet= event.target.parentNode.parentNode.firstChild.textContent;
            for(var key in $scope.notes){
              if(targetSet ==$scope.notes[key].id){
                console.log('deleted Id '+key);

              }
    //          console.log(targetSet);
    //          console.log($scope.notes[key].id);
            }
            //   console.log(event.target.parentNode.parentNode);
            //   console.log(event.target.parentNode.parentNode.remove());
//            console.log($scope.notes);
        }
        $scope.editItem = function(){
          console.log('edit target item');
        }
    })
    .directive("listNotes", function() {

        return {
            templateUrl: "js/template.html",
            restrict: "E"
        }
    });
