function setup() {
  createCanvas(500,500)
  background(255)
}

function draw() {
  for (var i=30; i<500; i=i+15){
    ellipseMode(CENTER);
noFill();
    ellipse(250,250,i,i);
  }
  
}