$(document).ready(function() {

var startScreen;
var triviaHTML;
var counter = 120;
var questionList = ["1. What was the first pizza restaurant in the US?", "2. What do you call a pizza with mozarella cheese, basil, tomatoes, olive oil?", "3. What do you call a pizza with ham, bacon, pineapple, mozarella cheese?", "4. What do you call a pizza with a thick crust that is square and crispy on the bottom?", "5. Which is the number 1 all around best pizza shop in NYC?"];
var answerList = [["Pizza Hut","Domino's","Lombardi's Pizza"],["Neopolitan","Margherita","Vegetarian"],["Hawaiian","Canadian","Dominican"],["Bread","Pizza","Sicilian Style"],["Emmy Squared","Joe's Pizza","Marta's"]];


// Initial screen with "click to start" button
function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-secondary btn-lg start-button' href='#' role='button'>Click to Start</a></p>";
	$(".content").html(startScreen);
}

initialScreen();

// initialize game when start button is clicked
$("body").on("click", ".start-button", function(event){
	generateHTML();
});


// countdown timer from 120 seconds 
var counter = 0;
var timeLeft = 120;

$('#timer').html("Time Left " + (timeConverter(timeLeft - counter)));

function reset() {
	if (min === 0 && sec === 0) {
		$('#timer').html("Time's up!");
	}
}

function time() {
	counter++;
	$('#timer').html("Time Left " + (timeConverter(timeLeft - counter)));
}

// function that converts 120 seconds to display minutes and seconds
function timeConverter(s) {

	var min = Math.floor(s/60);
	var sec = s % 60;
	if (sec < 10) {
		sec = "0" + sec;
	}
	if (min === 0) {
		min = "00";
	}
	else if (min < 10) {
		min = "0" + min;
	}
	return min + " : " + sec;
	console.log(timeConverter(120));
}

// need to stop the timer
setInterval(time, 1000);
if (sec < 1) {
	clearInterval(time);
}

// // Trivia Questions / Answers / Results 


});
