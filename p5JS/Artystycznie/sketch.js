var video;
var vScale = 1;

var particles = [];

var slider, slider2, slider3;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  slider = createSlider(0,255,127);
  slider.position(1350, 30);
  slider2 = createSlider(1,25,4);
  slider2.position(1350, 100);
  slider3 = createSlider(2,50,32);
  slider3.position(1350, 170);
  for (var i = 0; i < 400; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
  fill(0, 102, 153);
  text("ALA MA KOTA A KOT MA ALE XD", 1350, 250);
}

function draw() {
  //background(51);
  video.loadPixels();
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}
