// GLOBAL VARIABLES
// --------------------------------------------------------------------------------------------------
var timeLeft = 60
var timer;
var numberRight;
var numberWrong;



// FUNCTIONS
// --------------------------------------------------------------------------------------------------
//Starts game, unhides questions, hides start button, starts timer
function startGame(){
    numberRight = 0;
    numberWrong = 0;
    timeLeft = 60;
    $("#start-phrase").hide();
    $("#quiz-questions").show();
    $(".results").hide();
    runTimer();
}

//Runs countdown function every 1000 miliseconds
function runTimer(){
    timer = setInterval(countdown,1000);
}

//Hides questions before START is clicked
function hideQuestions(){
    $("#quiz-questions").hide();
    $(".results").hide();

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

    clearTimeout(timer);
    
    var q1 = $("#question-1").serializeArray()[0].value;
    var q2 = $("#question-2").serializeArray()[0].value;
    var q3 = $("#question-3").serializeArray()[0].value;
    var q4 = $("#question-4").serializeArray()[0].value;
    var q5 = $("#question-5").serializeArray()[0].value;

    if (q1 == "Nirvana"){
        numberRight++
    }
    else {
        numberWrong++
    }
    if (q2 == "Third Eye Blind"){
        numberRight++
    }
    else {
        numberWrong++
    }
    if (q3 == "Alice In Chains"){
        numberRight++
    }
    else {
        numberWrong++
    }
    if (q4 == "Stone Temple Pilots"){
        numberRight++
    }
    else {
        numberWrong++
    }
    if (q5 == "Eddie Vedder"){
        numberRight++
    }
    else {
        numberWrong++
    }

    $("#right").html(numberRight);
    $("#wrong").html(numberWrong);
    console.log(numberRight, numberWrong);
    $(".results").show();

}



// MAIN OPERATION
// --------------------------------------------------------------------------------------------------

hideQuestions();

$("#start-button").on("click", function(){
    startGame();
})

$("#submit-button").on("click", function(){
    $("#quiz-questions").hide();
    finishGame();
})

$("#reset-button").on("click", function(){
    $("#question-1").trigger("reset");
    $("#question-2").trigger("reset");
    $("#question-3").trigger("reset");
    $("#question-4").trigger("reset");
    $("#question-5").trigger("reset");
    startGame();
})

