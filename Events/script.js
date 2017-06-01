var app = angular.module('myApp',[])

app.controller('myCtrl',function($scope){
	$scope.count = 0;
	$scope.count1 = 0;
	$scope.myFunction = function(){
		$scope.count1++ ;	
	}
	$scope.showMe = false ;

	$scope.myFunc = function(){
		$scope.showMe = !$scope.showMe;
	}

	$scope.myFunc1 = function(myEve){
		$scope.x =myEve.clientX;
		$scope.y =myEve.clientY;
	}
	
});