angular.module('myApp').controller("modalController", function( $q, promiseService) {
   
    var vm = this;

    vm.show = true;
    vm.isChecked = true;
    vm.accounting = [];
    vm.charge = [];
    vm.growth = [];
    vm.dueday = [];
    vm.dueon = [];
    vm.paymentTiming = [];
    vm.frequency = [];
    vm.paymentType = [];


    promiseService.getJsons("../jsons/c_paymentType.json").
    then(function(data) {
        for (var i = 0; i < data.length; i++) {
            var str = data[i].path;
            var res = str.split("\\");
            vm.paymentType.push(res[2]);
        }
    });


    promiseService.getJsons("../jsons/c_frequecyType.json").
    then(function(data) {
        for (var i = 0; i < data.length; i++) {
            var str = data[i].path;
            var res = str.split("\\");
            vm.frequency.push(res[2]);
        }
    });


    promiseService.getJsons("../jsons/l_AccountingType.json").
    then(function(success) {
        var data = success.result;
        for (var i = 0; i < data.length; i++) {
            var str = data[i].value;
            vm.accounting.push(str);
        }
    });

    promiseService.getJsons("../jsons/l_ChargeAmountBasis.json").
    then(function(success) {
        var data = success.result;
        for (var i = 0; i < data.length; i++) {
            var str = data[i].value;
            vm.charge.push(str);
        }
    });

    promiseService.getJsons("../jsons/l_PaymentTiming.json").
    then(function(success) {
        var data = success.result;
        for (var i = 0; i < data.length; i++) {
            var str = data[i].value;
            vm.paymentTiming.push(str);
        }
    });

    promiseService.getJsons("../jsons/l_PaymentDueDay.json").
    then(function(success) {
        var data = success.result;
        for (var i = 0; i < data.length; i++) {
            var str = data[i].value;
            vm.dueday.push(str);
        }
    });

    promiseService.getJsons("../jsons/l_GrowthType.json").
    then(function(success) {
        var data = success.result;
        for (var i = 0; i < data.length; i++) {
            var str = data[i].value;
            vm.growth.push(str);
        }
    });

    promiseService.getJsons("../jsons/l_PaymentDueOn.json").
    then(function(success) {
        var data = success.result;
        for (var i = 0; i < data.length; i++) {
            var str = data[i].value;
            vm.dueon.push(str);
        }
    });

    vm.details = {};

    vm.generateData = function() {
        if(vm.payType != "" &&  vm.accountingData !=""){

        }
        var object = {};
        if (vm.payType in vm.details) {
            object.payType = vm.payType;
            object.accountingData = vm.accountingData;
            object.freqType = vm.freqType;
            object.startPeriod = vm.startPeriod;
            object.paymentTime = vm.paymentTime;
            object.paymentDueon = vm.paymentDueon;
            object.paymentDueday = vm.paymentDueday;
            object.accountingCost = vm.accountingCost;
            object.description = vm.description;
            object.growthType = vm.growthType;
            object.fixedGrowth = vm.fixedGrowth;
            object.schedules = vm.schedules;
            object.AdjustEveryMonth = vm.AdjustEveryMonth;
            object.chargeAmount = vm.chargeAmount;
            object.rentablent = vm.rentable;
            object.AmountPerBasis = vm.AmountPerBasis;
            console.log(object);
            vm.details[vm.payType].push(object);
            console.log(vm.details);

        } else {

            vm.details[vm.payType] = [];
            console.log(vm.payType);
            object.payType = vm.payType;
            object.accountingData = vm.accountingData;
            object.freqType = vm.freqType;
            object.startPeriod = vm.startPeriod;
            object.paymentTime = vm.paymentTime;
            object.paymentDueon = vm.paymentDueon;
            object.paymentDueday = vm.paymentDueday;
            object.accountingCost = vm.accountingCost;
            object.description = vm.description;
            object.growthType = vm.growthType;
            object.fixedGrowth = vm.fixedGrowth;
            object.schedules = vm.schedules;
            object.AdjustEveryMonth = vm.AdjustEveryMonth;
            object.chargeAmount = vm.chargeAmount;
            object.rentablent = vm.rentable;
            object.AmountPerBasis = vm.AmountPerBasis;
            console.log(object);
            vm.details[vm.payType].push(object);
            console.log(vm.details);
        }

    };

    vm.addDetails = function() {
        console.log("gslgjk");
        vm.payType = '';
        vm.accountingData = '';
        vm.freqType = '';
        vm.startPeriod = '';
        vm.paymentTime = '';
        vm.paymentDueon = '';
        vm.paymentDueday = '';
        vm.accountingCost = '';
        vm.description = '';
        vm.growthType = '';
        vm.fixedGrowth = '';
        vm.schedules = '';
        vm.AdjustEveryMonth = '';
        vm.chargeAmount = '';
        vm.rentable = '';
        vm.AmountPerBasis = '';
        vm.show = true;
    }


     /* vm.delete = function(item) {
          console.log("wtwt");

          var index = vm.details.indexOf(item);
          vm.details.splice(index, 1);

        }; */

    vm.delete = function(key, index) {
        console.log(key);
        console.log(vm.details[key]);
        vm.confirmDelete = function(){
            var index = vm.details[key].indexOf(key);
            vm.details[key].splice(index, 1);
        };
       
    };

    vm.editDetails = function(key,index) {
        vm.show = false;
        console.log(key);
        vm.payType = key.payType;
        vm.accountingData = key.accountingData;
        vm.freqType = key.freqType;
        vm.startPeriod = key.startPeriod;
        vm.paymentTime = key.paymentTime;
        vm.paymentDueon = key.paymentDueon;
        vm.paymentDueday = key.paymentDueday;
        vm.accountingCost = key.accountingCost;
        vm.description = key.description;
        vm.growthType = key.growthType;
        vm.fixedGrowth = key.fixedGrowth;
        vm.schedules = key.schedules;
        vm.AdjustEveryMonth = key.AdjustEveryMonth;
        vm.chargeAmount = key.chargeAmount;
        vm.rentable = key.rentablent;
        vm.AmountPerBasis = key.AmountPerBasis;

        vm.modifyDetails = function() {
            console.log("ewtwe");
            console.log(vm.details);

            vm.details[key][index].payType = vm.payType;
            vm.details[key][index].accountingData = vm.accountingData;
            vm.details[key][index].freqType = vm.freqType;
            vm.details[key][index].startPeriod = vm.startPeriod;
            vm.details[key][index].paymentTime = vm.paymentTime;
            vm.details[key][index].paymentDueon = vm.paymentDueon;
            vm.details[key][index].paymentDueday = vm.paymentDueday;
            vm.details[key][index].accountingCost = vm.accountingCost;
            vm.details[key][index].description = vm.description;
            vm.details[key][index].growthType = vm.growthType;
            vm.details[key][index].fixedGrowth = vm.fixedGrowth;
            vm.details[key][index].schedules = vm.schedules;
            vm.details[key][index].AdjustEveryMonth = vm.AdjustEveryMonth;
            vm.details[key][index].chargeAmount = vm.chargeAmount;
            vm.details[key][index].rentable = vm.rentable;
            vm.details[key][index].AmountPerBasis = vm.AmountPerBasis;

            console.log(vm.details);

        }
    };

    vm.checkValidations = function() {
        console.log("fdgs")
        vm.isChecked = true;

       /* vm.payType != '';
        vm.accountingData != '';
        vm.freqType != '';
        vm.startPeriod != '';
        vm.paymentTime != '';
        vm.paymentDueon != '';
        vm.paymentDueday != '';
        vm.accountingCost != '';
        vm.description != '';
        vm.growthType != '';
        vm.fixedGrowth != '';
        vm.schedules != '';
        vm.AdjustEveryMonth != '';
        vm.chargeAmount != '';
        vm.rentable != '';
        vm.AmountPerBasis != '';
       */
    }; 


});