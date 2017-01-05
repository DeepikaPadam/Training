(function() {
  "use strict";

  angular.module('myApp').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/page1');
    
    $stateProvider
        .state('page1', {
            url: '/page1',
            templateUrl: 'view/page1.html'
        })
        .state('page1.modal1', {
            url: '/modal1',
             templateUrl: 'view/modal1.html'
        })
        .state('page1.modal2', {
            url: '/modal2',
             templateUrl: 'view/modal2.html'
        });
  });

})();