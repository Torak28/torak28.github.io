var krople = []
var song;

function preload() {
	song = loadSound('assets/rain.mp3');
}

function setup() {
	createCanvas(640,360);
	song.play();
	for (var i = 0; i < 500; i++) {
		krople[i] = new Kropla();
	}
}

function draw() {
	background(230, 230, 250);
	for (var i = 0; i < krople.length; i++) {
		krople[i].spadek();
		krople[i].show();
	}
}