function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	// place your drawing code here
	stroke("black");
	fill("red"); //(255,0,0) oder ("red") oder ("#3affdc") geht auch als Farbangabe
	//noFill();
	//noStroke();
	ellipse(width/2,height/2,50,100);
	
	stroke("black")
	strokeWeight(10);
	rect(10,100,100,200);
	
	stroke("black")
	strokeWeight(10);
	triangle(80,50,120,20,100,80); //Nummern beziehen sich im Uhrzeigersinn auf die Eckpunkte
	
	stroke("grey")
	line(10,5,40,200); //Anfangs und Endpunkt Koordinaten
	
	stroke("black")
	point(200,200);
	
	fill("violet")
	quad(10,10,108,100,56,150,20,150);
	
	noFill();
    stroke(255, 102, 0);
    curve(5, 26, 5, 26, 73, 24, 73, 61);
    stroke(0);
    curve(5, 26, 73, 24, 73, 61, 15, 65);
    stroke(255, 102, 0);
    curve(73, 24, 73, 61, 15, 65, 15, 65);
	
	
    
}

