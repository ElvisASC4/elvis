function setup(){
    createCanvas(800, 800);
    background(153);
}

var x = 350;
var y = 700;
var enemyX = 200;
var enemyY = 200;
var shotY = y;
var shotX = 350;

//Alien Positions
var xPos1 = 100;
var xPos2 = 200;
var xPos3 = 300;
var xPos4 = 400;
var xPos5 = 500;

//Alien Speed
var AlienSpeed = 3;


var w = 4;
var w1 = 4;
var w2 = 4;
var w3 = 4;
var w4 = 4;

function draw(){
    if(keyIsDown(LEFT_ARROW)){
        x -= 20;
        shotX -= 20;
    }

    if(keyIsDown(RIGHT_ARROW)){
        x += 20;
        shotX += 20;
    }

    background(153);
    fill(142, 9, 34);
    rect(x,y,50,50);
    fill(244, 66, 92);
    rect(shotX + 20,shotY + 20,10,10);   
    fill(104, 4, 87);
    if (x > 800 - 25){
        x = 20;
    } else if (x < 10 ){
        x = 750;
    }


    enemyX = 200;
    if(keyCode == 32){
        shotY -= 20;

    }

    if(shotY < 2){
        shotY = y;
    }

    if (xPos1<0 + 35 || xPos1>800 - 35) w = -w;
    xPos1 += w;
    if (xPos2<0 + 35|| xPos2>800 - 35) w1 = -w1;
    xPos2 += w1;
    if (xPos3<0 + 35|| xPos3>800 - 35) w2 = -w2
    xPos3 += w2;
    if (xPos4<0 + 35|| xPos4>800 - 35) w3 = -w3
    xPos4 += w3;
    if (xPos5<0 + 35|| xPos5>800 - 35) w4 = -w4
    xPos5 += w4;

    ellipse(xPos1,100,70,70);//Alien
    ellipse(xPos2,100,70,70);//Alien
    ellipse(xPos3,100,70,70);//Alien
    ellipse(xPos4,100,70,70);//Alien
    ellipse(xPos5,100,70,70);//Alien
}

