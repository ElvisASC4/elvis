function setup(){
    createCanvas(300,300);
    background(225);
    ellipse(50, 50, 80, 80);
    stroke("white");
    strokeWeight(5);
    fill("black");
    arc(width/2, height/2, 200,200, 0, PI, CHORD);
    fill("black");
    arc(width/2, height/2, 200,200, PI, 0, CHORD);
    fill("white");
    ellipse(width/2, height/2, 50);
    fill("black");
    ellipse(width/2, height/2, 25);
    triangle(30, 75, 58, 20, 86, 75);
    triangle(40, 85, 70, 40, 60, 95);


}