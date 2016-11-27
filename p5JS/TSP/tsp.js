var miasta = [];
var liczbaMiast = 8;
var kolejnoscDystans;
var zloteUstawienie;
var kolejnosc = [];
var iloscMozliwosci;
var ile = 0;

function setup() {
	createCanvas(600, 900);
	for (var i = 0; i < liczbaMiast; i++) {
		var v = createVector(random(width), random(height / 2))
		miasta[i] = v;
		kolejnosc[i] = i;
	}

	var d = policzDystans(miasta, kolejnosc);
	kolejnoscDystans = d;
	zloteUstawienie = kolejnosc.slice();

	iloscMozliwosci = silnia(liczbaMiast);
}

function draw() {
	background(0);
	//Rysowanie kółeczek
	fill(255, 0, 255);
	for (var i = 0; i < miasta.length; i++) {
		ellipse(miasta[i].x, miasta[i].y, 8, 8);
	}

	//Rysowanie Najlepszego ustawienia
	stroke(255, 0, 255);
	strokeWeight(4);
	noFill();
	beginShape();
	for (var i = 0; i < kolejnosc.length; i++) {
		var n = zloteUstawienie[i];
		vertex(miasta[n].x, miasta[n].y);
	}
	endShape();

	//Rysowanie połączeń między nimi
	translate(0, height / 2);
	stroke(255);
	strokeWeight(1);
	noFill();
	beginShape();
	for (var i = 0; i < kolejnosc.length; i++) {
		var n = kolejnosc[i];
		vertex(miasta[n].x, miasta[n].y);
	}
	endShape();

	//Losowanie miast do zamiany
	// var i = floor(random(miasta.length));
	// var j = floor(random(miasta.length));
	// swap(miasta, i, j);

	var d = policzDystans(miasta, kolejnosc);
	if (d < kolejnoscDystans) {
		kolejnoscDystans = d;
		zloteUstawienie = kolejnosc.slice();
	}

	textSize(32);
  	fill(255);
  	var procent = 100 * (ile / iloscMozliwosci);
  	text(nf(procent,0,2) + "% przeszukano", 20, height / 2 - 50);
  	console.log(iloscMozliwosci);

  	nastepnaKolejnosc();

}

//Funkcja zmieniajaca kolejnosc, Zmienia miejscami dwa miasta
function swap(a, i, j){
	var temp = a[i];
	a[i] = a[j];
	a[j] = temp;
}

function policzDystans(punkty, kolejnosc) {
	var sum = 0;
	for (var i = 0; i < kolejnosc.length - 1; i++) {
		var miastoAIndex = kolejnosc[i];
		var miastoA = punkty[miastoAIndex];
		var miastoBIndex = kolejnosc[i + 1];
		var miastoB = punkty[miastoBIndex];
		var d = dist(miastoA.x, miastoA.y,miastoB.x, miastoB.y)
		sum += d;
	}
	return sum;
}

//TEN KOD ZAJUMAŁEM Z INTERNETU
function nastepnaKolejnosc() {
	ile++;
  	//Krok 1
	//https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering
	var maxX = -1;
	for (var i = 0; i < kolejnosc.length - 1; i++) {
		if (kolejnosc[i] < kolejnosc[i + 1]) {
			maxX = i;
		}
	}
	if (maxX == -1) {
		noLoop();
		console.log('Koniec');
	}

	//Krok 2
	var maxY = -1;
	for (var j = 0; j < kolejnosc.length; j++) {
		if(kolejnosc[maxX] < kolejnosc[j]) {
			maxY = j;
		}
	} 

	//Krok 3
	swap(kolejnosc, maxX, maxY);

	//Krok 4
	var kolejnoscOstateczny = kolejnosc.splice(maxX + 1);
	kolejnoscOstateczny.reverse();
	kolejnosc = kolejnosc.concat(kolejnoscOstateczny)
}

function silnia(n) {
	if(n == 1){
		return 1;
	} else {
		return n * silnia(n - 1);
	}
}