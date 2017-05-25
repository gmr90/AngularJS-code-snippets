var app = angular.module('myApp',[]);

app.controller('myCtrl',function($scope){
	$scope.name="govi";
	$scope.fName="govi09";
	$scope.fullName ="gmr90 zine";
	$scope.firstName ="mgr";
	$scope.changeName = function(){
		$scope.firstName ="ggggrd";
	}	
});