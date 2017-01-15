var ship;
var asteroids = [];
var lasers = [];
var score = 0;

function setup() {
	console.log(score);
	//createCanvas(windowWidth, windowHeight);
	createCanvas(640,360);
	ship = new Ship();
	for (var i = 0; i < 5; i++) {
		asteroids.push(new Asteroid());
	}
}

function draw() {
	console.log(score);
	background(0);
	for (var i = 0; i < asteroids.length; i++) {
		if (ship.hits(asteroids[i])) {
			//console.log('ooops!');
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
					}
					asteroids.splice(j, 1);
					lasers.splice(i, 1);
					break;
				}
			}
		}
	}

	//console.log(lasers.length);

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
	} else if (keyCode == RIGHT_ARROW) {
		ship.setRotation(0.1);
	} else if (keyCode == LEFT_ARROW) {
		ship.setRotation(-0.1);
	} else if (keyCode == UP_ARROW) {
		ship.boosting(true);
	}
}

function HUD() {
	push();
	textSize(30);
	fill(255);
	text("Wynik: " + this.score, width - 250, 30);
	textSize(20);
	text("Pomoc:", 20, height - 80);
	text("Strzałeczki d poruszania,", 20, height - 50);
	text("Spacja do strzelania.", 20, height - 20);
	/*if(this.gameOver) {
		textSize(40);
		fill('green');
		text("Pograna", width/2 - 100, height/2);
		text("Spacją zacznies od nowa", width/2 - 225, height/2 + 50);
	}*/
	pop();
}