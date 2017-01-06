(function() {
  "use strict";

  angular.module('myApp').service('promiseService',function($http,$q){

    this.getJsons = function(url){
      return $http.get(url)
        .then(function(response){
          return response.data;
        }, function(error){
           return $q.reject(error);
              }); 
    }
  }); 

angular.module('myApp').controller("modalController" , function($scope,$q,promiseService,$state){


  if($state.current.name=="page1.modal2"){
      console.log('in page1');
        $("#myModal1").modal('hide');
        $("#myModal2").modal('show');
  }

  if($state.current.name=="page1.modal1"){
    console.log('in page2');
      $("#myModal1").modal('show');
      $("#myModal2").modal('hide');
  }
  

 
    $scope.accounting = [];
    $scope.charge = [];
    $scope.growth = [];
    $scope.dueday = [];
    $scope.dueon = [];
    $scope.paymentTiming = [];
    $scope.frequency = [];
    $scope.paymentType = [];


    promiseService.getJsons("../jsons/c_paymentType.json").
      then(function(data) {
            for(var i=0;i< data.length;i++){
              var str=data[i].path;
              var res = str.split("\\");
              $scope.paymentType.push(res[2]);
            }
    });

    
    promiseService.getJsons("../jsons/c_frequecyType.json").
      then(function(data) {
            for(var i=0;i< data.length;i++){
              var str=data[i].path;
              var res = str.split("\\");
              $scope.frequency.push(res[2]);
            }
            console.log($scope.frequency);
         });


    promiseService.getJsons("../jsons/l_AccountingType.json").
      then(function(success) {
        var data= success.result;
            for(var i=0;i< data.length;i++){
              var str=data[i].value;
              $scope.accounting.push(str);
            }
            console.log($scope.accounting);
    });

    promiseService.getJsons("../jsons/l_ChargeAmountBasis.json").
      then(function(success) {
        var data= success.result;
            for(var i=0;i< data.length;i++){
              var str=data[i].value;
              $scope.charge.push(str);
            }
            console.log($scope.charge);
    });

    promiseService.getJsons("../jsons/l_PaymentTiming.json").
      then(function(success) {
        var data= success.result;
            for(var i=0;i< data.length;i++){
              var str=data[i].value;
              $scope.paymentTiming.push(str);
            }
            console.log($scope.paymentTiming);
    });

    promiseService.getJsons("../jsons/l_PaymentDueDay.json").
      then(function(success) {
        var data= success.result;
            for(var i=0;i< data.length;i++){
              var str=data[i].value;
              $scope.dueday.push(str);
            }
            console.log($scope.dueday);
    });

    promiseService.getJsons("../jsons/l_GrowthType.json").
      then(function(success) {
        var data= success.result;
            for(var i=0;i< data.length;i++){
              var str=data[i].value;
              $scope.growth.push(str);
            }
            console.log($scope.growth);
    });

    promiseService.getJsons("../jsons/l_PaymentDueOn.json").
      then(function(success) {
        var data= success.result;
            for(var i=0;i< data.length;i++){
              var str=data[i].value;
              $scope.dueon.push(str);
            }
            console.log($scope.dueon);
    });

  $scope.payType,$scope.accountingData,$scope.freqType,
  $scope.startPeriod,$scope.paymentTime,$scope.paymentDueon,
  $scope.paymentDueday,$scope.accountingCost,$scope.description,$scope.growthType,
  $scope.fixedGrowth,$scope.schedules,$scope.AdjustEveryMonth,
  $scope.chargeAmount,$scope.rentable,$scope.AmountPerBasis="";   

  $scope.details = [];
  $scope.generateData= function(){
    var object = {};
    object.payType = $scope.payType; 
    object.accountingData = $scope.accountingData;
    object.freqType= $scope.freqType; 
    object.startPeriod = $scope.startPeriod;
    object.paymentTime= $scope.paymentTime; 
    object.paymentDueon = $scope.paymentDueon;
    object.paymentDueday = $scope.paymentDueday;
    object.accountingCost = $scope.accountingCost;
    object.description = $scope.description;
    object.growthType = $scope.growthType; 
    object.fixedGrowth = $scope.fixedGrowth; 
    object.schedules = $scope.schedules;
    object.AdjustEveryMonth = $scope.AdjustEveryMonth;
    object.chargeAmount = $scope.chargeAmount;  
    object.rentablent = $scope.rentable; 
    object.AmountPerBasis = $scope.AmountPerBasis; 
    console.log(object);
    $scope.details.push(object);
  };

  });

})();

    /*$scope.accountingInput = function(input){
      $scope.accountingData = input;
    }

     $scope.chargeBasis = function(input){
      $scope.chargeAmount = input;
    }

     $scope.growthType = function(input){
      $scope.growthType = input;
    }
     $scope.paymentDueday = function(input){
      $scope.paymentDueday = input;
    }
    $scope.paymentDueon = function(input){
      $scope.paymentDueon = input;
    }

    $scope.paymentTiming = function(input){
      $scope.paymentTime = input;
    }

    $scope.frequencyType = function(input){
      $scope.freqType = input;
    }
    $scope.paymentType=function(input){
      $scope.payType = input;

    }



    
    

    object.accountingData = $scope.accountingData; 
    object.chargeAmount = $scope.chargeAmount;  
    object.growthType = $scope.growthType;   
    object.paymentDue = $scope.paymentDueday;  
    object.paymentDueon = $scope.paymentDueon;  
    object.paymentTime= $scope.paymentTime;  
    object.freqType= $scope.freqType;  
    object.payType = $scope.payType;   
    console.log(object);
  }); */



