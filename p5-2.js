///<reference path="lib/p5.global-mode.d.ts" />

class Shape {
  constructor() {
    this.x = random(600);
    this.y = random(400);
    this.vx = random(-5, 5);
    this.vy = random(-5, 5);
    this.color = random(255);
  }
  draw() {
    fill(this.color);
    if (this.x < 0 || this.x > 600) {
      this.vx = -this.vx;
    }
    if (this.y < 0 || this.y > 400) {
      this.vy = -this.vy;
    }
  }
}

class Circle extends Shape{
  draw() {
    super.draw();
    circle((this.x += this.vx), (this.y += this.vy), 40);
  }
}
class Square extends Shape{
draw() {
  super.draw();
  square((this.x += this.vx), (this.y += this.vy), 40);
}

let shapes = [];
var setup = function () {
  createCanvas(600, 400);
  for (let i = 0; i < 500; i++) {
    shapes.push(new Circle());
    shapes.push(new Square());
  }
};

var draw = function () {
  background(100);
  for (let index = 0; index < shapes.length; index++) {
    const shape = shapes[index];
    shape.draw();
  }
};
