var video;

var vScale = 16;

function setup() {
  createCanvas(320, 240);
  //pixelDensity(10);
  video = createCapture(VIDEO);
  video.size(320,240);
  //video.size(width/vScale, height/vScale);
}

function draw() {
  background(51);
  image(video, 0, 0, 320, 240);
  filter(DILATE);
  //video.loadPixels();
  //loadPixels();
  //for (var y = 0; y < video.height; y++) {
  //  for (var x = 0; x < video.width; x++) {
  //    var index = (video.width - x + 1 + (y * video.width))*4;
  //    var r = video.pixels[index+0];
  //    var g = video.pixels[index+1];
  //    var b = video.pixels[index+2];
  //
  //    var bright = (r+g+b)/3;
  //
  //    var w = map(bright, 0, 255, 0, vScale);
  //
  //    noStroke();
  //    fill(255);
  //    rectMode(CENTER);
  //    rect(x*vScale, y*vScale, w, w);
  //
  //  }
  //}
 
}