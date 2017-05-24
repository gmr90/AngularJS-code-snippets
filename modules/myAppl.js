var app = angular.module('myApp',[]);

app.directive('w3TestDirective', function(){
	return {
		template: "i was made in directive constructor !"	
	};
});	
