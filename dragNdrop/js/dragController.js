(function() {
  "use strict";

  angular.module('myApp').controller('dragController',["$scope","dragdropService",function($scope,dragdropService){

    $scope.images = '';
    $scope.boxArray = [];
    dragdropService.getJson()       
          .then(function(response) {
              console.log(response)           
              $scope.images = response.friends;
              //$scope.images = response.friends[Math.floor(Math.random() * response.length)];
              console.log($scope.images);
          }, function(error) {          
              alert("Data not found");
          }); 
       dragdropService.dragEvent();   
    
  }]);

})();