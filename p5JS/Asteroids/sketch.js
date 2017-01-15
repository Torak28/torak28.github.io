var ship;
var asteroids = [];
var lasers = [];
var score = 0;
var stars = []
var speed = 5;
var boom;
var end;
var laser;
var tlo;

function preload() {
	boom = loadSound('assets/boom.wav');
	end = loadSound('assets/end.wav');
	laser = loadSound('assets/laser.wav');
	tlo = loadSound('assets/tlo.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	tlo.loop();
	ship = new Ship();
	for (var i = 0; i < 5; i++) {
		asteroids.push(new Asteroid());
	}
	for (var i = 0; i < 800; i++) {
    	stars[i] = new Star();
  	}
}

function draw() {
	background(0);
  	translate(width / 2, height / 2);
  	for (var i = 0; i < stars.length; i++) {
    	stars[i].update();
    	stars[i].show();
  	}
  	translate( - width / 2,  - height / 2);
	textSize(32);
	textFont("Helvetica");
	var pom1 = random(10, 255);
	var pom2 = random(10, 255);
	var pom3 = random(10, 255);
	colorMode(HSB, 100);
	fill(255);
	text("Punkty: " + score,10,30)
	for (var i = 0; i < asteroids.length; i++) {
		if (ship.hits(asteroids[i])) {
			end.play();
			ship.pos = createVector(width / 2, height / 2);
			score = 0;
			asteroids = [];
			tlo.stop();
			setup();
		}
		asteroids[i].render();
		asteroids[i].update();
		asteroids[i].edges();
	}

	for (var i = lasers.length - 1; i >= 0; i--) {
		lasers[i].render();
		lasers[i].update();
		if (lasers[i].offscreen()) {
			lasers.splice(i, 1);
		} else {
			for (var j = asteroids.length - 1; j >= 0; j--) {
				if (lasers[i].hits(asteroids[j])) {
					if (asteroids[j].r > 10) {
						var newAsteroids = asteroids[j].breakup();
						asteroids = asteroids.concat(newAsteroids);
						score += 10;
						boom.play();
					}
					asteroids.splice(j, 1);
					lasers.splice(i, 1);
					break;
				}
			}
		}
	}

	ship.render();
	ship.turn();
	ship.update();
	ship.edges();


}

function keyReleased() {
	ship.setRotation(0);
	ship.boosting(false);
}

function keyPressed() {
	if (key == ' ') {
		lasers.push(new Laser(ship.pos, ship.heading));
		laser.play();
	} else if (keyCode == RIGHT_ARROW) {
		ship.setRotation(0.1);
	} else if (keyCode == LEFT_ARROW) {
		ship.setRotation(-0.1);
	} else if (keyCode == UP_ARROW) {
		ship.boosting(true);
	}
}