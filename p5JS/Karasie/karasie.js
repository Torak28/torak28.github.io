var rodzinaKarasi;
var dlugoscZycia = 200;
var zycie;
var it = 0;
var cel;

function setup() {
	createCanvas(400, 300)
	rodzinaKarasi = new populacjaKarasi();
	zycie = createP();
	cel = createVector(width/2, 50);
}

function draw() {
	background(0);
	rodzinaKarasi.run();
	zycie.html(it)
	it++;
	if(it == dlugoscZycia) {
		rodzinaKarasi = new populacjaKarasi();
		it = 0;
	}
	ellipse(cel.x, cel.y, 16, 16)
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

function DNA() {
	this.geny = [];
	for(var i = 0; i < dlugoscZycia; i++) {
		this.geny[i] = p5.Vector.random2D();
		this.geny[i].setMag(0.1)
	} 
}

function Karas() {
	this.pol = createVector(width/2, height);
	this.szybkosc = createVector();
	this.przyspieszenie = createVector();
	this.dna = new DNA();

	this.dodajSile = function(force){
		this.przyspieszenie.add(force);
	}

	this.update = function() {
		this.dodajSile(this.dna.geny[it]);
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