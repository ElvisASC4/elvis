var prompt = require('prompt-sync')();
var mashArray = ["Volcano", "Bond Collective", "Outside", "Hades crib"];
var firstQuestion = [2, 5];
var secondQuestion = ["Kirby", "jigglypuff", "Mario"];

function battle(){
    var strikes = prompt("How many times will you strike? ");
    firstQuestion.push(strikes);
    var fighter = prompt("Who will you fight? ");
    secondQuestion.push(fighter);
    console.log(firstQuestion);
    console.log(secondQuestion);
}
function result(){
    battle();
    var location = rand(4);
    var hits = rand(2);
    var character = rand(2);
    console.log("You fought " + secondQuestion[character] + " in the " + mashArray[location] + " and hit them " + firstQuestion[hits] + " times. Too bad. Mewtwo wins!");
}
function rand(num){
    var randDec = Math.random() * num;
    var randInt = Math.floor(randDec);
    console.log(randInt);
    return randInt;
}
result();