(function() {
  "use strict";

  angular.module('myApp').service('promiseService',function($http,$q){

    this.getJsons = function(url){
      return $http.get(url)
        .then(function(response){
          console.log(response.data);
          return response.data;
        }, function(error){
           return $q.reject(error);
              }); 
    }
  }); 

angular.module('myApp').controller("promiseController" , function($scope,$q,promiseService,$state){

var promise1 = promiseService.getJsons("jsons/l_AccountingType.json");
var promise2 = promiseService.getJsons("jsons/l_ChargeAmountBasis.json");
var promise3 = promiseService.getJsons("jsons/l_GrowthType.json");
var promise4 = promiseService.getJsons("jsons/l_PaymentDueDay.json");
var promise5 = promiseService.getJsons("jsons/l_PaymentDueOn.json");
var promise6 = promiseService.getJsons("jsons/l_PaymentTiming.json");
var promise7 = promiseService.getJsons("jsons/c_frequecyType.json");
var promise8 = promiseService.getJsons("jsons/c_paymentType.json");

  $q.all([promise1,promise2,promise3,promise4,promise5,promise6,promise7,promise8]).then(function(data){ 
    $scope.accounting = [];
    $scope.charge = [];
    $scope.growth = [];
    $scope.dueday = [];
    $scope.dueon = [];
    $scope.paymentTiming = [];
    $scope.frequency = [];
    $scope.paymentType = [];


    $scope.accounting =  data[0].result;
    $scope.charge =  data[1].result;
    $scope.growth =  data[2].result;
    $scope.dueday =  data[3].result;
    $scope.dueon =  data[4].result;
    $scope.paymentTiming=  data[5].result;
    $scope.frequency=  data[6];
    $scope.paymentType=  data[7];


    if($state.current.name=="page1.modal2"){
      console.log('in page2');
        $("#myModal1").modal('hide');
        $("#myModal2").modal('show');
    }

    if($state.current.name=="page1.modal1"){
      console.log('in page2');
        $("#myModal1").modal('show');
        $("#myModal2").modal('hide');
     }

    $scope.paymentinput=function(input){
     $scope.paymentdata=input;

    }
  }); 
});


})();