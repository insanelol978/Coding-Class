///<reference path="../lib/p5.global-mode.d.ts" />

let paddleH = 100
let paddleW = 10

let leftX = 0
let leftY = 0

let rightX = 0
let rightY = 0

class Pong {
    constructor() {
      this.leftScore = 0;
      this.rightScore = 0;
  
      this.table = new Table();
      this.leftPaddle = new leftPaddle();
      this.rightPaddle = new rightPaddle();
      this.ball = new Ball();
      this.score = new Score();
    }
    draw() {
      this.table.draw();
      this.leftPaddle.draw();
      this.rightPaddle.draw();
      this.ball.draw();
      this.score.draw();
    }
  }
  class Table {
    draw() {
      background("black");
      let midPoint = windowWidth / 2;
      for (let y = 0; y < windowHeight; y++) {
        fill(50);
        rect(midPoint - 5, y, 10, 20);
        y += 40;
      }
    }
  }
  let scoreL = 0
  let scoreR = 0
  class Score {
    draw() {
      textSize(64);
      fill("white");
      text(scoreL, (windowWidth / 2) -164, 50);
      text(scoreR, (windowWidth / 2) +100, 50);
    }
  }
  class Paddle {
    constructor() {
      this.x = 10;
      this.y = 20;
      this.width = paddleW;
      this.height = paddleH;
    }
    draw() {
      fill("white");
      rect(this.x, this.y, this.width, this.height);
    }
  }
  class leftPaddle extends Paddle {
    x = 40;
    draw() {
      leftX = this.x;
      this.y = windowHeight / 2
      leftY = this.y
      super.draw();
    }
  }
  class rightPaddle extends Paddle {
    x = windowWidth - 50;
    draw() {
      rightX = windowWidth - 50;
      this.y = mouseY;
      rightY = this.y
      super.draw();
    }
  }
  class Ball {
    constructor() {
        (this.x = windowWidth/2),
        (this.y = random(windowHeight)),
        (this.vx = 6),
        (this.vy = 4),
        (this.color = "white");
    }
    draw() {
      fill(this.color);
 
      if (this.y < 0 || this.y > windowHeight) {
        this.vy = -this.vy;
      } 
      if (this.x+10 > rightX) {
        if (this.y > rightY && this.y < rightY+paddleH) {
          this.vx = -this.vx;
        }
      }
      if (this.x < leftX+10) {
        if (this.y > leftY && this.y < leftY+paddleH) {
          this.vx = -this.vx;
        }
      }
      if(this.x < 0) {
        this.x = windowWidth/2
        scoreR++
      }
      if(this.x > windowWidth) {
        this.x = windowWidth/2
        scoreL++
      }
      square(this.x, this.y, 10);
      this.x += this.vx;
      this.y += this.vy;
    }
  }