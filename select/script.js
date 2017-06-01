//AngularJS modules define applications
var app = angular.module('myApp',[])
//AngularJS controllers control applications
app.controller('myCtrl',function($scope){
	$scope.cars = [
	    {model : "Ford Mustang", color : "red"},
	    {model : "Fiat 500", color : "white"},
	    {model : "Volvo XC90", color : "black"}
	
	];

	  $scope.carss = {
        car01 : {brand : "Ford", model : "Mustang", color : "red"},
        car02 : {brand : "Fiat", model : "500", color : "white"},
        car03 : {brand : "Volvo", model : "XC90", color : "black"}
    }
});