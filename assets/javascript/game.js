
var countingValue = 0;
var constantNum = 0;

$(document).ready(function () {
	intialize ();
})

function image1(x) {
	if (x === 1) {
		countingValue = parseInt(countingValue) + parseInt(document.getElementById("imageInput1").value);
		document.getElementById("totalScore").innerHTML = countingValue;
		if (countingValue === constantNum) {
			document.getElementById("wins").innerHTML = parseInt(document.getElementById("wins").innerHTML) + 1;
			newGame();
		}
		else if (countingValue > constantNum) {
			document.getElementById("losses").innerHTML = parseInt(document.getElementById("losses").innerHTML ) + 1;
			newGame();
		}
	}
	else if (x === 2) {
		countingValue = parseInt(countingValue) + parseInt(document.getElementById("imageInput2").value);
		document.getElementById("totalScore").innerHTML = countingValue;
		if (countingValue === constantNum) {
			document.getElementById("wins").innerHTML = parseInt(document.getElementById("wins").innerHTML) + 1;
			newGame();
		}
		else if (countingValue > constantNum) {
			document.getElementById("losses").innerHTML = parseInt(document.getElementById("losses").innerHTML) + 1;
			newGame();
		}
	}
	else if (x === 3) {
		countingValue = parseInt(countingValue) + parseInt(document.getElementById("imageInput3").value);
		document.getElementById("totalScore").innerHTML = countingValue;
		if (countingValue === constantNum) {
			document.getElementById("wins").innerHTML = parseInt(document.getElementById("wins").innerHTML) + 1;
			newGame();
		}
		else if (countingValue > constantNum) {
			document.getElementById("losses").innerHTML = parseInt(document.getElementById("losses").innerHTML ) + 1;
			newGame();
		}
	}
	else if (x === 4) {
		countingValue = parseInt(countingValue) + parseInt(document.getElementById("imageInput4").value);
		document.getElementById("totalScore").innerHTML = countingValue;
		if (countingValue === constantNum) {
			document.getElementById("wins").innerHTML = parseInt(document.getElementById("wins").innerHTML) + 1;
			newGame();
		}
		else if (countingValue > constantNum) {
			document.getElementById("losses").innerHTML = parseInt(document.getElementById("losses").innerHTML ) + 1;
			newGame();
		}
	}
}
	function newGame() {
		intialize()
		countingValue = 0;
		//  constantNum = 0;
		document.getElementById("totalScore").innerHTML=0;
	}

	function intialize() {
		constantNum = Math.floor(Math.random() * 120) + 19;

		document.getElementById("randomNum").innerHTML = constantNum;
	
		document.getElementById("imageInput1").value = Math.floor(Math.random() * 12) + 1;
		document.getElementById("imageInput2").value = Math.floor(Math.random() * 12) + 1;
		document.getElementById("imageInput3").value = Math.floor(Math.random() * 12) + 1;
		document.getElementById("imageInput4").value = Math.floor(Math.random() * 12) + 1;

		
	}




