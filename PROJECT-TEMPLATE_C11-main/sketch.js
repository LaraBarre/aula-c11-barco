var barco, barcoimg;
var mar, marimg;

function preload(){
 
  marimg=loadImage("sea.png");
  barcoimg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(4168,1667);

  mar=createSprite(400,400,800,60);
  mar.addImage("mar", marimg);
  mar.scale=1;

  barco=createSprite(200,200,100,100);
  barco.addAnimation("barco", barcoimg);
  barco.scale=0.5;
  barco.y=500
}

function draw() {

  background("blue");
  drawSprites();

 
}
