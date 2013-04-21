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
'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {}
MyCtrl2.$inject = [];

function BookController($scope, $http){
	var books =[{Title:'Book1', Author:'Author1', Desc:'Desc1'}
	,{Title:'Book2', Author:'Author2', Desc:'Desc2'}
	,{Title:'Book3', Author:'Author3', Desc:'Desc3'}
	,{Title:'Book4', Author:'Author4', Desc:'Desc4'}
	];
	$scope.books = books;
}

function MovieController($scope, $http){
	var movies =[{Title:'Movie1', Director:'Director1', Desc:'Desc1'}
	,{Title:'Movie2', Director:'Director2', Desc:'Desc2'}
	,{Title:'Movie3', Director:'Director3', Desc:'Desc3'}
	,{Title:'Movie4', Director:'Director4', Desc:'Desc4'}
	];
	$scope.movies = movies;
}

function AuthController($scope, $http){
	$scope.googleAuthenticate = function(){
		$http({method: 'GET', url: '/auth/google'})
			.success(function(data, status, headers, config){
				debugger;
			})
	}
}
'use strict';

/* Directives */


angular.module('myApp.directives', [])
	.directive('appVersion', ['version', function(version) {
		return function(scope, elm, attrs) {
		  elm.text(version);
		};
	}])
	.directive('preventDefault', function() {
		return function(scope, element, attrs) {
		    $(element).click(function(event) {
		        event.preventDefault();
		    });
		}
	})

'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
