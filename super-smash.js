var prompt = require('prompt-sync')();
var mashArray = ["Volcano", "Bond Collective", "Outside", "Hades crib"];
var firstQuestion = [2, 5];
var secondQuestion = ["Kirby", "jigglypuff", "Mario"];
var thirdQuestion = ["pikachu", "piplup", "Dwight from the office"];

function battle(){
    var strikes = prompt("How many times will you strike? ");
    firstQuestion.push(strikes);
    var fighter = prompt("Who will you fight? ");
    secondQuestion.push(fighter);
    var pet = prompt("Who is your pet? ");
    thirdQuestion.push(pet);
    // console.log(firstQuestion);
    // console.log(secondQuestion);
}
function result(){
    battle();
    var location = rand(mashArray.length);
    var hits = rand(firstQuestion.length);
    var character = rand(secondQuestion.length);
    var companion = rand(thirdQuestion.length);
    console.log("You fought " + secondQuestion[character] + " with the pet " + thirdQuestion[companion] + " in the " + mashArray[location] + " and hit them " + firstQuestion[hits] + " times. Too bad. Mewtwo wins!");
}
function rand(num){
    var randDec = Math.random() * num;
    var randInt = Math.floor(randDec);
    return randInt;
}

// bonussss
function stop(){
    var stop1 = prompt("Stop? yes or no? ");
    if(stop1 == "yes"){
        return false;
    } else{
        return true;
    }
}
var hey = true;
while(hey == true){
    result();
    var stop2 = stop();
    hey = stop2;

}
// BONUSSSSES COMPLETEXX!