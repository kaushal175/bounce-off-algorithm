var box1
var box2
function setup() {
  createCanvas(800,400);
  box1= createSprite(400, 200, 50, 50);
  box2=createSprite(600,200,60,50);
box1.shapeColor="red";
box2.shapeColor="blue";
box1.velocityX=5;
box2.velocityX=-7
}

function draw() {
  background(255,255,255);  
if(box1.x-box2.x<=box1.width/2+box2.width/2 &&
  box2.x-box1.x<=box1.width/2+box2.width/2 ){
    box1.velocityX=-box1.velocityX;
    box2.velocityX=-box2.velocityX;
    box1.shapeColor="green";
    box2.shapeColor="yellow";
  }
  drawSprites();
}