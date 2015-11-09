var img;
var c;
function preload() {  // preload() runs once
  img = loadImage('Imposter_boy.png');
}

function setup() {  // setup() waits until preload() is done
  img.loadPixels();
  // get color of middle pixel
  c = img.get(img.width/2, img.height/2);
}

function draw() {
  background(c);
  image(img, 25, 25, 50, 50);
}
