function Kropla() {
	this.x = random(width);
	this.y = random(-500, -50);
	this.z = random(0, 20);
	this.szybkoscY = map(this.z, 0, 20, 4 ,10)
	this.len = map(this.z, 0, 20, 10, 20)
	
	this.spadek = function() {
		this.y = this.y + this.szybkoscY;
		var graw = map(this.z, 0, 20, 0, 0.15);
		this.szybkoscY += graw;
		if (this.y > height) {
			this.y = random(-200, -100);
			this.szybkoscY = map(this.z, 0, 20, 4 ,10)
		}
	}

	this.show = function() {
		var grubosc = map(this.z, 0, 20, 1, 3);
		strokeWeight(grubosc);
		stroke(138, 43, 226);
		line(this.x, this.y, this.x, this.y + 10)
	}
}