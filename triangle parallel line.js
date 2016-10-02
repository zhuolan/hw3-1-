function setup() {
  createCanvas(500,500);
  background(255);
for (var i=0; i<250; i=i+10){
  line(250-i,i,250+i,i)}
for (var u=0; u<250; u=u+10){
  line (u,250+u,500-u,250+u)
}
}