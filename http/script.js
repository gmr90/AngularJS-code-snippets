
var app = angular.module('myApp',[])

app.controller('myCtrl', function($scope, $http){
	$http({
		method : "GET",
		url : "welcome.html"
	}).then(function mySuccess(response){
		$scope.myWelcome = response.data;
		$scope.status = response.status;
		$scope.config = response.config;
		$scope.statusText = response.statusText;
	}, function myError(response){
		$scope.myWelcome = response.statusText;
	});


	$http.get('https://www.w3schools.com/angular/customers.php').then(function(response){
		$scope.myData = response.data.records;
	});


});


