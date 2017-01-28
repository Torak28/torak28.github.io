var input1, input2, input3, input4, input5;
var input = [];
var button1, button2, button3, button4, button5;
var greeting;

function setup() {
	createCanvas(710, 400);

	input1 = createInput();
	input1.position(20, 65);
	input2 = createInput();
	input2.position(20, 105);
	input3 = createInput();
	input3.position(20, 145);
	input4 = createInput();
	input4.position(20, 185);
	input5 = createInput();
	input5.position(20, 225);

	button1 = createButton('klik');
	button1.position(170, 65);
	button1.mousePressed(greet1);
	button2 = createButton('klik');
	button2.position(170, 105);
	button2.mousePressed(greet2);
	button3 = createButton('klik');
	button3.position(170, 145);
	button3.mousePressed(greet3);
	button4 = createButton('klik');
	button4.position(170, 185);
	button4.mousePressed(greet4);
	button5 = createButton('klik');
	button5.position(170, 225);
	button5.mousePressed(greet5);

	fill(0);
	textSize(50);
	text("Wpisz tu coś :)",20,50)
}

function greet1() {
	var name = input1.value();
	input.push(name);
	input1.value('');
	for (var i=0; i<200; i++) {
		push();
		fill(random(255), 255, 255);
		translate(random(width), random(height));
		rotate(random(2*PI));
		text(name, 0, 0);
		pop();
	}
}
function greet2() {
	var name = input2.value();
	input.push(name);
	input2.value('');
	for (var i=0; i<200; i++) {
		push();
		fill(0, 0, random(255));
		translate(random(width), random(height));
		rotate(random(2*PI));
		text(name, 0, 0);
		pop();
	}
}
function greet3() {
	var name = input3.value();
	input.push(name);
	input3.value('');
	for (var i=0; i<200; i++) {
		push();
		fill(0, random(255), 0);
		translate(random(width), random(height));
		rotate(random(2*PI));
		text(name, 0, 0);
		pop();
	}
}
function greet4() {
	var name = input4.value();
	input.push(name);
	input4.value('');
	for (var i=0; i<200; i++) {
		push();
		fill(random(255), 0, 0);
		translate(random(width), random(height));
		rotate(random(2*PI));
		text(name, 0, 0);
		pop();
	}
}
function greet5() {
	var name = input5.value();
	input.push(name);
	input5.value('');
	for (var i=0; i<200; i++) {
		push();
		fill(random(200), 255, 120);
		translate(random(width), random(height));
		rotate(random(2*PI));
		text(name, 0, 0);
		pop();
	}
}