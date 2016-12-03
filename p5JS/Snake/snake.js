var snake;
var img;
var song;
var skala = 27;

function preload() {
  img = loadImage('images/tetris.png');
  song = loadSound('assets/mario.mp3');
}

function setup() {
  createCanvas(600, 600);
  s = new Waz();
  frameRate(10);
}


function draw() {
  image(img, 0, 0);
  song.play();
  s.update();
  s.show();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.kierunek(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.kierunek(0,1);
  } else if (keyCode === RIGHT_ARROW) {
    s.kierunek(1,0);
  } else if (keyCode === LEFT_ARROW) {
    s.kierunek(-1,0);
  }
}