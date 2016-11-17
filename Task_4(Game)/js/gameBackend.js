$(document).ready(function(){
	
	$(".active").click(function(){
		var x = this.id;
			var player1 = $("#p1").hasClass("active");
			var player2 = $("#p2").hasClass("active");
			console.log(this.id);
			//console.log(player2);
		if(player1){
			$("#p1").removeClass("active newClass");
			$("#p2").addClass("active anotherClass");
			$("#"+x).addClass("newClass");
			
			$("#"+x).text("*");
		}
		if(player2){
			$("#p2").removeClass("active anotherClass");
			$("#p1").addClass("active newClass");
			$("#"+x).addClass("anotherClass");
			
			$("#"+x).text("#");
		}
		$("#"+x).off("click");
	});	
	
});