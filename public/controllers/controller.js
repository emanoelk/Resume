var myApp = angular.module('myApp', []); 
myApp.controller('AppCtrl', ['$scope', '$http', 
	function($scope, $http) { 
	
var refresh = function() {
  $http.get('/personalinfo').success(function(response) {
    
    $scope.personal = response;
    $scope.name = "2";
  });
};

refresh();





}]);﻿


