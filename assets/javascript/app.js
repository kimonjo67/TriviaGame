
var content = [
	{"question": 'what is the capital city of Kenya?',
	 "choices":["Nairobi", "washington", "Lagos"],
	 "answer":"Nairobi"
	},

	{"question": 'what is the tallest mountaing in Africa?',
	 "choices":["Arusha", "Kilimanjaro", "Everest"],
	 "answer":"Kilimanjaro"
	},

	{"question": 'which animal is not in a safari tour?',
	 "choices":["Elephant", "Giraffe", "Dolphin"],
	 "answer":"Dolphin"
	},
];

 
var userQuestion = "";
var userAnswer = "";
var questionIndex = 0;
var counterCorrect = 0;
var counterWrong = 0;



 //Timer
var timerNumber = 11;
var intervalId;

//when the question is answered go to next question and start timer again

// Fucntion runs the timer by decrements of 1 second when pages load
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
 	document.getElementById("afterSubmit").style.visibility = "visible";
	document.getElementById("wrongAnswer").innerHTML = "You got " + counterWrong + " wrong";
 	timerNumber=10;
 	run();
 }


}

// function that will end the game once user chooses their answers
function gameOver() {
 	// body...
 		if (counterCorrect + counterWrong === content.length) {
 			$("#questions").html("");
 			$("#answers").html("<h2>"+ "Game Over, Your Score is: " + counterCorrect);
 			stop();
 			checkAnswer();
 			
 			
	}
 } gameOver();



// this function starts the questions and answers game by going through the arrays object of questions and answers
function startGame() {


	userAnswer = content[questionIndex].answer;
	userQuestion = content[questionIndex].question;

	$("#answers").empty();
	$("#questions").html(userQuestion);

	for (var i = 0; i < content[questionIndex].choices.length; i++) {
		var button = $("<button>");

		button.attr("data", content[questionIndex].choices[i]);
		button.text(content[questionIndex].choices[i]);
		var click = button.click(checkAnswer);
		$("#answers").append(button);
	};
};startGame();


//function will go through the userguesses and match with the answers
function checkAnswer() {
	// body...
	if ($(this).attr("data") === userAnswer) {
		console.log(true);
		counterCorrect++;
		document.getElementById("afterSubmit").style.visibility = "visible";
		document.getElementById("correctAnswer").innerHTML = "You got " + counterCorrect + " correct";
		questionIndex++;
		console.log("also true")
		gameOver();
		startGame();
	}
	else {
		counterWrong++;
		document.getElementById("afterSubmit").style.visibility = "visible";
		document.getElementById("wrongAnswer").innerHTML = "You got " + counterWrong + " wrong";
		questionIndex++;
		gameOver();
		startGame();
	}

	if (counterCorrect > 2) {
		messages
	}

};

function stop() {
	// body...
	clearInterval(intervalId);
}
run();