'use strict';

angular.module('conversationApp').directive('postDirective', ['$timeout','$compile', function($timeout,$compile){

	return {
		restrict: 'E',
		scope: true,
		link: function(scope,element){

           var posts = angular.element(
           '<div ng-repeat="topic in topicArray" class="container" > '+
                '<h4>{{topic.topictitle}}</h4>'+
                '<div ng-repeat="response in responses">'+
                  '<div ng-repeat="text in texts track by $index">'+
                    '<div class="jumbotron">'+
                    '<h4>{{response.author}}</h4>'+
                    '<p>{{response.age | date:"mediumTime"}}</p>'+
                    '{{text}}'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>');
           element.append(posts);
           $compile(posts)(scope);

                        


		}

	};
}]);