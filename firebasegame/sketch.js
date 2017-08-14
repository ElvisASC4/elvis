// //Set database object
// var database = firebase.database().ref();

// //button executes this function
// function updateDB(){
//     var newInitials = $("#initials").val();
//     var newStats = $("#stats").val();
//     // console.log(thename + " : " + message);

//     //Update database here
//     var value = {initials: newInitials, stats: newStats};
//     database.push(value);
// }

// database.on("child_added", function(rowData){
//     console.log(rowData.val());
//     var initials = rowData.val().initials;
//     var stats = rowData.val().stats;
    // var html = "<p>" + name + ": " + message + "</p>"
    // $(".allMessages").append(html);
// })

var wins = 0;
var losses = 0;
var ties = 0;

var username = prompt("What are your initials?");

$(document).ready(function(){
    $("body").append('<p id="initials"> Your initials: ' + username + '</p>');
    $('body').append('<div><h3>STATS</h3><p id="stats"></p></div>');
});

function updateStats(){
    $('#stats').text("Wins: " + wins + " Losses: " + losses + " Ties: " + ties)
}

var arr = ["rock", "paper", "scissor"];
var player;
function rock(){
   $("body").append("<h2> You picked rock! </h2>");
   player = "rock";
   compChoose();

}

function scissor(){
   $("body").append("<h2> You picked scissor! </h2>");
   player = "scissor";
   compChoose();
}

function paper(){
   $("body").append("<h2> You picked paper! </h2>");
    player = "paper";
   compChoose();

}

function compChoose(){
   var num = 3
   var compChoose = rand(num);
   var compChoice = arr[compChoose]
   $("body").append("<h2> Computer has chosen " + compChoice + "!</h2>");
   if(compChoice == "paper"){
       outcome(compChoice, player);
   }
   if(compChoice == "rock"){
       outcome(compChoice, player);
   }
   if(compChoice == "scissor"){
       outcome(compChoice, player);
   }
}

function outcome(comp, player){
   if(comp == "scissor" && player == "paper"){
        $("body").append("<h2> Computer Won! </h2>");
        losses = losses + 1
        updateStats();
   }
   if(comp == "scissor" && player == "rock"){
        $("body").append("<h2> You Won! </h2>");
        wins = wins + 1;
        updateStats();
   }
   if(comp == "scissor" && player == "scissor"){
        $("body").append("<h2> It's A Tie! </h2>");
        ties = ties + 1
        updateStats();
   }
   //
   if(comp == "paper" && player == "paper"){
        $("body").append("<h2> It's A Tie! </h2>");
        ties = ties + 1
        updateStats();
   }
   if(comp == "paper" && player == "rock"){
        $("body").append("<h2> Computer Won! </h2>");
        losses = losses + 1
        updateStats();
   }
    if(comp == "paper" && player == "scissor"){
        $("body").append("<h2> You Won! </h2>");
        wins = wins + 1;
        updateStats();
   }
   //
   if(comp == "rock" && player == "paper"){
        $("body").append("<h2> You Won! </h2>");
        wins = wins + 1
        updateStats();
   }
   if(comp == "rock" && player == "rock"){
        $("body").append("<h2> It's A Tie! </h2>");
        ties = ties + 1
        updateStats();
   }
   if(comp == "rock" && player == "scissor"){
        $("body").append("<h2> You Won! </h2>");
        wins = wins + 1;
        updateStats();
   }
   //
   $("<h2>").css("font-size", "250%");

}

function rand(num){
   // random integer
   var randDec = Math.random() * num;
   var randInt = Math.floor(randDec);
   return randInt;


}