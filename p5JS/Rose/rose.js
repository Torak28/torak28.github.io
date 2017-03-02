var sliderN;
var sliderD;
function setup(){
	createCanvas(400,400); 
	sliderN = createSlider(1, 10, 5);
	sliderD = createSlider(1, 10, 5);
}

function draw(){
	var d = sliderD.value();
	var n = sliderN.value();
	var k = n / d;
	background(51);
	translate(width/2, height/2);
	beginShape();
		stroke(255);
		noFill();
		strokeWeight(1);
		for (var i = 0; i < TWO_PI * d; i+=0.02) {
			var r = 200 * cos(k * i);
			var x = r * cos(i);
			var y = r * sin(i);
			vertex(x,y);
		}
	endShape(CLOSE);
}