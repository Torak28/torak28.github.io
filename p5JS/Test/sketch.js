var input1, input2, input3, input4, input5;
var button1, button2, button3, button4, button5;
var greeting;
var input = [];

function setup() {

  // create canvas
  createCanvas(windowWidth, windowHeight);

  input1 = createInput();
  input1.position(20, 65);
  input2 = createInput();
  input2.position(20, 85);
  input3 = createInput();
  input3.position(20, 105);
  input4 = createInput();
  input4.position(20, 125);
  input5 = createInput();
  input5.position(20, 145);

  button1 = createButton('Klik');
  button1.position(150, 65);
  button1.mousePressed(greet(1));
  button2 = createButton('Klik');
  button2.position(150, 85);
  button2.mousePressed(greet(2));
  button3 = createButton('Klik');
  button3.position(150, 105);
  button3.mousePressed(greet(3));
  button4 = createButton('Klik');
  button4.position(150, 125);
  button4.mousePressed(greet(4));
  button5 = createButton('Klik');
  button5.position(150, 145);
  button5.mousePressed(greet(5));

  greeting = createElement('h2', 'Wpisz tutaj cos :)');
  greeting.position(20, 5);

  textAlign(CENTER)
  textSize(50);
}

function greet(x) {
  if (x == 1){
    var name1 = input1.value();
    greeting.html(name1+'!');
    input1.value('');
    input.push(name1);
    for (var i=0; i<50; i++) {
      push();
      fill(random(255), random(255), random(255));
      translate(random(width), random(height));
      rotate(random(2*PI));
      text(name1, 0, 0);
      pop();
    }
  }
  if (x == 2){
    var name2 = input2.value();
    greeting.html(name2+'!');
    input2.value('');
    input.push(name2);
    for (var i=0; i<50; i++) {
      push();
      fill(random(255), random(255), random(255));
      translate(random(width), random(height));
      rotate(random(2*PI));
      text(name2, 0, 0);
      pop();
    }
  }
  if (x == 3){
    var name3 = input3.value();
    greeting.html(name3+'!');
    input3.value('');
    input.push(name3);
    for (var i=0; i<50; i++) {
      push();
      fill(random(255), random(255), random(255));
      translate(random(width), random(height));
      rotate(random(2*PI));
      text(name3, 0, 0);
      pop();
    }
  }
  if (x == 4){
    var name4 = input4.value();
    greeting.html(name4+'!');
    input4.value('');
    input.push(name4);
    for (var i=0; i<50; i++) {
      push();
      fill(random(255), random(255), random(255));
      translate(random(width), random(height));
      rotate(random(2*PI));
      text(name4, 0, 0);
      pop();
    }
  }
  if (x == 5){
    var name5 = input5.value();
    greeting.html(name5+'!');
    input5.value('');
    input.push(name5);
    for (var i=0; i<50; i++) {
      push();
      fill(random(255), random(255), random(255));
      translate(random(width), random(height));
      rotate(random(2*PI));
      text(name5, 0, 0);
      pop();
    }
  }  
}