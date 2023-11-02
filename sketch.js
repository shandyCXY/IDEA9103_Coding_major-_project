let inc = 0.1;
let scl = 10; //segmet size
let cols, rows;
let skyColorsFrom = [];
let skyColorsTo = [];
let skyColorsLerpA = [];
let skyColorsLerpB = [];
let skyColorsLerpC = [];
let skyColorsLerpD = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  //Define the color arrays for lerpColor().

  //The colors are: [0]navy blue, [1]sea green, [2]bright yellow, [3]orange red, [4]dark red
  skyColorsFrom.push(
    color(62, 84, 143),
    color(125, 155, 147),
    color(255, 214, 101),
    color(193, 113, 67),
    color(205, 74, 74)
  );

  //The colors are: [0]sea green, [1]bright yellow, [2]orange red
  skyColorsTo.push(
    color(125, 155, 147),
    color(255, 214, 101),
    color(193, 113, 67),
    color(205, 74, 74)
  );

  //Build four arrays: skyColorLerp A/B/C/D to contain the lerpColor() results between the
  //skyColorsFrom[] and skyColorsTo[]

  //A
  for (let k = 1; k < 9; k++) {
    skyColorsLerpA.push(lerpColor(skyColorsFrom[0], skyColorsTo[0], k* 0.11));
  }

  //B
  for (let k = 1; k < 9; k++) {
    skyColorsLerpB.push(lerpColor(skyColorsFrom[1], skyColorsTo[1], k * 0.11));
  }

  //C
  for (let k = 1; k < 9; k++) {
    skyColorsLerpC.push(lerpColor(skyColorsFrom[2], skyColorsTo[2], k * 0.11));
  }

  //D
  for (let k = 1; k < 9; k++) {
    skyColorsLerpD.push(lerpColor(skyColorsFrom[3], skyColorsTo[3], k* 0.11));
  }
}

function draw() {
  background(0);
  randomSeed(45);
  translate(0, windowHeight / 2);
  let yoff = 0;
  for (let y = 0; y < rows / 2; y++) {
    let xoff= 0;
    for (let x = 0; x < cols; x++) {
      let index = (x + y * width) * 3;
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

    if (y < 9) {
      fill(skyColorsLerpA[round(y)]);
      yoff += inc;
    } else if (9 < y < 18) {
      fill(skyColorsLerpB[round(y) % 9]);
      yoff += inc;
    } else if (18 < y < 27) {
      fill(skyColorsLerpC[round(y) % 9]);
      yoff += inc;
    } else {
      fill(skyColorsLerpD[round(y) % 9]);
      yoff += inc;
    
    }
    console.log(skyColorsLerpA[round(y)]);
  }

  //reference web:https://www.youtube.com/watch?v=BjoM9oKOAKY&t=3s.
}
