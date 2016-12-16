var rodzinaKarasi;

function setup() {
	createCanvas(400, 300)
	rodzinaKarasi = new populacjaKarasi();
}

function draw() {
	background(0);
	rodzinaKarasi.run();
}

function populacjaKarasi() {
	this.karasie = [];
	this.wielkosc = 25;

	for (var i = 0; i < this.wielkosc; i++) {
		this.karasie[i] = new Karas();
	}

	this.run = function() {
		for (var i = 0; i < this.wielkosc; i++) {
			this.karasie[i].update();
			this.karasie[i].show();
		}
	}
}

function Karas() {
	this.pol = createVector(width/2, height);
	this.szybkosc = p5.Vector.random2D();
	this.przyspieszenie = createVector();

	this.applyForce = function(force){
		this.przyspieszenie.add(force);
	}

	this.update = function() {
		this.szybkosc.add(this.przyspieszenie);
		this.pol.add(this.szybkosc);
		this.przyspieszenie.mult(0);
	}

	this.show = function() {
		push()
		noStroke();
		fill(255,150);
		translate(this.pol.x, this.pol.y);
		rotate(this.szybkosc.heading());
		rectMode(CENTER);
		rect(0,0,25,5);
		pop()
	}
}