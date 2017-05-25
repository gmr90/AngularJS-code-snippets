app.controller('myCtrl',function($scope){

	$scope.firstName = "gmr";
	$scope.lastName = "90";

	$scope.fullName = function(){
		return $scope.firstName  +	$scope.lastName ;

	}
});
