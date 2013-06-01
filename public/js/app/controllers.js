'use strict';

function ajaxGetReq($scope, $http, $window, callback){
	// nextAction = $scope.nextAction;
	// console.log('ajax scope data', $scope.action, $scope.data);
	$http.get($scope.action, $scope.data)
	.success(function(data, status, headers, config) {
		// console.log('success', data);
	    _.extend($scope, data);
	    return callback();
	    // $window.location.href = $scope.nextAction;
	}).error(function(data, status, headers, config) {
		// console.log('err', status);
	    $scope.status = status;
	});
}

function ajaxPostReq($scope, $http, $window){
	// nextAction = $scope.nextAction;
	console.log('ajax scope data', $scope.action, $scope.data);
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
		ajaxPostReq($scope, $http, $window);
	}

	$scope.nextAction = '/home';
}

function RecommendBookController($scope, $http, $window){
	$scope.add = function(action) {
		$scope.action = action;
		$scope.data = $scope.book;
		ajaxPostReq($scope, $http, $window);
	}
	$scope.book = {
		title: "Book 1",
		author: "abcd",
		description: "abcd descr",
		comment: "comment 1",
		url:"http://www.amazon.com/High-Performance-Web-Sites-ebook/dp/B0028N4WHY/ref=sr_1_3?s=digital-text&ie=UTF8&qid=1369971936&sr=1-3&keywords=web+performance"
	}
	$scope.nextAction = '/auth/complete';
}

function BookController($scope, $http, $window){
	// console.log($http);
	$scope.action = '/api/books';
	ajaxGetReq($scope, $http, $window, function(){
		// console.log('scope data',$scope);
	});
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
	$scope.registerUser = function(action){
		$scope.action = action;
		$scope.data = $scope.user;
		ajaxPostReq($scope, $http, $window);
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

