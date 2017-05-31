//AngularJS modules define applications
var app = angular.module('myApp',[])
//AngularJS controllers control applications
app.controller('myCtrl',function($scope, $location , $http , $timeout , $interval,hexafy){

	$scope.firstName = "gmr";
	$scope.lastName = "90";
	$scope.myHeader = "Hello World !";
	$scope.myUrl = $location.absUrl();


	// timeout service
	$timeout(function(){
		$scope.myHeader  = "how are you ?"
	},2000);

	$http.get('welcome.html').then(function(response){
		$scope.myWelcome = response.data;
	});

	// interval service 

	$scope.theTime = new Date().toLocaleTimeString();

$interval(function () {
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);

//using created function 
	$scope.hex = hexafy.myFunc(255);
	
});
// creating own service
app.service('hexafy', function(){
	this.myFunc = function(x){
		return x.toString(16);
	}
});

app.filter('myFormat',['hexafy', function(hexafy) {
    return function(x) {
        return hexafy.myFunc(x);
    };
}]);

