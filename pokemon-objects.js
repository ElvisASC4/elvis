var charmander = {
    "type" : "fire",
    "hp" : 70,
    "attack" : 30,
    "def" : 40,
    "legend" : false
};
var piplup = {
    "type" : "water",
    "hp" : 35,
    "attack" : 10,
    "def" : 15,
    "legend" : false
};
var darkrai = {
    "type" : "dark",
    "hp" : 120,
    "attack" : 70,
    "def" : 30,
    "legend" : true
};
var charizard = {
    "type" : "fire",
    "hp" : 70,
    "attack" : 500,
    "def" : 20,
    "legend" : true
};
var celebi = {
    "type" : "grass",
    "hp" : 60,
    "attack" : 40,
    "def" : 20,
    "legend" : true
};
var snorelax = {
    "type" : "normal",
    "hp" : 60,
    "attack" : 50,
    "def" : 40,
    "legend" : false
};
var pokemonz = [
    charmander,
    piplup,
    darkrai,
    charizard,
    celebi,
    snorelax
];
function printRoster(){
    var lenght = pokemonz.length
    for (var i = 0; i < lenght; i++){
        console.log(pokemonz[i]);
    }
}
function pokemonAttacked(){
    var lenght = pokemonz.length;
    for (var i = 0; i < lenght; i++){
        var newHp = pokemonz[i].hp;
        var result = newHp - 10;
        pokemonz[i].hp = result;
        printRoster();
        console.log(" ");
    }
}
printRoster();
console.log(" ");
pokemonAttacked();