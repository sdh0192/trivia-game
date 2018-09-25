// GLOBAL VARIABLES
// --------------------------------------------------------------------------------------------------
var timeLeft = 60
var timer;



// FUNCTIONS
// --------------------------------------------------------------------------------------------------
//Starts game, unhides questions, hides start button, starts timer
function startGame(){
    $("#start-phrase").hide();
    $("#quiz-questions").show();
    runTimer();
}

//Runs countdown function every 1000 miliseconds
function runTimer(){
    timer = setInterval(countdown,1000);
}

//Hides questions before START is clicked
function hideQuestions(){
    $("#quiz-questions").hide();

}

//Delineates counter amount, changes in HTML, and runs finishGame when timer hits 0
function countdown(){
    timeLeft--;
    $("#counter").html(timeLeft);
    if (timeLeft === 0){
        finishGame();
    }
}


function finishGame (){

}



// MAIN OPERATION
// --------------------------------------------------------------------------------------------------

hideQuestions();

$("#start-button").on("click", function(){
    startGame();
})

$("#submit-button").on("click", function(){
    finishGame();
})



//NEED TO CREAT FINISHGAME FUNCTION AND HTML/JQUERY FOR POPULATING RESULTS AND RESTART BUTTON