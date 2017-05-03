var app = angular.module('myApp', ['ui.router', 'ngMap']);

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
        .state('home.myFriends', {
            url: '/myFriends',
             templateUrl: 'view/myFriends.html'
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
    this.getDetails= function(url) {
        return $http.get(url)
            .then(function(response) {
                console.log(response.data)
                return response.data; 
            }, function(error) {
                return $q.reject(error);
            });
    }
});
app.controller("serviceController" , function($scope,$q,jsonService){

    var promise1 = jsonService.getDetails("js/myDetails.json");

    var promise2 = jsonService.getDetails("js/myFriends.json");

    $q.all([promise1, promise2]).then(function(data){ 
        $scope.json1 = data[0];
        $scope.json2 = data[1];
        console.log(data[1]);
    }); 
});
