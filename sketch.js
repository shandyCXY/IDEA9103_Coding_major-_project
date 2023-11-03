let inc = 0.1;
let scl = 6; //segmet size
let cols, rows;
let skyColorsFrom = [];
let skyColorsTo = [];
let skyColorsLerpA = [];
let skyColorsLerpB = [];
let skyColorsLerpC = [];
let skyColorsLerpD = [];

let waterColorsFrom = [];
let waterColorsTo = [];
let waterColorsLerpA = [];
let waterColorsLerpB = [];
let waterColorsLerpC = [];
let waterColorsLerpD = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // cols = floor(windowWidth / scl); // rows = floor(windowHeight / scl);
  cols = windowWidth / scl;
  rows = windowHeight / scl; //Define the color arrays for lerpColor(). //The colors are: [0]navy blue, [1]sea green, [2]bright yellow, [3]orange red, [4]dark red
  waterColorsFrom.push(
    //color(205, 74, 74),
    color(193, 113, 67),
    color(255, 214, 101),
    color(125, 155, 147),
    color(62, 84, 143)
  ); //The colors are: [0]sea green, [1]bright yellow, [2]orange red

  waterColorsTo.push(
    color(205, 74, 74),
    color(193, 113, 67),
    color(255, 214, 101),
    color(125, 155, 147)
  ); //Build four arrays: skyColorLerp A/B/C/D to contain the lerpColor() results between the //skyColorsFrom[] and skyColorsTo[] //A

  for (let k = 1; k < 9; k++) {
    waterColorsLerpA.push(
      lerpColor(waterColorsFrom[0], waterColorsTo[0], k * 0.125)
    );
  } //B

  for (let k = 1; k < 9; k++) {
    waterColorsLerpB.push(
      lerpColor(waterColorsFrom[1], waterColorsTo[1], k * 0.125)
    );
  } //C

  for (let k = 1; k < 9; k++) {
    waterColorsLerpC.push(
      lerpColor(waterColorsFrom[2], waterColorsTo[2], k * 0.125)
    );
  } //D

  for (let k = 1; k < 9; k++) {
    waterColorsLerpD.push(
      lerpColor(waterColorsFrom[3], waterColorsTo[3], k * 0.125)
    );
  }
}

function draw() {
  background(0);
  randomSeed(45);
  translate(0, windowHeight / 2);
  let yoff = 0;
  for (let y = 0; y < rows / 2; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let angle = noise(xoff, yoff) * TWO_PI;
      let v = p5.Vector.fromAngle(angle * -0.2);
      xoff += inc;
      //rect(x*scl,y*scl,scl,scl);
      noStroke();

      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      rect(0, 0, 23, 4);
      pop();
    }
  

    if (y < 8) {
      fill(waterColorsLerpA[y]);
    } else if (y >= 8 && y < 27) {
      fill(waterColorsLerpB[y % 8]);
    } else if (y >= 27 && y <=45) {
      fill(waterColorsLerpC[y % 8]);
    } else {
      fill(waterColorsLerpD[y % 8]);
    }
    yoff += inc;
  } //reference web:https://www.youtube.com/watch?v=BjoM9oKOAKY&t=3s.
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
