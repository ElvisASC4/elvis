function setup(){
    createCanvas(800, 800);
    background(153);
}
var xPos = 400;
var yPos = 400;
var x = 5;
var y = 3;

function draw(){
    background(153);
    ellipse(xPos, yPos, 50, 50);
    xPos += x;
    yPos += y;
    
   
    if(xPos - 25 < 0 || xPos + 25 > 800){
        x = -x;
    }

    if(yPos - 25 < 0 || yPos  +25 > 800){
        y = -y;
    }   
    fill(244, 66, 92);  
}