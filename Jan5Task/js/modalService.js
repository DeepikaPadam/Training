
angular.module('myApp').service('promiseService', function($http, $q) {

	this.getJsons = function(url) {
	    return $http.get(url)
	        .then(function(response) {
	            return response.data;
	        }, function(error) {
	            return $q.reject(error);
	        });
	};
});


