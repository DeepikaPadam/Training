(function(){
	"use strict";


	angular.module('myApp').service('dragdropService',function($http,$q){
	    // service for all the ajax call
	    this.getJson= function() {
	        return $http.get("js/imagesJson.json")
	            .then(function(response) {
	                console.log(response.data);
	                return response.data; 
	            }, function(error) {
	                return $q.reject(error);
	            });
	    }


		this.dragEvent = function(){
			var dragged;
			console.log("hfj");
			document.addEventListener("drag", function(event) {
	  		}, false);
	  		document.addEventListener("dragstart", function(event) {
				dragged = event.target;
				console.log(dragged);
				event.target.style.opacity = 0.5;
	  		}, false);
			document.addEventListener("dragend", function(event) {
				event.target.style.opacity = "";
	  		}, false);
			document.addEventListener("dragover", function(event) {
				event.preventDefault();
	  		}, false);

			document.addEventListener("drop", function(event) {
				event.preventDefault();
				console.log(dragged.id);
				console.log(event.target);
				if (event.target.id == dragged.id)  {
			    	event.target.appendChild(dragged);
	          	}
	  		}, false);
		}

	});
})();