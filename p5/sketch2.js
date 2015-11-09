function setup() {
  createCanvas(windowWidth,windowHeight);
  //frameRate (25); //(60)>60 Frames per second
}

var myPosition = 0;

function draw() {
  
  //background("white");
  var bgColor = random(200,255);
  background(0,0,bgColor);
  
  var ellipseWidth  = Math.random() * 100;
  var ellipseHeigth  = Math.random() * 100;
  var ellipseX = random(width);
  var ellipseY = random(height);
  
  
  ellipse(ellipseX,ellipseY,ellipseWidth,ellipseHeight);

  
 var mousePercent = (mouseX/width) * 2;
 ellipse (100,100,100,100);
  
  console.log(mousePercent);
  //background("white"); //damit man die Striche wieder übermalt
  line(pmouseX,pmouseY,mouseX,mouseY);
  myPosition=myPosition +1; //oder myPosition ++
  
  console.log(key);
  if(key == "H"){
    background ("red")
  } else {
    background ("purple")
  }
  
  
  
  //text(key, 33,65);
  
  
  
  
  
}

function windowResize (){
resizeCanvas(windowWidth,windowHeigth); //damit die Funktion "unverändert" im Browserfenster weiterläuft
}


