///<reference path="lib/p5.global-mode.d.ts" />

var setup = function () {
  createCanvas(600, 400);
};

let shape = {
  x: 0,
  y: 180,
  vx: 2,
  draw: function () {
    fill(72, 74, 72);
    rect((this.x += this.vx), (this.y), 100, 75);
    fill("black");
    circle((this.x += this.vx), (this.y) + 75, 35);
    circle((this.x += this.vx) + 95, (this.y) + 75, 35);
    if (this.x < 0 || this.x > 600) {
      this.x = 0
    }
  },
};
var draw = function () {
  background(10, 136, 209);
  strokeWeight(0);
  fill(255, 255, 255, 100);
  rect(75, 25, 100, 75); 
  rect(75, 45, 100, 75); 
  rect(85, 35, 100, 75); 
  rect(350, 25, 100, 75); 
  rect(350, 45, 100, 75); 
  rect(370, 35, 100, 75);
  rect(200, 55, 75, 75);
  rect(210, 65, 125, 75);
  rect(230, 55, 100, 75);
  fill("green");
  rect(0, 200, 600, 200);
  fill(54, 52, 51);
  rect(0, 250, 600, 10); 
  rect(0, 270, 600, 10); 
  shape.draw();
};
