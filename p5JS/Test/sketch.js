var input, button, greeting;

function setup() {
  createCanvas(710, 400);

  input = createInput();
  input.position(20, 65);

  button = createButton('klik');
  button.position(170, 65);
  button.mousePressed(greet(input.value()));

  greeting = createElement('h2', 'Wpisz tu cos');
  greeting.position(20, 5);

  textAlign(CENTER)
  textSize(50);
}

function greet(s) {
  var name = s;

  for (var i=0; i<50; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
}