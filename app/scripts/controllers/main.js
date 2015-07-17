'use strict';

angular.module('conversationApp')
  .controller('MainCtrl', function ($http,$scope) {

  	$scope.data = {};
  	$scope.responses = []; 
  	$scope.topicArray = [];
  	$scope.texts = [];
  	$scope.number = 4; 

  	//parsing data and attaching it to the scope
    $http.get('/files/discussion.json').
      success(function(data) {
	        for( var i in data){
	        	$scope.topicArray = data[i];
	        	for (var j in $scope.topicArray){
	        		$scope.responses = $scope.topicArray[j].responses;
	        		 for(var text in $scope.responses){
	        		 		$scope.texts.push($scope.responses[text].posttext.replace(/<[^>]+>/gm, ''));
	        		 }
	        	}
	        } 
      });

  });
