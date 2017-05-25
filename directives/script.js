var app = angular.module("myApp", []);
app.directive("testDirective", function() {
    return {
    	restrict : "CAE",
        template : "<p>Made by a directive!</p>"
    };
});

//By default the value is EA, meaning that both Element names and attribute names can invoke the directive.

