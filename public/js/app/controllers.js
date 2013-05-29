'use strict';

function ajaxReq($scope, $http, $window){
	// nextAction = $scope.nextAction;
	$http.post($scope.action, $scope.data)
	.success(function(data, status, headers, config) {
	    $scope.data = data;
	    $window.location.href = $scope.nextAction;
	}).error(function(data, status, headers, config) {
	    $scope.status = status;
	});
}
/* Controllers */
function AppCtrl($scope, $http, $window) {
	var keypoint_auth = $.cookie('keypoint_auth');
    if(!_.isUndefined(keypoint_auth)){
    	var userInfo = JSON.parse(keypoint_auth);
    	angular.element('#UserName').text(userInfo.firstName + ' M ' + userInfo.lastName);
    }

    $scope.logout = function(){
		$.removeCookie('keypoint_auth', {path:'/'});
		$window.location.href = '/';
	}
}

function AuthController($scope, $http, $window) {
	$scope.login = function(action){
		$scope.action = action;
		$scope.data = $scope.user;
		ajaxReq($scope, $http, $window);
	}

	$scope.nextAction = '/home';
}

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

function RegisterController($scope, $http, $window){
	$scope.registerUser = function(){
		$scope.action = 'api/registerUser';
		$scope.data = $scope.user;
		ajaxReq($scope, $http, $window);
	};

	$scope.user = {
		firstName: 'Ekta',
		lastName: 'Mehta',
		email: 'mehta.ekta@gmail.com',
		dob: '11/21/1980',
		password: ''
	};
	$scope.nextAction = '/auth/complete';
}

function GoogleAuthController($scope, $http){
	debugger;
	$http({method: 'GET', url: '/auth/google'})
		.success(function(data, status, headers, config){
			debugger;
		})
}

