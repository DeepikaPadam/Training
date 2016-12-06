var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'view/home.html'
        })
        .state('home.details', {
            url: '/details',
             templateUrl: 'view/myDetails.html'
        })
        .state('home.education', {
            url: '/education',
             templateUrl: 'view/educationDetails.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'view/about.html'
        })

        .state('portfolio', {
            url: '/portfolio',
            templateUrl: 'view/portfolio.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'view/contact.html'
        });
});

app.service('jsonService', function ($http, $q) {
    this.personalDetails= function() {
        return $http.get("js/myDetails.json")
            .then(function(response) {
                console.log(response.data)
                return response.data; 
            }, function(error) {
                return $q.reject(error);
            });
    }
});
app.controller('serviceController', function($scope, jsonService, $q) {
   console.log("wejhfk"); 
        jsonService.personalDetails()       
            .then(function(response) {
                console.log(response)           
                $scope.data = response;
            }, function(error) {          
                alert("Data not found");
            });
    
}); 
