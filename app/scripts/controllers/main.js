'use strict';

/**
 * @ngdoc function
 * @name conversationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the conversationApp
 */
angular.module('conversationApp')
  .controller('MainCtrl', function ($http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $http.get('/files/discussion.json').
      success(function(data, status, headers, config) {
	        console.log(data);
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

  });
