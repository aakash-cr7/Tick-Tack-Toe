var player = 1;

function clickButton(button){
	if(player == 1){
		document.getElementById(button).value = "X";
		document.getElementById(button).disabled = "disabled";
		player--;
		winner();
	} else {
		document.getElementById(button).value = "O";
		document.getElementById(button).disabled = "disabled";	
		player++;
		winner();
	}
}

function winner(){
	
	if((document.getElementById("button1").value == "X" && 
	   document.getElementById("button2").value == "X" &&
	   document.getElementById("button3").value == "X") || 
	   (document.getElementById("button4").value == "X" && 
	   document.getElementById("button5").value == "X" &&
	   document.getElementById("button6").value == "X") || 
	   (document.getElementById("button7").value == "X" && 
	   document.getElementById("button8").value == "X" &&
	   document.getElementById("button9").value == "X") ||
	   (document.getElementById("button1").value == "X" && 
	   document.getElementById("button4").value == "X" &&
	   document.getElementById("button7").value == "X")||
	   (document.getElementById("button2").value == "X" && 
	   document.getElementById("button5").value == "X" &&
	   document.getElementById("button8").value == "X")||	    
	  (document.getElementById("button3").value == "X" && 
	   document.getElementById("button6").value == "X" &&
	   document.getElementById("button9").value == "X")||
	   (document.getElementById("button1").value == "X" && 
	   document.getElementById("button5").value == "X" &&
	   document.getElementById("button9").value == "X")||	
	   (document.getElementById("button3").value == "X" && 
	   document.getElementById("button5").value == "X" &&
	   document.getElementById("button7").value == "X"))	   		
	   
	   {	alert("The winner is Player 1!");
	   		reset();		
	   }
	   else if((document.getElementById("button1").value == "O" && 
	   document.getElementById("button2").value == "O" &&
	   document.getElementById("button3").value == "O") || 
	   (document.getElementById("button4").value == "O" && 
	   document.getElementById("button5").value == "O" &&
	   document.getElementById("button6").value == "O") || 
	   (document.getElementById("button7").value == "O" && 
	   document.getElementById("button8").value == "O" &&
	   document.getElementById("button9").value == "O") ||
	   (document.getElementById("button1").value == "O" && 
	   document.getElementById("button4").value == "O" &&
	   document.getElementById("button7").value == "O")||
	   (document.getElementById("button2").value == "O" && 
	   document.getElementById("button5").value == "O" &&
	   document.getElementById("button8").value == "O")||	    
	  (document.getElementById("button3").value == "O" && 
	   document.getElementById("button6").value == "O" &&
	   document.getElementById("button9").value == "O")||
	   (document.getElementById("button1").value == "O" && 
	   document.getElementById("button5").value == "O" &&
	   document.getElementById("button9").value == "O")||	
	   (document.getElementById("button3").value == "O" && 
	   document.getElementById("button5").value == "O" &&
	   document.getElementById("button7").value == "O"))
	   {	
	   		alert("The winner is Player 2!");
	   		reset();
	   }	
//	   else alert("The game was a TIE!");
}

function reset(){
	document.getElementById("button1").value = "";
	document.getElementById("button2").value = "";
	document.getElementById("button3").value = "";
	document.getElementById("button4").value = "";
	document.getElementById("button5").value = "";
	document.getElementById("button6").value = "";
	document.getElementById("button7").value = "";
	document.getElementById("button8").value = "";
	document.getElementById("button9").value = "";
	document.getElementById("button1").disabled = "";
	document.getElementById("button2").disabled = "";
	document.getElementById("button3").disabled = "";
	document.getElementById("button4").disabled = "";
	document.getElementById("button5").disabled = "";
	document.getElementById("button6").disabled = "";
	document.getElementById("button7").disabled = "";
	document.getElementById("button8").disabled = "";
	document.getElementById("button9").disabled = "";
	
}

window.onload = function(){
	reset();
};
