function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(195,0,184);
  // add your drawing code here ...
  fill(155,0,0)
  ellipse(width/2, height/2, 50); // head
  ellipse(width/2 - 20, height/2, - 10, 10); // left eye
  ellipse(width/2 + 20, height/2, - 10, 10); // right eye
  line(width/2 - 15, height/2, - 30, height/2); // left ear
  line(width/2 + 15, height/2, + 30, height/2); // left ear
  triangle(width/2 - 5, height/2, width/2 + 5, height/2, width/2, height/2 + 8); // nose
}
}
