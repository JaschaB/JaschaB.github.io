var img;

var song;

var lines;

var frankenstein;

var counter = 0;

var output;

var typed = '';

var pos = 200; 

//var value = 0;



function preload() {

   song = loadSound('tastatur.mp3');

   
  img = loadImage('Imposter_boy.png');
  
  lines = loadStrings('Imposter.txt');
  
  
}

function setup() {
  createCanvas(windowWidth,700);
  

  background("#dbdada");
  
  frameRate (15);
  
  frankenstein = lines.join('<br/>');

  output = createP('');
}


function draw() {
  
  image(img, 25, windowHeight, 250, 50);
  
  
  typed += frankenstein.charAt(counter);
 
  output.html(typed)

  if (counter < frankenstein.length-1) {
    counter++;
    
//STAPEL:  

  fill("white");
  stroke("black");
  rect(1075,pos-200,129, 84);
  
  fill("white");
  stroke("black");
  rect(25,pos-200,129, 84);
  
 fill("white");
 stroke("black");
 rect(255,pos-200, 120, 84);
  
 fill("white");
 stroke("black");
 rect(475, pos-200, 120, 84);
 
 fill("white");
 stroke("black");
 rect(675, pos-200, 120, 84);
 
 fill("white");
 stroke("black");
 rect(875, pos-200, 120, 84);
 
  }

}
function mouseWheel(event) {
  print(event.delta);
  pos -= event.delta;
}  
 //function mouseMoved() { 
 // if ( MouseY > Height/2) { 
 //  value=volume+;

function draw() {
  fill(value);
  rect(25, 25, 50, 50);


}