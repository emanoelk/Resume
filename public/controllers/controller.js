var myApp = angular.module('myApp', []); 
myApp.controller('AppCtrl', ['$scope', '$http', 
	function($scope, $http) { 
	
var refresh = function() {
  $http.get('/personalinfo').success(function(response) {
    
	$scope.schools = response;
	$scope.school = "";
	$scope.skills = response;
	$scope.skill = "";	
	$scope.projects = response;
	$scope.project = "";
	

  });
};

refresh();




}]);﻿


