var prompt = require('prompt-sync')();
var array = [["charmander", "fire", 70, 30, 40, false],
["piplup", "water", 35, 10, 15],
["darkrai", "dark", 120, 70, 60, false],
["charizard", "fire", 70, 500, 20, true],
["celebi", "grass", 60, 40, 20, true],
["snorelax", "normal", 60, 50, 40, false]
];
function mclovin(){
    for (var i = 0; i < array.length; i++){
        console.log("#" + (i+1), array[i][0], "> Type:", array[i][1], "> HP:", array[i][2], "> ATK:" , array[i][3],"> DEF:", array[i][4], "> Legend:" ,array[i][5]);
    }
}

// mclovin();

// bonusss
function newPokemon(){
    var newArr = [];
    var newPoke = prompt("Whats the new pokemon's name? ");
    newArr.push(newPoke);
    var newType = prompt("Whats the pokemon's type? ");
    newArr.push(newType);
    var newHp = prompt("Whats the pokemon's Hp? ");
    newArr.push(newHp);
    var newAtk = prompt("Whats the pokemon's attack? ");
    newArr.push(newAtk);
    var newDef = prompt("Whats the pokemon's defence? ");
    newArr.push(newDef);
    var newLegn = prompt("Is the pokemon legendary? true or false? ");
    newArr.push(newLegn);
    array.push(newArr);
    console.log(array);
}
// newPokemon();

function checkPoke(){
    var daPoke = prompt("What pokemon would you like to see? ");
    for (var i = 0; i < array.length; i++){
        if (daPoke == array[i][0]){}
            console.log("This pokemon is already listed");
        }
    }
}

checkPoke();