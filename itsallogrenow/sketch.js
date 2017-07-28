var HP = 100;
var gold = 0;
var slain = 0;

function updateStats(){
    $('#stats').text("HP: " + HP + " Gold: " + gold + " Ogres Slain: "+ slain);
}
function attack(){
    if(HP > 0){
        if(Math.random()*100 > gold){
            gold += 10;
            slain++;
            $('#ogres').prepend('<p style="color:black">You Won! + 10 gold!</p>');
        }else{
            gold--;
            HP--;
            $('#ogres').prepend('<p style="color:lightblue">You Lost! -1 gold</p>')
        }
        updateStats();

    }else {
        $('#ogres').prepend("<h1> GAME OVER!</h1>");
    }
}

function setup(){
    // Title
    $("body").append("<h1>Welcome to Ogre Fighter! v.1.0</h1>");
    // stats
    $('body').append('<div><h3>STATS</h3><p id="stats"></p></div>');
    // the button
    $('body').append('<button onclick="attack()">Attack the Ogre!</button>');
    //ogres
    $('body').append('<div id="ogres"></div>');
}
$(document).ready(setup);