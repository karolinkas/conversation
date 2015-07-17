'use strict';

// creating directive for all posts which will be done for each seperate post on the long term
angular.module('conversationApp').directive('postDirective', ['$timeout','$compile', function($timeout,$compile){

    return {
        restrict: 'E',
        scope: true,
        link: function(scope,element){

           //creating template string 
           var posts = angular.element(
           '<a href="#" class="containerTopic"  ng-model="collapsed" ng-click="collapsed=!collapsed" ng-repeat="topic in topicArray">'+
                '<h4>Discussiontopic: {{topic.topictitle}}</h4>'+
                '<div ng-show="collapsed" ng-repeat="response in responses">'+
                  '<div ng-repeat="text in texts track by $index">'+
                    '<div class="jumbotron">'+
                    '<h4>Username: {{response.author}}</h4>'+
                    '<p>{{response.age | date:"mediumTime"}}</p>'+
                    '{{text}}'+
                    '</div>'+
                    '<div class="tomato"></div>'+
                '</div>'+
              '</div>'+
            '</a>');

           //appending it to the DOM
           element.append(posts);
           $compile(posts)(scope);

                        


		}

	};
}]);