var karas;

function setup() {
	createCanvas(400, 300)
	karas = new Karas();
}

function draw() {
	background(0);
	karas.update();
	karas.show();
}

function Karas() {
	this.pol = createVector(width/2, height);
	this.szyb = createVector();
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
		translate(this.pol.x, this.pos.y);
		rotate(this.szyb.heading());
		rectMode(CENTER);
		rect(0,0,10,50);
		pop()
	}
}