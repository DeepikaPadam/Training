(function() {
    "use strict";

    angular.module('myApp').service('promiseService', function($http, $q) {

        this.getJsons = function(url) {
            return $http.get(url)
                .then(function(response) {
                    return response.data;
                }, function(error) {
                    return $q.reject(error);
                });
        }
    });

    angular.module('myApp').controller("modalController", function($scope, $q, promiseService, $state) {
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
            for (var i = 0; i < data.length; i++) {
                var str = data[i].path;
                var res = str.split("\\");
                $scope.paymentType.push(res[2]);
            }
        });


        promiseService.getJsons("../jsons/c_frequecyType.json").
        then(function(data) {
            for (var i = 0; i < data.length; i++) {
                var str = data[i].path;
                var res = str.split("\\");
                $scope.frequency.push(res[2]);
            }
        });


        promiseService.getJsons("../jsons/l_AccountingType.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                $scope.accounting.push(str);
            }
        });

        promiseService.getJsons("../jsons/l_ChargeAmountBasis.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                $scope.charge.push(str);
            }
        });

        promiseService.getJsons("../jsons/l_PaymentTiming.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                $scope.paymentTiming.push(str);
            }
        });

        promiseService.getJsons("../jsons/l_PaymentDueDay.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                $scope.dueday.push(str);
            }
        });

        promiseService.getJsons("../jsons/l_GrowthType.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                $scope.growth.push(str);
            }
        });

        promiseService.getJsons("../jsons/l_PaymentDueOn.json").
        then(function(success) {
            var data = success.result;
            for (var i = 0; i < data.length; i++) {
                var str = data[i].value;
                $scope.dueon.push(str);
            }
        });
       
        $scope.details = {};

        $scope.generateData = function() {
            var object = {};
            if($scope.payType in  $scope.details){
              object.payType = $scope.payType;
              object.accountingData = $scope.accountingData;
              object.freqType = $scope.freqType;
              object.startPeriod = $scope.startPeriod;
              object.paymentTime = $scope.paymentTime;
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
              $scope.details[$scope.payType].push(object);
              console.log($scope.details);

            }else{
            
              $scope.details[$scope.payType] = [];
              console.log($scope.payType);
              object.payType = $scope.payType;
              object.accountingData = $scope.accountingData;
              object.freqType = $scope.freqType;
              object.startPeriod = $scope.startPeriod;
              object.paymentTime = $scope.paymentTime;
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
              $scope.details[$scope.payType].push(object);
              console.log($scope.details);
            }
            
        };

        $scope.addDetails = function() {
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
            $scope.show= true;
        }


      /*  $scope.delete = function(item,index) {
            console.log("wtwt");

            var index = $scope.details.indexOf(item);
            $scope.details.splice(index, 1);

        }; */
        $scope.delete = function(key,index){
            console.log($scope.details[key][index]);        
              $scope.details[key].splice(index,1);  
        }

        $scope.editDetails = function(key,index) {
            $scope.show = false;
            console.log(key);
            $scope.payType = key.payType;
            $scope.accountingData = key.accountingData;
            $scope.freqType = key.freqType;
            $scope.startPeriod = key.startPeriod;
            $scope.paymentTime = key.paymentTime;
            $scope.paymentDueon = key.paymentDueon;
            $scope.paymentDueday = key.paymentDueday;
            $scope.accountingCost = key.accountingCost;
            $scope.description = key.description;
            $scope.growthType = key.growthType;
            $scope.fixedGrowth = key.fixedGrowth;
            $scope.schedules = key.schedules;
            $scope.AdjustEveryMonth = key.AdjustEveryMonth;
            $scope.chargeAmount = key.chargeAmount;
            $scope.rentable = key.rentablent;
            $scope.AmountPerBasis = key.AmountPerBasis;

            $scope.modifyDetails = function() {
                console.log("ewtwe");
                console.log($scope.details);
                      
                        $scope.details[key][index].payType = $scope.payType;
                        $scope.details[key][index].accountingData = $scope.accountingData;
                        $scope.details[key][index].freqType = $scope.freqType;
                        $scope.details[key][index].startPeriod = $scope.startPeriod;
                        $scope.details[key][index].paymentTime = $scope.paymentTime;
                        $scope.details[key][index].paymentDueon = $scope.paymentDueon;
                        $scope.details[key][index].paymentDueday = $scope.paymentDueday;
                        $scope.details[key][index].accountingCost = $scope.accountingCost;
                        $scope.details[key][index].description = $scope.description;
                        $scope.details[key][index].growthType = $scope.growthType;
                        $scope.details[key][index].fixedGrowth = $scope.fixedGrowth;
                        $scope.details[key][index].schedules = $scope.schedules;
                        $scope.details[key][index].AdjustEveryMonth = $scope.AdjustEveryMonth;
                        $scope.details[key][index].chargeAmount = $scope.chargeAmount;
                        $scope.details[key][index].rentable = $scope.rentable;
                        $scope.details[key][index].AmountPerBasis = $scope.AmountPerBasis;

                        console.log($scope.details);
                    
                }
            };

       

        $scope.checkValidations = function() {
            $scope.isChecked = true;
            return true;
        }
        $scope.fnSubmit = function() {

        }

    });


})();