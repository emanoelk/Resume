var myApp = angular.module('myApp', []); 
myApp.controller('AppCtrl', ['$scope', '$http', 
	function($scope, $http) { 
	
var refresh = function() {
  $http.get('/personalinfo').success(function(response) {
    if(($scope.schools = response) != null){
	$scope.schools = response;
	$scope.school = "";
	};
	if(($scope.skills = response) != null){
	$scope.skills = response;
	$scope.skill = "";	
	};
	if(($scope.projects = response) != null){
	$scope.projects = response;
	$scope.project = "";
	};

  });
};

refresh();




}]);﻿


