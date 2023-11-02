

let inc = 0.1;
let scl= 10;
let cols,rows;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(width / scl);
  rows = floor(height / scl);
}

function draw() {
  background(220);
  let yoff = 0;
  for(let y = 0; y <rows; y++){
    let xoff = 0;
    for (let x = 0; x<cols; x++){
      let index = (x + y*width)*4;
      let r = noise(xoff,yoff)*255;
      xoff += inc;
      fill(r);
      rect(x*scl,y*scl,scl,scl);
    }
    yoff += inc;
  }

}
