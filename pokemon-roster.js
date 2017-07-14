var array = [["charmander", "fire", 70, 30, 40, false],
["piplup", "water", 35, 10, 15],
["darkrai", "dark", 120, 70, 60, false],
["charizard", "fire", 70, 500, 20, true],
["celebi", "grass", 60, 40, 20, true],
["snorelax", "normal", 60, 50, 40, false]
];
function mclovin(){
    var count = 0;
    for (var i = 0; i < 6; i++){
        console.log(array[count]);
        count++;
    }
}

mclovin();