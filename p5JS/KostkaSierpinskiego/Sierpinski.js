var a = 0;
var sponge = [];
function setup(){
	createCanvas(800,800, WEBGL);
	var b = new Box(0,0,0,450);
	sponge.push(b);

}

function mousePressed(){
	var next = [];
	for (var i = 0; i < sponge.length; i++) {
		var b = sponge[i];
		var newBoxes = b.generate();
		next = next.concat(newBoxes);
	}
	sponge = next;
}

function draw() {
	background(51);
	normalMaterial();
	rotateX(a);
	rotateY(a * 0.4);
	rotateZ(a * 0.1)
	for (var i = 0; i < sponge.length; i++) {
		sponge[i].show();
	}

	a+= 0.01
}