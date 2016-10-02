function setup() {

  createCanvas(500, 500);
  background(255);
}

function draw() {
  for (var i = 10; i < 500; i = i + 6) {
    line(i, 10, i, i );
  }
}