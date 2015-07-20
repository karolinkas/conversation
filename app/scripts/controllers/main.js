'use strict';

angular.module('conversationApp')
  .controller('MainCtrl', function ($http,$scope) {

  	$scope.data = {};
    var topicArray = [];
    var responsesArray = [];
    var wantWrite = false;


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

      });

      $scope.write = function(){
        wantWrite = true;
        console.log(wantWrite);
        return wantWrite;
      };

      $scope.innerDiv = function($event){
        $event.stopPropagation();
      };



  });
