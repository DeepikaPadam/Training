var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
     $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'View/home.html'
        })

    $stateProvider
        .state('personalDetails', {
            url: '/personalDetails',
            templateUrl: 'View/personalDetails.html'
        })

    $stateProvider
    	.state('educationalDetails', {

            url: '/educationalDetails',
        	templateUrl: 'View/educationalDetails.html'
        })

	$stateProvider
    	.state('professionalDetails', {
       		url: '/professionalDetails',
        	templateUrl: 'View/professionalDetails.html'
        });
});

app.controller('appCtrl', function($scope, $rootScope,$timeout){
    $scope.$on("SendDown", function (evt, data) {
        //$scope.name = data.name;
        $timeout(function() {
            $scope.$broadcast("SendDown1", data);
            console.log(data);
        }, 25);
        

    });
});
            

app.controller('firstCtrl',function($scope, $rootScope){
	$scope.myPersonalDetails = {};
	console.log($scope.myPersonalDetails);
   // $scope.name = "";
    $scope.nextEvent = function(){
      //  $scope.name = "Deepika";

    	//$scope.$broadcast("SendDown", {name : $scope.myPersonalDetails});
   		$scope.$emit("SendDown",  $scope.myPersonalDetails);
        console.log($scope.myPersonalDetails);

    }
  
});

app.controller('secondCtrl',function($scope, $rootScope){
    $scope.academicDetails = {};
    //console.log($scope.academicDetails);
    $scope.myDetails = [];
    $scope.myDetails.push($scope.academicDetails);
    console.log($scope.myDetails);
    
    $scope.$on("SendDown1", function (evt, data) {
        console.log(data);
        $scope.myDetails.push(data);
        console.log($scope.myDetails);
    });

    $scope.nextEvent = function () {
        $scope.$emit("SendDown", $scope.myDetails);
        console.log($scope.myDetails);
    } 
});

app.controller('thirdCtrl',function($scope, $rootScope){
	$scope.technicalDetails = {};
	console.log($scope.technicalDetails);

    $scope.$on("SendDown1", function (evt, data) {
        console.log(data);
        data.push($scope.technicalDetails);
        console.log(data);
    });
    
});

