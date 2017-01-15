var video;

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320,240);
}

function draw() {
  background(255);
  image(video, 0, 0, 320, 240);
  filter(THRESHOLD);
 
}