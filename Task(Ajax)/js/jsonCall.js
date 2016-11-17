$(document).ready(function(){
	$("thead").hide();
	$("button").click(function(){
		$("thead").show();
   		$.getJSON('js/empJson.js', function(data) {
       		$.each(data.employees, function(i, f) {
	         	var Row = "<tr>" + "<td>" + f.firstName + "</td>" +
	            "<td>" + f.lastName + "</td>" + "<td>" + f.empId + 
	            "</td>" +  "<td>" + f.experience + "</td>"
	            $(Row).appendTo("#userdata tbody");
    		});

   		});
	});
});

 