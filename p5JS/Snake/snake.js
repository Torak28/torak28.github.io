var snake;
var img;
var song;
var ding;
var skala = 20;

var jedzonko;

function preload() {
	img = loadImage('images/tetris.png');
	song = loadSound('assets/mario.mp3');
	ding = loadSound('assets/ding.mp3');
}

function setup() {
	createCanvas(600, 600);
	song.play();
	s = new Waz();
	frameRate(10);
	lokacja();
}

function pickLocation() {
  var kolumny = floor(width/skala);
  var wiersze = floor(height/skala);
  jedzonko = createVector(floor(random(kolumny)), floor(random(wiersze)));
  jedzonko.mult(skala);
}

function draw() {
	image(img, 0, 0);
	s.update();
	s.show();

	if(s.zjedz(jedzonko)) {
		ding.play();
		lokacja();
	}

	fill(255,0,100);
	rect(jedzonko.x, jedzonko.y, skala, skala);
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