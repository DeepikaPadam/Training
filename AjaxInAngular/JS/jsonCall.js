var app = angular.module('myApp',[]);

app.service('jsonService', function($http) {
this.getData = function(callbackFunc) {

    $http.get("JS/empJson.json").success(function(data){
    	console.log(data)
        callbackFunc(data);
       
    }).error(function(){
        alert("error");
    });
 }
});

app.controller('serviceController', function($scope, jsonService) {
    $scope.data = null;
    jsonService.getData(function(dataResponse) {
        $scope.data = dataResponse;
        console.log($scope.data)
    });

});
