

//var img;
//function preload() {}

function setup() {
 createCanvas(windowWidth, windowHeight);
 frameRate (25); //(60)>60 Frames per second
}

function draw() {
	// place your drawing code here
	
	
var rotateDirection = 'clockwise';


var rX = rotationX + 180;
var pRX = pRotationX + 180;

if ((rX - pRX > 0 && rX - pRX < 270)|| rX - pRX < -270){
  rotateDirection = 'clockwise';
} else if (rX - pRX < 0 || rX - pRX > 270){
  rotateDirection = 'counter-clockwise';
}
	
	
background("#d3aa7a");
	//background("#8e9877");

noFill();
stroke("black")
	ellipseMode(CENTER);
	steps = 385;
	for (i = 0; i <= steps; i++) {
  	t = i / steps;
  	x = curvePoint(635, 935, 973, 813, t);
  	y = curvePoint(116, 816, 0, 151, t);
  	ellipse(mouseX, y, 55, 65);
	}
	
	stroke("black")
	fill("black");
	strokeWeight(1);
	rect(870,0,10,1000);
	
	//image(img, -100, 0, 1000, 2000);


	noFill();
	fill (255);
	ellipseMode(CENTER);
	steps = 45;
	for (i = 0; i <= steps; i++) {
  	t = i / steps;
  	x = curvePoint(75, 5, 873, 163, t);
  	y = curvePoint(126, 136, 24, 561, t);
  	ellipse(x,y, 55, 35);
	}
  	
  
	
	stroke("#d0b391");;
	fill("#d0b391");
	ellipseMode(CENTER);
	steps = 70;
	for (i = 0; i <= steps; i++) {
  	t = i / steps;
  	x = curvePoint(110, 875, 150, 213, t);
  	y = curvePoint(910, 646, 40, 61, t);
  	ellipse(x, y, 85, 35);
  	
  	
	}
	
	stroke("black");
	fill("#cfb08c");
	strokeWeight(0.3);
	ellipseMode(CENTER);
	steps = 870;
	for (i = 0; i <= steps; i++) {
  	t = i / steps;
  	x = curvePoint(110, 375, 10, 13, t);
  	y = curvePoint(10, 46, 740, 61, t);
  	ellipse(x, y, 5, 5);
  	
  	
	}
	
	
	
	
	
	
	stroke("black");;
	fill("#cfb08c");
	strokeWeight(0.3);
	ellipseMode(CENTER);
	steps = 870;
	for (i = 0; i <= steps; i++) {
  	t = i / steps;
  	x = curvePoint(10, 375, 10, 13, t);
  	y = curvePoint(10, 14, 40, 61, t);
  	ellipse(x, y, 5, 5);
	}
	
	stroke("black");;
	fill("#cfb08c");
	strokeWeight(0.3);
	ellipseMode(CENTER);
	steps = 870;
	for (i = 0; i <= steps; i++) {
  	t = i / steps;
  	x = curvePoint(10, 375, 10, 13, t);
  	y = curvePoint(10, 14, 40, 61, t);
  	ellipse(x, y, 5, 5);
	}
	
	stroke("black");;
	fill("#cfb08c");
	strokeWeight(0.3);
	ellipseMode(CENTER);
	steps = 870;
	for (i = 0; i <= steps; i++) {
  	t = i / steps;
  	x = curvePoint(10, 335, 10, 13, t);
  	y = curvePoint(10, 324, 40, 61, t);
  	rect(x, y, 5, 5);
	}
	
	
	stroke("black");
	strokeWeight(1);
	line(460,200,475,100);
	
	stroke("black");
	strokeWeight(1);
	line(500,80,550,5);
	
	stroke("black");
	strokeWeight(1);
	line(470,90,410,250);
	
	stroke("black");
	strokeWeight(1);
	line(490,120,520,200);
	

	
	
	c = color (10, 15, 210);  // Define color 'c'
	fill(c);  // Use color variable 'c' as fill color
	strokeWeight(1);
	line(60,30,250,900);	
	strokeWeight(1);
	rect(65, 20, 135, 60);  // Draw left rectangle

	greenValue = green(c);  // Get green in 'c'
	println(greenValue);  // Print "75.0"
	fill(0, greenValue, 0);  // Use 'greenValue' in new fill
	rect(50, 20, 35, 60);  // Draw right rectangle
	
	stroke("black");
	fill("#d9b89f"); //(255,0,0) oder ("red") oder ("#3affdc") geht auch als Farbangabe
	//noFill();
	noStroke();
	ellipse(width/8,height/3,380,100);
	
	stroke("black");
	strokeWeight(1);
	line(90,80,250,900);
	
	
	stroke("#d2d3a7")
	fill("#d2d3a7");
	strokeWeight(10);
	rect(530,120,80,20);
	
		stroke("#d0b391")
		fill("#d3d3bd");
		strokeWeight(5);
		rect(530,120,80,5);
	
		stroke("black")
		fill("#c4ad91");
		strokeWeight(0.1);
		rect(630,320,50,70);
		
		stroke("black")
		fill("#c5c3c0");
		strokeWeight(0.1);
		rect(630,300,50,30);
		
		stroke("black")
		fill("#c4ad91");
		strokeWeight(0.1);
		rect(600,320,10,70);
		
		stroke("black")
		fill("#c5c3c0");
		strokeWeight(0.1);
		rect(600,300,10,30);
		
		stroke("black")
		fill("#c4ad91");
		strokeWeight(0.1);
		rect(550,310,10,70);
		
		stroke("black")
		fill("#c5c3c0");
		strokeWeight(0.1);
		rect(550,310,10,30);
	
	
	
	//grünerstrich
	stroke("#8e9877")
	strokeWeight(10);
	fill("#d2d3a7");
	line(0,10,250,900); //Anfangs und Endpunkt Koordinaten

    stroke("black")
	strokeWeight(1);
	fill("#d2d3a7");
	line(400,270,250,900);
	
	stroke("black")
	strokeWeight(1);
	fill("#d2d3a7");
	line(500,770,580,590);
	
	stroke("black")
	fill("black");
	strokeWeight(1);
	rect(70,480,100,10);
	
	noFill();
	curve(85, 96, 73, 24, 773, 161, 15, 65);
	steps = 18;
	for (i = 0; i <= steps; i++) {
	t = i / steps;
  	x = curvePoint(10, 73, 773, 15, t);
  	y = curvePoint(96, 24, 161, 65, t);
  	tx = curveTangent(10, 73, 773, 15, t);
  	ty = curveTangent(96, 24, 461, 65, t);
  	a = atan2(ty, tx);
  	a -= PI/2.0;
	 line(x, y, cos(a)*78 + x, sin(a)*27 + y);
	 

	ellipseMode(CENTER);
	steps = 135;
	for (i = 0; i <= steps; i++) {
  	t = i / steps;
  	x = curvePoint(635, 935, 973, 813, t);
  	y = curvePoint(116, 816, 0, 151, t);
  	ellipse(mouseX, y, 355, 365);
	}
	

  	
	
	

		
	

	
	
 
}
	
}

