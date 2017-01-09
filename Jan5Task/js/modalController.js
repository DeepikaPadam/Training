(function(){
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
      $scope.display = true;
      $scope.show = true;
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
      });


      promiseService.getJsons("../jsons/l_AccountingType.json").
        then(function(success) {
          var data= success.result;
          for(var i=0;i< data.length;i++){
            var str=data[i].value;
            $scope.accounting.push(str);
          }
      });

      promiseService.getJsons("../jsons/l_ChargeAmountBasis.json").
        then(function(success) {
          var data= success.result;
          for(var i=0;i< data.length;i++){
            var str=data[i].value;
            $scope.charge.push(str);
          }
      });

      promiseService.getJsons("../jsons/l_PaymentTiming.json").
        then(function(success) {
          var data= success.result;
          for(var i=0;i< data.length;i++){
            var str=data[i].value;
            $scope.paymentTiming.push(str);
          }
      });

      promiseService.getJsons("../jsons/l_PaymentDueDay.json").
        then(function(success) {
          var data= success.result;
          for(var i=0;i< data.length;i++){
            var str=data[i].value;
            $scope.dueday.push(str);
          }
      });

      promiseService.getJsons("../jsons/l_GrowthType.json").
        then(function(success) {
          var data= success.result;
          for(var i=0;i< data.length;i++){
            var str=data[i].value;
            $scope.growth.push(str);
          }
      });

      promiseService.getJsons("../jsons/l_PaymentDueOn.json").
        then(function(success) {
          var data= success.result;
          for(var i=0;i< data.length;i++){
            var str=data[i].value;
            $scope.dueon.push(str);
          }
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

      $scope.addDetails = function(){
        console.log("gslgjk");
        $scope.payType = null;
        $scope.accountingData = null;
        $scope.freqType = null;
        $scope.startPeriod = null;
        $scope.paymentTime = null;
        $scope.paymentDueon = null;
        $scope.paymentDueday = null;
        $scope.accountingCost = null;
        $scope.description = null;
        $scope.growthType = null;
        $scope.fixedGrowth = null;
        $scope.schedules = null;
        $scope.AdjustEveryMonth = null;
        $scope.chargeAmount = null;
        $scope.rentable = null;
        $scope.AmountPerBasis = null; 
        $scope.display = true;
      }

      
      $scope.delete = function(item) {
        console.log("wtwt");
       
        var index = $scope.details.indexOf(item);
        $scope.details.splice(index, 1);     

      };

      $scope.editDetails = function(x){
        $scope.show = false; 
        $scope.display = false;
        console.log(x);
        $scope.payType = x.payType; 
        $scope.accountingData = x.accountingData;
        $scope.freqType = x.freqType; 
        $scope.startPeriod = x.startPeriod;
        $scope.paymentTime = x.paymentTime; 
        $scope.paymentDueon = x.paymentDueon;
        $scope.paymentDueday = x.paymentDueday;
        $scope.accountingCost = x.accountingCost;
        $scope.description = x.description;
        $scope.growthType = x.growthType; 
        $scope.fixedGrowth = x.fixedGrowth; 
        $scope.schedules = x.schedules;
        $scope.AdjustEveryMonth = x.AdjustEveryMonth;
        $scope.chargeAmount = x.chargeAmount;  
        $scope.rentable = x.rentablent; 
        $scope.AmountPerBasis = x.AmountPerBasis; 
          
          $scope.modifyDetails = function(){
            console.log("ewtwe");
            
            for(var i=0; i<$scope.details.length; i++){
              if($scope.details[i].payType== x.payType && $scope.details[i].startPeriod== x.startPeriod && $scope.details[i].freqType== x.freqType){
                $scope.details[i].payType = $scope.payType;
                console.log($scope.details[i].payType);
                $scope.details[i].accountingData = $scope.accountingData;
                $scope.details[i].freqType = $scope.freqType;
                $scope.details[i].startPeriod = $scope.startPeriod;
                $scope.details[i].paymentTime = $scope.paymentTime;
                $scope.details[i].paymentDueon = $scope.paymentDueon;
                $scope.details[i].paymentDueday = $scope.paymentDueday;
                $scope.details[i].accountingCost = $scope.accountingCost;
                $scope.details[i].description = $scope.description;
                $scope.details[i].growthType  = $scope.growthType ;
                $scope.details[i].fixedGrowth = $scope.fixedGrowth;
                $scope.details[i].schedules = $scope.schedules;
                $scope.details[i].AdjustEveryMonth = $scope.AdjustEveryMonth;
                $scope.details[i].chargeAmount = $scope.chargeAmount;
                $scope.details[i].rentable = $scope.rentable;
                $scope.details[i].AmountPerBasis = $scope.AmountPerBasis;
                console.log($scope.details);
              }
            }
          };

      };

      $scope.checkValidations = function(){
        $scope.isChecked = true;
        return true;
      }
      $scope.fnSubmit = function(){
     
      }
   
  });
  

})();

    



