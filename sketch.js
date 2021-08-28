var boy, boy_running;
var path, pathImage, invisiblepath, invisiblepath2;
var coin, coinImage;
var coin2, coinImage2;
var coin3, coinImage3;

function preload(){
  boy_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png");
  coinImage = loadImage("coin.png")
  coinImage2 = loadImage("coin.png")
  coinImage3 = loadImage("coin.png")
}


function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite(200,200,20,20);
  path.addImage(pathImage);
  path.scale = 1
  path.velocityY = 10
  path.y = 20;
 
  invisiblepath = createSprite(360,200,10,400)
  invisiblepath.visible = false;

  invisiblepath2 = createSprite(60,200,10,400)
 invisiblepath2.visible = false;

 coin = createSprite(110,110,20,20);
 coin.addImage(coinImage)
 coin.scale = 0.3
 coin.velocityY = 10
 coin.y = 110

 coin3 = createSprite(285,50,20,20);
 coin3.addImage(coinImage2)
 coin3.scale = 0.3
 coin3.velocityY = 10
 coin3.y = 50
 
 coin2 = createSprite(200,200,20,20);
 coin2.addImage(coinImage3)
 coin2.scale = 0.3
 coin2.velocityY = 10
 coin2.y = 200
 
boy = createSprite(200,360,25,25);
  boy.addAnimation("running", boy_running)
  boy.scale = 0.06

 
  }
  
  
  function draw() {
    background("green");
  
    if (path.y>400) {
      path.y = path.width/2
    }

if (keyDown("right")) {
  boy.x =boy.x+20
}
   
if (keyDown("left")) {
  boy.x =boy.x-20
}
   
if (keyDown("up")) {
  boy.y =boy.y-20
}

if (keyDown("down")) {
  boy.y =boy.y+20
}

if (coin.y>400) {
  coin.y = coin.width/2
}

if (coin2.y>400) {
  coin2.y = coin.width/2
}

if (coin3.y>400) {
  coin3.y = coin.width/2
}


















boy.collide(invisiblepath)
boy.collide(invisiblepath2)
drawSprites()

}
















  