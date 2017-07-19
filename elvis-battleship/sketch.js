// var arr = [[0,0,0,0,0,0,0,0],
// [1,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0],
// ];
var arr = [[],[],[],[],[],[],[],[]];
var recX = 0;
var recY = 0;

function setup(){
    createCanvas(800, 800);
    background(10);
}
var value = 153;

function draw(){
   for(var j = 0; j < 8; j++){ 
        for(var i = 0; i < 8; i++){ 
            fill(value);
            rect(recX, recY, 100, 100);
            // arr[j][i].push(recX, recY);
            recX += 100;
        }
        recX = 0;
        recY += 100;
    }
    // console.log(arr);
}
function mouseClicked(){
    console.log("Clicked");
    if (value == 153) {

    value = 255;
  } else {
    value = 0;
  }
}