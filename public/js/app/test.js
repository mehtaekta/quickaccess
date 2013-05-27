'use strict';

// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']);

myApp.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    // function httpErrorInterceptor($q,$log, $window) {
    //     function success(response) {
    //       $log.info('Successful response: ' + response);
    //       return response;
    //     }
    //     function error(response) {
    //         debugger;
    //       var status = response.status;
    //       $log.error('Response status: ' + status + '. ' + response);
    //       // $window.location.href = '/';
    //       return $q.reject(response); //similar to throw response;
    //     }
    //     return function(promise) {
    //       return promise.then(success, error);
    //     }
    // }
    $routeProvider
    	.when('/auth/login', {
    		templateUrl: 'partials/login', 
    		controller: AuthController
    	})
        .when('/auth/register', {
            templateUrl: 'partials/register',
            controller: RegisterController
        })
        .when('/auth/complete', {
            templateUrl: 'partials/registration_successful',
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
    	.when('/home', {
    		templateUrl: 'partials/home', 
    		controller: BookController
    	})
    	.otherwise({redirectTo: '/auth/login'});
    $locationProvider.html5Mode(true);
    // $httpProvider.responseInterceptors.push(httpErrorInterceptor);
  }]);

// myApp.run(['$rootScope', '$http', function(scope, $http) {
 
//   /**
//    * Holds all the requests which failed due to 401 response.
//    */
//   scope.requests401 = [];
 
//   /**
//    * On 'event:loginConfirmed', resend all the 401 requests.
//    */
//   scope.$on('event:loginConfirmed', function() {
//     var i, requests = scope.requests401;
//     for (i = 0; i < requests.length; i++) {
//       retry(requests[i]);
//     }
//     scope.requests401 = [];
 
//     function retry(req) {
//       $http(req.config).then(function(response) {
//         req.deferred.resolve(response);
//       });
//     }
//   });
 
//   /**
//    * On 'event:loginRequest' send credentials to the server.
//    */
//   scope.$on('event:loginRequest', function(event, username, password) {
//     var payload = $.param({j_username: username, j_password: password});
//     var config = {
//       headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
//     }
//     $http.post('j_spring_security_check', payload, config).success(function(data) {
//       if (data === 'AUTHENTICATION_SUCCESS') {
//         scope.$broadcast('event:loginConfirmed');
//       }
//     });
//   });
 
//   // /**
//   //  * On 'logoutRequest' invoke logout on the server and broadcast 'event:loginRequired'.
//   //  */
//   // scope.$on('event:logoutRequest', function() {
//   //   $http.put('j_spring_security_logout', {}).success(function() {
//   //     ping();
//   //   });
//   // });
 
//   // /**
//   //  * Ping server to figure out if user is already logged in.
//   //  */
//   // function ping() {
//   //   $http.get('rest/ping').success(function() {
//   //     scope.$broadcast('event:loginConfirmed');
//   //   });
//   // }
//   // ping();
 
// }]);