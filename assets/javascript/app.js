window.onload = function() {
	// This code will run as soon as page loads

}
// Start game by starting the timer
	


// Check through the questions and answers

	// body...
	
// Create an object with the questions and answers and userguesses 

var content = [
	{"question": 'what is the capital city of Kenya?',
	 "choices":["Nairobi", "washington DC", "kurumbi"],
	 "answer":"Nairobi"
	},

	{"question": 'what is the TZ?',
	 "choices":["Arusha", "Dar", "Cape Town"],
	 "answer":"Arusha"
	},

	{"question": 'what animal is not on a safari?',
	 "choices":["Elephant", "Giraffe", "Dolphin"],
	 "answer":"Dolphin"
	},
];
 
var userQuestion = "";
var questionIndex = 0;
var counterCorrect = 0;
var counterWrong = 0;
var answer = "";

 //Timer
var timerNumber = 11;
var intervalId;

//when the question is answered go to next question and start timer again

// Fucntion runs the timer by decrements of 1 second
function run() {
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
	// decrease number by 1...
	timerNumber --;
// show number in html
$("#timer").html("<h2>" + timerNumber + "</h2>");

 if (timerNumber === 0) {
 	stop();
 	alert("You lose, TIme is Up!!!");
 	timerNumber=11;
 	run();
 }
}

// function gameOver() {
// 	// body...
// 	if (counterCorrect + counterWrong === 3) {

// 		$("")
// 	}
// }


// this function starts the questions and answers
function startGame() {
	// body...

	answer = content[questionIndex].answer
	userQuestion = content[questionIndex].question


	$("#answers").empty();
	$("#questions").html(userQuestion);
	console.log("here i go again");
	for (var i = 0; i < content[questionIndex].choices.length; i++) {
		var button = $("<button>");

		button.attr("data", content[questionIndex].choices[i]);
		button.text(content[questionIndex].choices[i]);
		button.click(checkAnswer);
		$("#answers").append(button);
	};
};
startGame();

function checkAnswer() {
	// body...
	if ($(this).attr("data") === answer) {
		console.log(true);
		counterCorrect++;
		questionIndex++;
	};

	else {
		console.log("wrong");
	}

};

function stop() {
	// body...
	clearInterval(intervalId);
}
run();
