$(document).ready(function(){
	//Declaring an static array 
	var arr = [1,2,3];
	var arr1 = [];
	//A button to display the array
	$("#btn1").click(function(){
		//To display the given input array
		$("#array").text(arr);
	});
		
	$("#btn2").click(function(){
		//Function to append a new value to array
		function appendValue(){	
			arr1 = arr;
			//Adding an element to array by using  prompt
			var num = prompt("Please enter your value");
			if(num != ""){
				num = num.toString();
				console.log(num);
				arr1.push(num);
				console.log(arr1.join());
				confirm("The value is added");
			}else{
				alert("Please enter the value");
			}	
		}
		//Set timeout function to call the append function after 2 seconds			
		setTimeout(function(){
			appendValue();
			}, 2000);
			
	});
	function checkFunction(){
		//comparing the input array and modified array
		var flag = false;
		for(var i=0; i<arr.length; i++){
			for(var j=0; j<arr1.length; j++){
				if(arr[i] != arr1[j]){
					flag = true;
				}
			}
		}
		//Appending the new element into the ainput array
		if(flag){				
			$("#array").append(arr1[j]);
			$("#array").text(arr);
			console.log(arr.join());
		}
	}
					
	setInterval(function(){	
		$("#array").empty();
		checkFunction();
		}, 2000);	
	

});