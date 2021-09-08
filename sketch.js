var seaImg;
var shipImg1;
var sea;
var ship;


function preload(){
  seaImg= loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  
}

function setup(){
  createCanvas(400,400);
  background("blue");
  sea=createSprite(400,200)
  sea.addImage(seaImg);
  sea.velocitX=-4
  sea.scale=0.3

  ship=createSprite(170,200,30,30);
  ship.addAnimation("ship",shipImg1);
  ship.scale=0.4

}

function draw() {
  background(0);

  sea.velocitX=-3;

  if(sea.x<0){
    sea.x=sea.width/2
  }
 
  

  drawSprites();
}
