var rodzina;

function setup() {
	createCanvas(400, 300)
	karas = new Karas();
	rodzina = new rodzinaKarasiow();
}

function draw() {
	background(0);
	rodzinaKarasiow.run();
}

function rodzinaKarasiow() {
	this.karasie = [];
	this.wielkosc = 100;

	for (var i = 0; i < this.wilekosc; i++) {
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
	this.szyb = p5.Vector.random2D();
	this.przys = createVector();

	this.dodajSile = function(sila){
		this.przys.add(sila);
	}

	this.update = function() {
		this.szyb.add(this.przys);
		this.pol.add(this.szyb);
		this.przys.mult(0);
	}

	this.show = function() {
		push()
		noStroke();
		fill(255,150);
		translate(this.pol.x, this.pol.y);
		rotate(this.szyb.heading());
		rectMode(CENTER);
		rect(0,0,25,5);
		pop()
	}
}