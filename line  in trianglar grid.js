function setup() {
  createCanvas(500,500)
  background(255)
}

function draw() {
   for (var i=0; i<500; i=i+13){
     line(250,0,i,500)
     
   }
}