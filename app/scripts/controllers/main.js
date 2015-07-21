'use strict';

angular.module('conversationApp')
  .controller('MainCtrl', function ($http,$scope) {

  	$scope.data = {};
    var topicArray = [];
    var responsesArray = [];

  	//parsing data and attaching it to the scope
    $http.get('/files/discussion.json').
      success(function(data) {
          for( var i in data){
            topicArray = data[i];
            for (var j in topicArray){
              var responseObject = topicArray[j].responses;
              responsesArray.push(responseObject);
            }
          }

      $scope.data = { topic: topicArray, 
                      responses: responsesArray
                        };

      //changing variable to show or hide form to write post
      $scope.write = function(){
        $scope.wantWrite = true;
        console.log("I want to write "+ $scope.wantWrite);
      };

      // stop propagation inside of collapse-element to make reply button work
      $scope.innerDiv = function($event){
        $event.stopPropagation();
      };

    });


    // on click on submit button add comment to scope.data
    // $scope.addComment = function(newOne){
    //   $scope.data = { topic: currentopic,
    //                   responses: responsesArray.push(newOne)
    //                 };

    // };



  });
