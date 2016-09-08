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
	    if (game.time < 0) {
			game.results();
			clearInterval(counter);
			//result page shows
		}
	    //set timeout here?
	},
	stop: function() {
		var currentTime = game.timeConverter(game.time);
		if (game.time < 0) {
			game.results();
			clearInterval(currentTime);
			//result page shows
		}
		// else{
		// 	clearInterval();
		// }
		},
	count: function(){
        game.time--;
        currentTime = game.timeConverter(game.time);
        $("#timer").html("<h3>" + currentTime + "</h3>");
        //console.log(currentTime);
        if (game.time < 0) {
			game.results();
			clearInterval(currentTime);
		}
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
		//right answer for first question
		$("#a1").click(function() {
			console.log("Clicked a1");
			$("#a1").data('clicked', true);
			winCounter++;
			alert("Correct!");
			game.nextQuestion();
				// if(alert(r)){
				// nextQuestion();
				// } figure out how to load the next question -- timeout?
		});//click
		//wrong answer for first question
//JUST ADDED IF ELSE. CHECK IF WORKS		
		$("#a2, #a3, #a4").click(function() {
			if(jQuery("#a1").data('clicked')){
				game.nextQuestion();
			}
			else{
				alert("WRONG!");
				lossCounter++;
				console.log("clicked anything wrong");
				game.nextQuestion();
			}
		});//end click
		
		//and something to show the current index instead of q1
	},//end displayfirstquestion

	nextQuestion: function(){
		$("#a1").data('clicked', null);
		$("#question").html("<h2>" + game.trivia.q2.question + "</h2>");
		$("#a1").html("<p id='a1'>" + game.trivia.q2.a1 + "</p>");
		$("#a2").html("<p id='a2'>" + game.trivia.q2.a2 + "</p>");
		$("#a3").html("<p id='a3'>" + game.trivia.q2.a3 + "</p>");
		$("#a4").html("<p id='a4'>" + game.trivia.q2.a4 + "</p>");
		console.log("nextquestion");
		//right answer for first question
		$("#a3").click(function() {
			console.log("Clicked a3");
			$("#a3").data('clicked', true);
			// nextQuestion ();
			winCounter++;
			alert("Correct!");
			game.thirdQuestion();
				// if(alert(r)){
				// nextQuestion();
				// } figure out how to load the next question -- timeout?
		});// end click
		//wrong answer for first question
		$("#a1, #a2, #a4").click(function() {
			alert("WRONG!");
				// if(r){
				// 	nextQuestion();
				// }
			lossCounter++;
			console.log("clicked anything wrong");
			game.thirdQuestion();
		});//end click
	 }, //end of thirdQuestion

	thirdQuestion: function(){
		$("#a3").data('clicked', null);
		$("#question").html("<h2>" + game.trivia.q3.question + "</h2>");
		$("#a1").html("<p id='a1'>" + game.trivia.q3.a1 + "</p>");
		$("#a2").html("<p id='a2'>" + game.trivia.q3.a2 + "</p>");
		$("#a3").html("<p id='a3'>" + game.trivia.q3.a3 + "</p>");
		$("#a4").html("<p id='a4'>" + game.trivia.q3.a4 + "</p>");
		console.log("thirdquestion");
		//right answer for first question
		$("#a2").click(function() {
			console.log("Clicked a2");
			$("#a2").data('clicked', true);
			// nextQuestion ();
			winCounter++;
			alert("Correct!");
				// if(alert(r)){
				// nextQuestion();
				// } figure out how to load the next question -- timeout?
		});// end click
		//wrong answer for first question
		$("#a1, #a3, #a4").click(function() {
			alert("WRONG!");
				// if(r){
				// 	nextQuestion();
				// }
			lossCounter++;
			console.log("clicked anything wrong");
		});//end click
	 }, //end of thirdQuestion

	 lastQuestion: function(){
		$("#a2").data('clicked', null);
		$("#question").html("<h2>" + game.trivia.q4.question + "</h2>");
		$("#a1").html("<p id='a1'>" + game.trivia.q4.a1 + "</p>");
		$("#a2").html("<p id='a2'>" + game.trivia.q4.a2 + "</p>");
		$("#a3").html("<p id='a3'>" + game.trivia.q4.a3 + "</p>");
		$("#a4").html("<p id='a4'>" + game.trivia.q4.a4 + "</p>");
		console.log("thirdquestion");
		//right answer for first question
		$("#a4").click(function() {
			console.log("Clicked a4");
			$("#a4").data('clicked', true);
			// nextQuestion ();
			winCounter++;
			alert("Correct!");
				// if(alert(r)){
				// nextQuestion();
				// } figure out how to load the next question -- timeout?
		});// end click
		//wrong answer for first question
		$("#a1, #a2, #3").click(function() {
			alert("WRONG!");
				// if(r){
				// 	nextQuestion();
				// }
			lossCounter++;
			console.log("clicked anything wrong");
		});//end click
	 }, //end of thirdQuestion

	results: function(){
		$("#timer").html(null);
		$("#question").html("<h2> Game Over! </h2>");
		$("#a1").html("<p id='a1'> Correct answers: " + winCounter + "</p>");
		$("#a2").html("<p id='a2'> Incorrect answers: " + lossCounter + "</p>");
		$("#a3").html("<p> To play again, refresh page. </p>");
		$("#a4").html(null);
		game.stop();
	},






}; //game
// FUNCTION CALLS
	// ==============================================================================

	$("#timer").on('click', game.start());
	$("#question").on('click', game.displayFirstQuestion());
	

}); // end document ready



