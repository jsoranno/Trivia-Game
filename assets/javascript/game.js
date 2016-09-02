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
var game = {
	
	time:25,


// FUNCTION DECLARATIONS
// ==============================================================================		
    start: function(){
	    counter = setTimeout(game.count, 1000);
	},
	count: function(){
        game.time--;
        currentTime = game.timeConverter(game.time);
        $("#timer").html(currentTime);
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
}; //game
// FUNCTION CALLS
	// ==============================================================================
$(document).ready(function(){ 
	$('#timer').ready(game.start); 
});

// $(document).ready(function(){
// 	console.log("window has loaded");
// 	console.log("Timer has started");
// });

