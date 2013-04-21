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