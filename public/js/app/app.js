'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    	.when('/view1', {
    		templateUrl: 'partials/partial1', 
    		controller: MyCtrl1
    	})
    	.when('/view2', {
    		templateUrl: 'partials/partial2', 
    		controller: MyCtrl2
    	})
    	.when('/login', {
    		templateUrl: 'partials/login', 
    		controller: MyCtrl2
    	})
        .when('/book', {
            templateUrl: 'partials/book', 
            controller: BookController
        })
        .when('/movie', {
            templateUrl: 'partials/movie', 
            controller: MovieController
        })
    	.when('/', {
    		templateUrl: 'partials/home', 
    		controller: MyCtrl2
    	})
    	.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  }]);