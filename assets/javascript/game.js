//Window opens and timer starts
//Shows first question and answer set
//User hovers to show answer choice
//On click, checks if user is right or wrong
	//if right, then Correct screen pops up and correct counter++
	//if wrong, show Incorrect screen with correct answer and incorrect counter++
	//wait a few seconds
//New question and answer set shows up
//Once all questions are answered or timer ends, 
	//show Final screen with all correct, incorrect and Play Again button

// VARIABLES
// ==========================================================================
$(document).ready(function(){

var winCounter = 0;
var lossCounter = 0;

var game = {
	
	time:25,

 	trivia: {
 		q1: {question: "Who runs the world?", 
 			a1: "Girls", 
 			a2: "Machines", 
 			a3: "The Nothing", 
 			a4: "Turtles All The Way Down"
 		}, //end q1
		
		q2: {question: "Who is the founder of jQuery?", 
			a1:"Bill Gates", 
			a2:"John Resig", 
			a3:"Mark Zuckerburg", 
			a4:"Steve Jobs"
		}, //end q2

		q3: {question: "Who created Bootstrap?", 
			a1:"Your mom", 
			a2:"Facebook", 
			a3:"Twitter", 
			a4:"Stuart Weitzman"
		}, //end q3
		
		q4: {question: "Who was the first woman programmer?", 
			a1:"Grace Hopper", 
			a2: "Ada Lovelace", 
			a3: "Adele Goldberg", 
			a4:"Karen Petrie"
		}, //end q4
	}, //end of trivia
	
	//this is throwing an error
	// correctq1: game.trivia.q2.a1,
	// correctq2: game.trivia.q2.a2,
	// correctq3: game.trivia.q3.a3,
	// correctq4: game.trivia.q4.a2, 


// FUNCTION DECLARATIONS
// ==============================================================================		
    start: function(){
	    var counter = setInterval(game.count, 1000);
	},
	stop: function() {
		if (game.time === 0) {
			game.results();//result page shows
		}
		else{
			game.start();//nothing
		}
		},
	count: function(){
        game.time--;
        currentTime = game.timeConverter(game.time);
        $("#timer").html("<h3>" + currentTime + "</h3>");
        console.log(currentTime);
    },//end count

	timeConverter: function(t){
	    //takes the current time in seconds and converts it to minutes and seconds (mm:ss).
	    var minutes = Math.floor(t/60);
	    var seconds = t - (minutes * 60);
	    if (seconds < 10){
	        seconds = "0" + seconds;
	    }
	    if (minutes === 0){
	        minutes = "00";
	    } else if (minutes < 10){
	        minutes = "0" + minutes;
	    }
	
	    return minutes + ":" + seconds;
	}, //end timeConverter

	displayFirstQuestion: function(){
		$("#question").html("<h2>" + game.trivia.q1.question + "</h2>");
		$("#a1").html("<p id='a1'>" + game.trivia.q1.a1 + "</p>");
		$("#a2").html("<p id='a2'>" + game.trivia.q1.a2 + "</p>");
		$("#a3").html("<p id='a3'>" + game.trivia.q1.a3 + "</p>");
		$("#a4").html("<p id='a4'>" + game.trivia.q1.a4 + "</p>");
		console.log("firstquestion");
		$("#a1").click(function() {
			console.log("Clicked a1");
			$("#a1").data('clicked', true);
			// nextQuestion ();
			winCounter++;
			alert("Correct!");
		});//click

		$("#a2, #a3, #a4").click(function() {
			alert("WRONG!");
			lossCounter++;
			console.log("clicked anything wrong");
		});//end click

		//and something to show the current index instead of q1
	},
	// userAnswer: function(){
	// 	if(){};

	// }, //end of displayQuestion

	// nextQuestion: function(){
	// 	// $("#question").html(game.trivia.q1"question");
	// 	game.start();
	// }, //end of nextQuestion

	results: function(){
		$("#question").html("<h2> Game Over! </h2>");
		$("#a1").html("<p id='a1'> Correct answers: " + winCounter + "</p>");
		$("#a2").html("<p id='a2'> Incorrect answers: " + lossCounter + "</p>");
		$("#a3").html("<p> 'To play again, refresh page.' </p>");
		$("#a4").html(null);
	},






}; //game
// FUNCTION CALLS
	// ==============================================================================

	$("#timer").on('click', game.start());
	$("#question").on('click', game.displayFirstQuestion());

}); // end document ready



