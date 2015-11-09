//function setup() {
//  createCanvas(640, 480);
//}

//function draw() {
//  if (mouseIsPressed) {
//    fill(0);
//  } else {
//    fill("#f7eee3");
//    noStroke()
//  }
//   &#9775;(mouseX, mouseY, 100, 30);
//  fill("#f7eee3");
//}


var img;

var lines;

var frankenstein;

var counter = 0;

var output;

var typed = '';

var pos = 200; 



function preload() {
  img = loadImage('Imposter_boy.png');
  
  lines = loadStrings('Imposter.txt');
}

function setup() {
  createCanvas(windowWidth,800);
  background("#021851");
  
  
  frameRate (16);
  
  frankenstein = lines.join('<br/>');

  output = createP('');
}


function draw() {
  

  
  image(img, 25, 8220, 250, 50);
  
  typed += frankenstein.charAt(counter);
 
  output.html(typed)

  if (counter < frankenstein.length-1) {
    counter++;
    
//STAPEL:  
  fill("white");
  stroke("black");
  rect(1075,pos+600,129, 65);
  strokeWeight(0.1);
  
  fill("white");
  stroke("black");
  rect(0,pos+550,129, 65);
  
 fill("white");
 stroke("black");
 rect(580, pos+1040, 120, 65);
  
 fill("white");
 stroke("black");
 rect(395, pos+810, 120, 65);
 
 fill("white");
 stroke("black");
 rect(40, pos+905, 120, 65);
 
 fill("white")
 rect(875,pos+665,64);
 
 fill("white");
 stroke("black");
 rect(675, pos+705, 120, 65);
 
 fill("white");
 stroke("black");
 rect(255,pos+630, 120, 65);
 
 fill("white");
 stroke("black");
 rect(775, pos+855, 120, 65);
  }

}
function mouseWheel(event) {
  print(event.delta);
  pos += event.delta;
}