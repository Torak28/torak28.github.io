var tab = [0, 1, 2, 3, 4, 5, 6 ,7, 8]

function setup() {
	createCanvas(400,300);
}

function draw(){
	//Krok 1
	//https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering
	var maxX = -1;
	for (var i = 0; i < tab.length - 1; i++) {
		if (tab[i] < tab[i + 1]) {
			maxX = i;
		}
	}
	if (maxX == -1) {
		noLoop();
		console.log('Koniec');
	}

	//Krok 2
	var maxY = -1;
	for (var j = 0; j < tab.length; j++) {
		if(tab[maxX] < tab[j]) {
			maxY = j;
		}
	} 

	//Krok 3
	swap(tab, maxX, maxY);

	//Krok 4
	var tabOstateczny = tab.splice(maxX + 1);
	tabOstateczny.reverse();
	tab = tab.concat(tabOstateczny)

	background(0);
	textSize(64);
	var string = '';
	for (var i = 0; i < tab.length; i++) {
		string += tab[i];
	}
	fill(255);
	text(string, 20, height / 2);

}

function swap(a, i, j) {
	var temp = a[i];
	a[i] = a[j];
	a[j] = temp;
}