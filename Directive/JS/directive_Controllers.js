var app = angular.module('myApp',[]);

app.service('jsonService', function($http) {
	this.getJson1 = function(callbackFunc) {

		$http.get("JS/empJson.json").success(function(data){
			console.log(data)
			callbackFunc(data);
		   
		}).error(function(){
			alert("error");
		});
	}

	this.getJson2 = function(callbackFunc) {

		$http.get("JS/Json2.json").success(function(data){
			console.log(data)
			callbackFunc(data);
		   
		}).error(function(){
			alert("error");
		});
	} 

}); 

app.controller('serviceController1', function($scope, jsonService) {
    $scope.data = null;
    jsonService.getJson1(function(dataResponse) {
        $scope.data = dataResponse;
        console.log($scope.data)
    });
   
    $scope.deleteEmp = function (index) {
    	$scope.data.employees.splice(index, 1);
	}

});

app.controller('serviceController2', function($scope, jsonService) {
    $scope.data = null;
    jsonService.getJson2(function(dataResponse) {
        $scope.data = dataResponse;
        console.log($scope.data)
    });
    $scope.deleteEmp = function (index) {
    	$scope.data.employees.splice(index, 1);
	}
});
 

app.directive("empDirective", function () {
  return {
 	restrict : 'A',
 	scope:{
 		getData : '=',
 		delete : '&'
 	},
 	templateUrl: 'view/empDetailsDirective.html',
  };

});
