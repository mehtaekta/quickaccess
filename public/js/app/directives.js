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
	.directive('authVisible', function() {
		return function(scope, element, attrs) {
		    var keypoint_auth = $.cookie('keypoint_auth');
		    if(!_.isUndefined(keypoint_auth)){
				element.show();
		    } else {
		    	element.hide();
		    }
		}
	});
