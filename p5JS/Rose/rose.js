var slider;
function setup(){
	createCanvas(400,400);
	slider = createSlider(1, 10, 4, 0.1);
}

function draw(){
	background(51);
	translate(width/2, height/2);
	k = slider.value();
	beginShape();
		stroke(255);
		noFill();
		strokeWeight(1);
		for (var i = 0; i < TWO_PI * 10; i+=0.02) {
			var r = 200 * cos(k * a);
			var x = r * cos(a);
			var y = r * sin(a);
			vertex(x,y);
		}
	endShape(CLOSE);
}