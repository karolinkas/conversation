'use strict';

// creating directive for all posts which will be done for each seperate post on the long term
angular.module('conversationApp').directive('postDirective', ['$timeout','$compile', function($timeout,$compile){

    return {
        restrict: 'E',
        scope: { data: '='

                },
        link: function(scope,element){

           //creating template string 
           var posts = angular.element(
             '<div class="containerTopic" ng-model="collapsed" ng-click="collapsed=!collapsed" ng-repeat="topic in data.topic">'+
               '<h4>Discussiontopic: {{topic.topictitle}}</h4>'+
               '<div ng-show="collapsed" ng-repeat="response in topic.responses">'+
                   '<div class="jumbotron" ng-click="innerDiv($event)">'+
                     '<h4>Username: {{response.author}}</h4>'+
                     '<p>{{response.age | date:"mediumTime"}}</p>'+
                     '<p ng-bind-html="response.posttext"></p>'+
                     '<button ng-click="write()" type="button">REPLY</button>'+
                     '<div></div>'+
                   '</div>'+
                   '<div class="tomato"></div>'+
              '</div>'+
             '</div>');

           //appending it to the DOM
           element.append(posts);

           //attaching compiled templatestring to scope
           $compile(posts)(scope);

                        


		}

	};
}]);