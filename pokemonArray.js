var myPokemonz = ["Celebi","feraligatr", "Darkrai", "piplup","Dragonite"];
var firstToFight = myPokemonz[0];
var secondToFight = myPokemonz[1];

// console.log(firstToFight);

// bonussssssss

myPokemonz.pop();
myPokemonz.push("Dragonnite");
myPokemonz.push("Gyarados");

// console.log(myPokemonz);

// var rosterSize = myPokemonz.length;

// console.log(rosterSize);

// project 2

// for (var i = 0; i < 5; i++){
//     console.log(myPokemonz[i]);
// }

// for(var i = 5; i > 0; i--){
//     console.log(myPokemonz[i]);
// }

// for(var i =  0; i < myPokemonz.length; i++){
//     console.log(myPokemonz[i]);
// }

for(var i = myPokemonz; i >= 5; i--){
    console.log(myPokemonz[i]);
}
console.log("You Can't Play! Not Enough Pokemon");