function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(195,0,184);
  // add your drawing code here ...
  fill(155,0,0)
  noStroke();
  ellipse(width/2, height/2, 50); // head

  fill ("pink");
  ellipse(width/2 - 15, height/2, - 10, 10); // left eye
  ellipse(width/2 + 15, height/2, - 10, 10); // right eye

  fill ("black"); 
  strokeWeight (5);
  triangle(width/2 - 5, height/2, width/2 + 5, height/2, width/2, height/2 + 6); // nose
  stroke (0); 

  ellipse(width/2 - 0, height/2 + 14 , 6); // mouth

}

