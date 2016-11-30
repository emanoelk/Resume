var myApp = angular.module('myApp', []); 
myApp.controller('AppCtrl', ['$scope', '$http', 
	function($scope, $http) { 
	
var refresh = function() {
  $http.get('/personalinfo').success(function(response) {
    
	$scope.schools = response;
	$scope.skills = response;
	$scope.projects = response;


  });
};

refresh();




}]);﻿


