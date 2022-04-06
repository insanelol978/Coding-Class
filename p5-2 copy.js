///<reference path="lib/p5.global-mode.d.ts" />

let shapes = [];

var setup = function () {
  createCanvas(600, 400);
  for (let i = 0; i < 200; i++) {
    shapes.push(new Rain());
  }
};

let minecart = {
  x: 0,
  y: 180,
  vx: 1,
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
  background(62, 64, 62);
  strokeWeight(0);
  fill(0, 0, 0, 100);
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
  minecart.draw();
  for (let index = 0; index < shapes.length; index++) {
    const shape = shapes[index];
    shape.draw();
  }
};

class Shape {
  constructor() {
    this.x = random(600);
    this.y = random(400);
    this.vx = random(-5, 5);
    this.vy = random(3, 7);
    this.color = random(255);
  }

  draw() {
    fill(this.color);
    if (this.y < 0 || this.y > 400) {
      this.y = 0
    }
  }
}

class Rain extends Shape {
  // Circles get RGB colors!
  color = [12, 62, 110, 175];

  draw() {
    super.draw();
    ellipse((this.x), (this.y += this.vy), 10, 25 );
  }
}