


function setup() {
  canvas = createCanvas( 500, 500 );
  
}

function draw(){
   
    ellipse(width/2,height/2, 140,140);
    ellipse(width/2,height/2,20,20)

if (mouseIsPressed)
    ellipse(width/2,height/2,20,20);
    ellipse(40,60,20,20);
    ellipse(70,80,20,20);
    ellipse(90,100,20,20);
//  else
  //  rect(25, 25, 50, 50);

  print(mouseIsPressed);


}
