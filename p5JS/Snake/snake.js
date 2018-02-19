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
	song.loop();
	s = new Waz();
	frameRate(10);
	lokacja();
}

function lokacja() {
	var kolumny = floor(width/skala);
	var wiersze = floor(height/skala);

	var x = floor(random(kolumny));
	var y = floor(random(wiersze));
	console.log("dlugosc: ", s.dlugosc);
	console.log("X: ", x, "Y:", y);

	var ok = 1;
	if(s.dlugosc > 0){
		do{
			for (var i = 0; i < s.ogon.length; i++) {
				if(x == (s.ogon[i].x / skala)){
					ok = 0;
					break;
				}else if(y == (s.ogon[i].y / skala)){
					ok = 0;
					break;
				}
			}
		}while(ok = 0)
	}

	jedzonko = createVector(x, y);
	jedzonko.mult(skala);
}

function draw() {
	image(img, 0, 0);

	/*
	if(s.dlugosc > 0){
		for (var i = 0; i < s.ogon.length; i++) {
			console.log(i, ": ", s.ogon[i].x, s.ogon[i].y);
		}
	}
	console.log("Jedzienie: ", jedzonko.x, jedzonko.y);
	*/
	
	if(s.zjedz(jedzonko)) {
		ding.play();
		lokacja();
	}
	s.smierc();
	s.update();
	s.show();

	fill(255,0,100);
	rect(jedzonko.x, jedzonko.y, skala, skala);

	textSize(32);
  	fill(255);
  	text("Punkty: " + s.dlugosc, 20, 30);
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