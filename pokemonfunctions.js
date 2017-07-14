var firstPokemon = ["piplup", 15, 90];
var secondPokemon = ["darkrai", 40, 120];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var letter = 0;
function randWord(){
    var word = "";
    var length = rand(25);
    for(var i = length; i > 0; i--){
        var letterz = randLetter();
        word += letterz;
    }
    // console.log(word);
    return word;
}

function randSentence(){
    var sentence = "";
    var lenght = rand(7);
    for(var i =lenght; i > 0; i--){
        var wordz = randWord();
        sentence += wordz;
        sentence += " ";
    }
    sentence = sentence.slice(0,sentence.length-1);
    sentence += ".";
    // sentence.chartAt(0).toUpperCase() + string.slice(1);
    //sentence.toString().toUpperCase();
    sentFin = sentence[0].toUpperCase();
    console.log(sentFin);
    // console.log(sentence);
    return sentence;
}

function randLetter(){
    var randDec = Math.random() * 26;
    var randInt = Math.floor(randDec);
    letter = alphabet[randInt];
    // console.log(letter);
    return letter;
}

function rand(num){
    var randDec = Math.random() * num;
    var randInt = Math.floor(randDec);
    // console.log(randInt);
    return randInt;
}

function pokeAttack(firstPokemon, secondPokemon){
    var attack = firstPokemon[1];
    var health = secondPokemon[2];
    var result = health - attack;
    secondPokemon.pop();
    secondPokemon.push(result);
    console.log(secondPokemon);
}
// randLetter();
// randWord();
randSentence();
pokeAttack(firstPokemon, secondPokemon);