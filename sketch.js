var boundary1 = 0;
var boundary2 = 0;
var boundary3 = 0;
var boundary4 = 0;
var topBoundary = 0;
var bottomBoundary = 0;

var counter=0;

var colorArray = ["black","red", "green", "blue", "orange", "purple"];

var buttonSize = 100;
var brushSize = 10;

var currentArea = "";

var brushColor = "black";

function setup() {
  createCanvas(400, 500);
  boundary0 = 0;
  boundary1 = 100;
  boundary2 = 200;
  boundary3 = 300;
  boundary4 = width;
  topBoundary = 400;
  bottomBoundary = height;
}

function draw() {
  //background(255);
  //interface

  fill("green");
  rect(boundary0, topBoundary, buttonSize, buttonSize);
  fill("red");
  rect(boundary1, topBoundary, buttonSize, buttonSize);
  fill("yellow");
  rect(boundary2, topBoundary, buttonSize, buttonSize);
  fill("blue");
  rect(boundary3, topBoundary, buttonSize, buttonSize);

  fill(brushColor);
  ellipse(mouseX, mouseY, brushSize, brushSize);
  console.log(currentArea);
  if (mouseY >= topBoundary && mouseY < bottomBoundary) {
    //console.log("Inside User Interface Area");
    if (mouseX > boundary0 && mouseX < boundary1) {
      //  console.log("area0");
      currentArea = "area0";
    } else if (mouseX > boundary1 && mouseX < boundary2) {
      //  console.log("area1");
      currentArea = "area1";
    } else if (mouseX > boundary2 && mouseX < boundary3) {
      //  console.log("area2");
      currentArea = "area2";
    } else if (mouseX > boundary3 && mouseX < boundary4) {
      //  console.log("area3");
      currentArea = "area3";
    }
  } else {
    currentArea = "";
  }
}

function mousePressed() {
  console.log(currentArea);
  console.log(counter);
  if (currentArea == "area0")  {
    brushColor = colorArray[counter];
    counter++;
     if(counter >= colorArray.length){
    counter = 0;
  }
  }
   else if (currentArea == "area1") {
    brushColor = random(colorArray);
  } else if (currentArea == "area2") {
    brushSize++;
  } else if (currentArea == "area3") {
    //brushSize = brushSize - 1;
    brushSize--;
    if(brushSize < 10){
      brushSize = 10;
    }
  } 
}