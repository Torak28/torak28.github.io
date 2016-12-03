function Waz() {
  this.x = 0;
  this.y = 0;
  this.szybkoscX = 1;
  this.szybkoscY = 0;

  this.kierunek = function(x, y){
  	this.szybkoscX = x;
  	this.szybkoscY = y;
  }

  this.update = function() {
	this.x = this.x + this.szybkoscX * skala;
	this.y = this.y + this.szybkoscY * skala;

	this.x = constrain(this.x, 0 ,width - skala);
	this.y = constrain(this.y, 0, height - skala);
  }

  this.show = function() {
    fill(255);
    rect(this.x, this.y, skala, skala);
  }
}