var video;

var vScale = 12;

function setup() {
  createCanvas(160, 120);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(160,120);
  //video.size(width/vScale, height/vScale);
}

function draw() {
  background(255);
  //image(video, 0, 0, 320, 240);
  //filter(DILATE);
  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (x + y * video.width)*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];
  
      var bright = (r+g+b)/3;
      fill(bright);
      rect(x*vScale,y*vScale,vScale,vScale);
    }
  }
 
}