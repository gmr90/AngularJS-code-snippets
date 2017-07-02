// CONTROLLERS

weatherApp.controller('homeController',['$scope','cityService',function($scope,cityService){
	$scope.city = cityService.city;
	$scope.$watch('city',function(){
		cityService.city = $scope.city;
	});
}]);

weatherApp.controller('forecastController',['$scope','$resource','$routeParams','cityService',function($scope,$resource,$routeParams, cityService){
	$scope.city = cityService.city;
	$scope.days = $routeParams.days || '2' ;

	console.log($scope.days);
	//http://api.openweathermap.org/data/2.5/forecast/daily?APPID=8aff20e04dea9242d1b8fc46290a3264
	$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{ callback: "JSON_CALLBACK" },{ get: {method:"JSONP"}});	
	//console.log($scope.weatherAPI);
	$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt:$scope.days,APPID : "8aff20e04dea9242d1b8fc46290a3264"});
	
	
	$scope.convertToFahrenheit = function(degK){
		return Math.round((1.8 * (degK-273))+32)
	};

	$scope.convertToDate = function(dt){
		return new Date(dt*1000);
	}
}]);