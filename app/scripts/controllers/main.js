'use strict';

angular.module('conversationApp')
  .controller('MainCtrl', function ($http,$scope) {

  	$scope.data = {};
    var selectedTopic;
    var topicArray = [];
    var responsesArray = [];
    $scope.formData = {};

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


      $scope.chooseTopic = function(topic){
        selectedTopic = topic.topictitle;
        console.log(selectedTopic);
      };

      // stop propagation inside of collapse-element to make reply button work
      $scope.innerDiv = function($event){
        $event.stopPropagation();
      };

    });

    // on click on submit button add comment to scope.data
    $scope.addComment = function(author,message){
      console.log(author,message);
      $scope.formData = {topic: selectedTopic,
                         responses:  {author: author,
                                     posttext: message}
                        };
      $scope.data.responses.push($scope.formData);
    };



  });
