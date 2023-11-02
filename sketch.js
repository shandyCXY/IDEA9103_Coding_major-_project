let inc = 0.1; //each segment vector change
let scl = 10; //segmet size
let cols, rows;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
}

function draw() {
  background(0);
  randomSeed(45);
  translate(0, windowHeight / 2);
  let yoff = 0;
  for (let y = 0; y < rows / 2; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = (x + y * width) * 3;
      let angle = noise(xoff, yoff) * TWO_PI;
      let v = p5.Vector.fromAngle(angle *(-0.2));
      xoff += inc;
      //rect(x*scl,y*scl,scl,scl);
      noStroke();

      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      rect(0, 0, 23, 4);
      pop();
    }
    colorMode(HSB);
    
    if (y <30) {
      fill(255-2*y,y+234,y+23*y);
      
    } 
    else{
      fill(134+2*y,12+4*y, 344- y,300);
    }
    yoff += inc;
  }

  //reference web:https://www.youtube.com/watch?v=BjoM9oKOAKY&t=3s.
}
