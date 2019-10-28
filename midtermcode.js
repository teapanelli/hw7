var bubbles = [];

var goalX;
var goalY;
var goalR;
var mySound;

var mySound
//download @ https://www.youtube.com/watch?v=UouLFQGuIUU
function preload() {
  soundFormats("mp3");
  mySound = loadSound("chime.mp3");
}

function setup() {
  createCanvas(600, 600);

  for (var i = 0; i < 100; i++) {
    var bubble = {
      x: random(width),
      y: random(height),
      radius: 100
    };
    bubbles.push(bubble); //is this affecting the goal object??
  }
 goalX = random(0, width)
    goalY = random(0, height)
    goalR = 40}

function draw() {
  background(255);
 fill(205, 92, 92);
    noStroke(0);
    ellipse(goalX, goalY, goalR, goalR)

    d = dist(mouseX, mouseY, goalX, goalY)

    if (d < goalR) {
      if (mouseIsPressed) {
        goalX = random(0, width)
        goalY = random(0, height)
        
        
if (mouseIsPressed){
  mySound.play();}
      }
    }
  for (var i = 0; i < bubbles.length; i++) {
    var bubble = bubbles[i];

    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {

      fill(255, 200, 200, 20);
    } else {
      noStroke();
      fill(220, 220, 255);
    }

    ellipse(bubble.x, bubble.y, bubble.radius * 2);
    bubble.x += random(-1, 1);
    bubble.y += random(-1, 1);

   

   
  }
}
