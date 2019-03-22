// // 4 buttons - link each one to crystal image  // 
// // VARIABLES // 

// var randomNum = [];
// var toalScore = 0;
// var wins = 0;
// var losses = 0;



// // START GAME //

// $(document).ready(function () { 
// // function start () {    }

// // SHOW RANDOM NUMBER 19- 120  //
// var random = Math.floor (Math.random () * 121 + 19)

// $(".randomNum").text (random)

// // ASSIGN HIDDEN RANDOM NUMBER TO EACH CRYSTAL //



// $('.crystalImage').each (function () {
// 	var num = Math.floor(Math.random () *12 +1),
// 	img = $(this);

// 	img.attr ("Unit-4-Game/assets/images/CRYSTAL1.jpg/" , + num + '.jpg');
// });


// // ON CLICK - POINTS ARE ADDED TO TOTAL SCORE //



// // WINS - IF TOTAL SCORE EQUALS RANDOM NUMBER //



// // LOSS - IF TOTAL SCORE GOES ABOVE RANDOM NUMBER //



// // ALERT WIN OR LOSS //
// alert("New score: " + d);

// if (counter === targetNumber) {
//   alert("You win!");
// }

// else if (counter >= targetNumber) {
//   alert("You lose!!");
// }


// GAME RESTARTS WITH NEW RANDOM NUMBER AND NEW HIDDEN VALUES //
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


	// for(var i = 0; i++) {
	// 	var random = Math.floor (Math.random () * 121) + 19;
	// }
	// })

	// // on click of button - points added to total score // 

	// $(".crystals").on ("click", function() {
	// 	for(var i=0; i < 13; i++) {
	// 		var randomNum = (Math.floor (Math.random () * 13));
	// 	crystals = randomNum +crystals; 
	// 	}
	// })
	// hide the points //


	// winning - total score matches random number // 

	//loses  - if score goes above random number // 

