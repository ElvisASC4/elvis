function setup(){
    createCanvas(800, 800);
    background(153);
}
var xPos = 400;
var yPos = 400;
var x = 5;
var y = 3;

function draw(){
    // background(153);
    ellipse(xPos, yPos, 50, 50);
    xPos += x;
    yPos += y;
    
   
    if(xPos - 25 < 0 || xPos + 25 > 800){
        x = -x;
    }

    if(yPos - 25 < 0){
        y = -y;
    }   
    fill(244, 66, 92);  
}
function mouseMoved() {
    background(153)
  rect(mouseX, 770, 200, 30);
  fill(244, 66, 92); 
  if(yPos + 25 == 770){
      y = -y;
  }
  return false;
}
