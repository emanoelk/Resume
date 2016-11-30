var myApp = angular.module('myApp', []); 
myApp.controller('AppCtrl', ['$scope', '$http', 
	function($scope, $http) { 
	
var refresh = function() {
  $http.get('/personalinfo').success(function(response) {
    
<<<<<<< HEAD
	$scope.personalinfo = "1";
//	$scope.info = "";
=======
	$scope.personalinfo = response;
 //$scope.info = "";
>>>>>>> e5a28c60128584979615286fffa885247e7cbbc6

  });
};

refresh();




}]);﻿


