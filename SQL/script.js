//AngularJS modules define applications
var app = angular.module('myApp',[])
//AngularJS controllers control applications
app.controller('myCtrl',function($scope , $http){
	$http.get('https://www.w3schools.com/angular/customers_sql.aspx').then(function(response){
		$scope.names = response.data.records;
	})
});