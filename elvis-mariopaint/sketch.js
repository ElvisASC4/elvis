function setup(){
  createCanvas(800, 800);
  background(153);
}

function mouseDragged() {
  ellipse(mouseX, mouseY, random(10, 50), random(10,50));
  fill(random(50, 250), random(50, 250), random(50, 250));
  return false;
}
function draw() {
  if (keyIsPressed === true) {
    clear();
    background(153);
  }
}