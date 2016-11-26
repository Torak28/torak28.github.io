var miasta = [];
var liczbaMiast = 10;
var tabDystans;
var zloteUstawienie;

function setup() {
	createCanvas(400, 300);
	for (var i = 0; i < liczbaMiast; i++) {
		var v = createVector(random(width), random(height))
		miasta[i] = v;
	}

	var d = policzDystans(miasta);
	tabDystans = d;
	zloteUstawienie = miasta.slice();
}

function draw() {
	background(0);
	//Rysowanie kółeczek
	fill(255, 0, 255);
	for (var i = 0; i < miasta.length; i++) {
		ellipse(miasta[i].x, miasta[i].y, 8, 8);
	}

	//Rysowanie połączeń między nimi
	stroke(255);
	strokeWeight(1);
	noFill();
	beginShape();
	for (var i = 0; i < miasta.length; i++) {
		vertex(miasta[i].x, miasta[i].y);
	}
	endShape();

	//Rysowanie Najlepszego ustawienia
	stroke(255, 0, 255);
	strokeWeight(2);
	noFill();
	beginShape();
	for (var i = 0; i < miasta.length; i++) {
		vertex(zloteUstawienie[i].x, zloteUstawienie[i].y);
	}
	endShape();

	//Losowanie miast do zamiany
	var i = floor(random(miasta.length));
	var j = floor(random(miasta.length));
	swap(miasta, i, j);

	var d = policzDystans(miasta);
	if (d < tabDystans) {
		tabDystans = d;
		zloteUstawienie = miasta.slice();
		console.log(tabDystans);
	}

}

//Funkcja zmieniajaca kolejnosc, Zmienia miejscami dwa miasta
function swap(a, i, j){
	var temp = a[i];
	a[i] = a[j];
	a[j] = temp;
}

function policzDystans(punkty) {
	var sum = 0;
	for (var i = 0; i < punkty.length - 1; i++) {
		var d = dist(punkty[i].x, punkty[i].y,punkty[i + 1].x, punkty[i + 1].y)
		sum += d;
	}
	return sum;
}