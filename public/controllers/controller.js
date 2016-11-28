var myApp = angular.module('myApp', []); 
myApp.controller('AppCtrl', ['$scope', '$http', 
	function($scope, $http) { 
	
	var refresh = function() {
	$http.get('/personalinfo').success(function(response) {
    console.log("I got the data I requested");
    $scope.personalinfo = response;
    $scope.contact = "";
	});
	};
	refresh();
	
	
	
};
}]);


