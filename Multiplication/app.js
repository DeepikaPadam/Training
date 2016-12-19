var app = angular.module('myApp', []);

app.controller("tableController", function($scope){
	function viewTable(num){
		var number = [];
		for(var i=0; i<num; i++){
			number[i] = i+1;
			console.log(number);
		}
		return number;
	}

	$scope.numberLimit = 5;

	$scope.$watch('numberLimit', function(x){
		$scope.numberArray = viewTable(x);
		console.log($scope.numberArray);
	});
	
	$scope.multiplyNumbers = function(a,b) {
     return a * b;
  	};
});
