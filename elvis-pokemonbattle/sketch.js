var input; 
function setup(){
    createCanvas(800, 800);
    // background(img);

    input = createInput();      // Create input box
    input.position(20, 65);     // Set x,y position of input box

    button = createButton('submit');                // Create button with text 'submit'
    button.position(input.x + input.width, 65);     // Set x,y position of submit button
    button.mousePressed(doSomething);               // Do something when button pressed 
    
      //poke 2
    textSize(32);
    text("darkrai", 370, 640);
    //poke 1     
    textSize(32);
    text("HP:", 260, 120); // top
    text("HP:", 20, 620); // bottom
    
    text("pikachu", 610, 140);
       //health bar
    rect(20,630,poke1Hp,30);

    fill(5, 86, 89);
    rect(360,650,100,100); // bottom

}

var poke1Hp = 300;
var poke2Hp = 300;


function draw(){
    //  // pokemon
    // health bar
    rect(260,130,poke2Hp,30); // top
    fill(232, 216, 44);
    rect(600,150,100,100); // top
    var value = 0;
    if (keyIsPressed === true) {
    fill(255, 0, 25);
  } else {
    fill(255);
  }
}
function doSomething() { // Get input value
    var attk = input.value(); 
    console.log(attk);          // DO ANYTHING - For example, console.log input value
    var newHp = poke2Hp - attk;
    console.log(newHp);
    fill(252, 22, 95);
    rect(260,150,newHp,30);

    input.value('');            // Make input box blank again
}

