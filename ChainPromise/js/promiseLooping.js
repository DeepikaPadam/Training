var app = angular.module("myApp",[]);

app.service("promiseService", function($http,$q){
	this.getEmpData = function(url){
		return $http.get(url)
			.then(function(response){
				console.log(response.data);
				return response.data;
			}, function(error){
				 return $q.reject(error);
            });	
	}
}); 

app.controller("promiseController" , function($scope,$q,promiseService){


var promise1 = promiseService.getEmpData("js/empjson.json");

var promise2 = promiseService.getEmpData("jS/lessJson.json");

var promise3 = promiseService.getEmpData("jS/myDetails.json");

$q.all([promise1, promise2, promise3]).then(function(data){ 
	$scope.json1 = data[0];
	$scope.json2 = data[1];
	$scope.json3 = data[2];
	console.log(data[1]);
 }); 
});
