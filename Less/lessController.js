var app = angular.module('myApp',[]);

app.service('jsonService', function ($http, $q) {
    this.getData = function() {
        return $http.get("lessJson.json")
            .then(function(response) {
                console.log(response.data)
                return response.data; 
            }, function(error) {
                return $q.reject(error);
            });
    }
});
app.controller('serviceController', function($scope, jsonService, $q) {
    
    jsonService.getData()       
        .then(function(response) {
            console.log(response)           
            $scope.data = response;
        }, function(error) {          
            alert("Data not found");
        });

}); 