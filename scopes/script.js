//AngularJS modules define applications
var app = angular.module('myApp',[])
//AngularJS controllers control applications
app.controller('myCtrl',function($scope){
	$scope.color="red";
	$scope.names = ['donie','ronie','jimmie'];
});
app.run(function($rootScope){
	$rootScope.color = 'blue';
});