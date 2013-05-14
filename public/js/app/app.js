'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    	.when('/login', {
    		templateUrl: 'partials/login', 
    		controller: BookController
    	})
        .when('/auth/register', {
            templateUrl: 'partials/register',
            controller: RegisterController
        })
        .when('/auth/google', {
            templateUrl: 'partials/login', 
            controller: GoogleAuthController
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
    		controller: BookController
    	})
    	.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  }]);