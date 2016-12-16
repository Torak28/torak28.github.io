var rodzinaKarasi;
var dlugoscZycia = 400;
var zycie;
var it = 0;
var cel;
var iloscKarasi = 25;
var mag = 0.2;
var rx = 100;
var ry = 150
var rw = 200;
var rh = 10;

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
		rodzinaKarasi.obliczFunkcje();
		rodzinaKarasi.selekcja();
		//rodzinaKarasi = new populacjaKarasi();
		it = 0;
	}
	rect(rx, ry, rw, rh)
	ellipse(cel.x, cel.y, 16, 16)
}

function populacjaKarasi() {
	this.karasie = [];
	this.wielkosc = iloscKarasi;
	this.matingpool = [];

	for (var i = 0; i < this.wielkosc; i++) {
		this.karasie[i] = new Karas();
	}

	this.obliczFunkcje = function() {
		var maxDopasowanie = 0;
		for (var i = 0; i < this.wielkosc; i++) {
			this.karasie[i].obliczDopasowanie();
			if(this.karasie[i].dopasowanie > maxDopasowanie) {
				maxDopasowanie = this.karasie[i].dopasowanie;
			}
		}
		//createP(maxDopasowanie);
		for (var i = 0; i < this.wielkosc; i++) {
			this.karasie[i].dopasowanie /= maxDopasowanie;
		}
		this.matingpool = [];
		for (var i = 0; i < this.wielkosc; i++) {
			var n = this.karasie[i].dopasowanie * 100;
			for(var j = 0; j < n; j++) {
				this.matingpool.push(this.karasie[i]);
			}
		}
	}

	this.selekcja = function() {
		var noweKarasie = [];
		for(var i =0; i < this.karasie.length; i++){
			var rodzicA = random(this.matingpool).dna;
			var rodzicB = random(this.matingpool).dna;
			var dziecko = rodzicA.krossover(rodzicB);
			dziecko.mutacja();
			noweKarasie[i] = new Karas(dziecko);
		}
		this.karasie = noweKarasie;
	}

	this.run = function() {
		for (var i = 0; i < this.wielkosc; i++) {
			this.karasie[i].update();
			this.karasie[i].show();
		}
	}
}

function DNA(geny) {
	if (geny){
		this.geny = geny;
	} else {
		this.geny = [];
		for(var i = 0; i < dlugoscZycia; i++) {
			this.geny[i] = p5.Vector.random2D();
			this.geny[i].setMag(mag)
		} 
	}
	
	this.krossover = function(rodzic) {
		var noweDNA = [];
		var srodek = floor(random(this.geny.length))
		for(var i = 0; i < this.geny.length; i++) {
			if(i>srodek){
				noweDNA[i] = this.geny[i];
			}else{
				noweDNA[i] = rodzic.geny[i];
			}
		}
		return new DNA(noweDNA);
	}
	this.mutacja = function() {
		for(var i =0; i < this.geny.length; i++) {
			if(random(1) < 0.01) {
				this.geny[i] = p5.Vector.random2D();
				this.geny[i].setMag(mag);
			}
		}
	}
}

function Karas(dna) {
	this.pol = createVector(width/2, height);
	this.szybkosc = createVector();
	this.przyspieszenie = createVector();
	this.skonczone = false;
	this.smierc = false;
	if(dna){
		this.dna = dna;
	}else{
		this.dna = new DNA();
	}
	this.dopasowanie = 0;

	this.dodajSile = function(force){
		this.przyspieszenie.add(force);
	}

	this.obliczDopasowanie = function() {
		var d = dist(this.pol.x, this.pol.y, cel.x, cel.y);
		this.dopasowanie = map(d, 0, width, width, 0)
		if(this.skonczone){
			this.dopasowanie *= 10;
		}
		if(this.smierc) {
			this.dopasowanie /= 10;
		}

	}

	this.update = function() {
		var d = dist(this.pol.x, this.pol.y, cel.x, cel.y);
		if (d < 7){
			this.skonczone = true;
			this.pol = cel.copy();
		}
		if(this.pol.x > rx && this.pol.x < rx+rw && this.pol.y > ry && this.pol < ry + rh){
			this.smierc = true;
		}
		if (this.pol.x > width || this.pol.x < 0){
			this.smierc = true;
		}
		if (this.pol.y > height || this.pol.y < 0){
			this.smierc = true;
		}

		this.dodajSile(this.dna.geny[it]);
		if(!this.skonczone && !this.smierc){
			this.szybkosc.add(this.przyspieszenie);
			this.pol.add(this.szybkosc);
			this.przyspieszenie.mult(0);
			this.szybkosc.limit(4);
		}
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