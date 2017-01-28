var input1, input2, input3, input4, input5;
var input = [];
var button1, button2, button3, button4, button5;
var greeting;

function setInput1(){
  return parseInt(document.getElementById("input1").value);
}
function setInput2(){
  return parseInt(document.getElementById("input2").value);
}
function setInput3(){
  return parseInt(document.getElementById("input3").value);
}
function setInput4(){
  return parseInt(document.getElementById("input4").value);
}
function setInput5(){
  return parseInt(document.getElementById("input5").value);
}

function setup() {
  /*input1 = setInput1();
  input2 = setInput2();
  input3 = setInput3();
  input4 = setInput4();
  input5 = setInput5();*/
  background(51);
  createCanvas(710, 400);
}

function greet1() {
  var name = input1;
  input.push(name);
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
  var name = input2;
  input.push(name);
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
  var name = input3;
  input.push(name);
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
  var name = input4;
  input.push(name);
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
  var name = input5;
  input.push(name);
  for (var i=0; i<200; i++) {
    push();
    fill(random(200), 255, 120);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
}