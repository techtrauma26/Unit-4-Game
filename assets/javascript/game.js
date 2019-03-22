// 4 buttons - link each one to crystal image  // 
// VARIABLES // 

var randomNum = [];
var toalScore = 0;
var wins = 0;
var losses = 0;



// START GAME //

$(document).ready(function () { 
// function start () {    }

// SHOW RANDOM NUMBER 19- 120  //
var random = Math.floor (Math.random () * 121 + 19)

$(".randomNum").text (random)

// ASSIGN HIDDEN RANDOM NUMBER TO EACH CRYSTAL //

var num = Math.floor(Math.random () *12 +1),
var num = Math.floor(Math.random () *12 +1),

$('.crystalImage').each (function () {
	var num = Math.floor(Math.random () *12 +1),
	img = $(this);

	img.attr ("Unit-4-Game/assets/images/CRYSTAL1.jpg/" , + num + '.jpg');
});


// ON CLICK - POINTS ARE ADDED TO TOTAL SCORE //



// WINS - IF TOTAL SCORE EQUALS RANDOM NUMBER //



// LOSS - IF TOTAL SCORE GOES ABOVE RANDOM NUMBER //



// ALERT WIN OR LOSS //
alert("New score: " + counter);

if (counter === targetNumber) {
  alert("You win!");
}

else if (counter >= targetNumber) {
  alert("You lose!!");
}


// GAME RESTARTS WITH NEW RANDOM NUMBER AND NEW HIDDEN VALUES //


$(document).ready(function () {


	
	document.getElementById("randomNum").innerHTML =
	Math.floor(Math.random() * 120) + 19; 


{


	for(var i = 0; i++) {
		var random = Math.floor (Math.random () * 121) + 19;
	}
	})
	
	// on click of button - points added to total score // 
	
	$(".crystals").on ("click", function() {
		for(var i=0; i < 13; i++) {
			var randomNum = (Math.floor (Math.random () * 13));
		crystals = randomNum +crystals; 
		}
	})
	// hide the points //
	
	
	// winning - total score matches random number // 
	
	//loses  - if score goes above random number // 
	
}