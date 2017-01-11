
angular.module('myApp').directive('modal1Directive', function() {
    return {
        restrict: 'EA',
        templateUrl: '../view/modal1.html'
    }
});

angular.module('myApp').directive('modal2Directive', function() {
    return {
        restrict: 'EA',
        templateUrl: '../view/modal2.html'
    }
});


angular.module('myApp').directive('pageDirective', function() {
    return {
        restrict: 'E',
        templateUrl: '../view/page1.html'
    }

});
angular.module('myApp').directive('deleteDirective', function() {
    return {
        restrict: 'EA',
        templateUrl: '../view/deleteModal.html'
    }

});

angular.module('myApp').directive('editDirective', function() {
    return {
        restrict: 'EA',
        templateUrl: '../view/saveChanges.html'
    }

});