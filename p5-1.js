///<reference path="lib/p5.global-mode.d.ts" />

var setup = function () {
  createCanvas(2000, 2000);
};

var draw = function () {
  background(255);

  strokeWeight(5)
  fill(99, 99, 99);
  rect(790, 1, 400)

  fill(99, 99, 99);
  rect(350, 400, 1250)

  fill(99, 99, 99);
  rect(1600, 550, 100, 15);

  fill(99, 99, 99);
  rect(250, 550, 100, 15);

  fill(99, 99, 99);
  rect(600, 1650, 15, 300);

  fill(99, 99, 99);
  rect(1200, 1650, 15, 300);

  fill(99, 99, 99);
  rect(1200, 1950, 150, 15);

  fill(99, 99, 99);
  rect(465, 1950, 150, 15);

  fill(0);
  rect(1700, 475, 15, 100);

  fill(0);
  rect(1700, 475, 100, 15);

  fill(0);
  rect(1782, 463, 5, 10);

  noFill();
  arc(1717, 490, 50, 50, 0, HALF_PI);

  fill(0);
  circle(867, 125, 50);
  fill(212, 13, 39);
  circle(867, 125, 15);
  
  fill(0);
  circle(1133, 125, 50);
  fill(212, 13, 39);
  circle(1133, 125, 15);

  fill(0);
  circle(1000, 1200, 15);

  strokeWeight(10)
  noFill();
  arc(950, 225, 200, 80, 0, HALF_PI);
 
};
// random

// ideas:
// disco floor
// smiley face
