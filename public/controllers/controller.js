var myApp = angular.module('myApp', []); 
myApp.controller('AppCtrl', ['$scope', '$http', 
	function($scope, $http) { 
	
var refresh = function() {
  $http.get('/personalinfo').success(function(response) {
    
	$scope.personalinfo = response;
    $scope.info = "";

  });
};

refresh();

var refresh2 = function() {
  $http.get('/personalinfo2').success(function(response) {
    
	$scope.personalinfo2 = response;
    $scope.info = "";

  });
};

refresh2();



}]);﻿


