function Waz() {
  this.x = 0;
  this.y = 0;
  this.szybkoscX = 1;
  this.szybkoscY = 0;
  this.dlugosc = 0;
  this.ogon = [];

  this.kierunek = function(x, y){
	this.szybkoscX = x;
	this.szybkoscY = y;
  }

  this.update = function() {
  	if(this.dlugosc === this.ogon.length) {
		for (var i = 0; i < this.ogon.length - 1; i++) {
			this.ogon[i] = this.ogon[i+1];
		}
	}
	this.ogon[this.dlugosc - 1] = createVector(this.x,this.y);

	this.x = this.x + this.szybkoscX * skala;
	this.y = this.y + this.szybkoscY * skala;

	this.x = constrain(this.x, 0 ,width - skala);
	this.y = constrain(this.y, 0, height - skala);
  }

  this.show = function() {
	fill(255);
	
	for (var i = 0; i < this.ogon.length; i++) {
		rect(this.ogon[i].x, this.ogon[i].y, skala, skala);
	}
	rect(this.x, this.y, skala, skala);
  }

  this.zjedz = function(pos) {
	var d = dist(this.x, this.y, pos.x, pos.y);
	if (d<1){
		return true;
	}else{
		return false;
	}
  }
}