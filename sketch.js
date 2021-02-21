var wizard , prince , demon , fireball , stone
var StoneG
var gameState="play"


function preload (){
  wizardImg=loadImage("wizard.png")
  demonImg=loadImage("demon.png")
  princeImg=loadImage("prince.png")
  fireImg=loadImage("fireball.png")
  stoneImg=loadImage("stone.png")
  backImg=loadImage("forest.jpg")
  restartImg=loadImage("restart.png")
}

function setup(){
  createCanvas(600,600)
 
  backGround=createSprite(300,300,600,600)
  backGround.addImage(backImg)
 
  backGround.scale=1.5

  wizard=createSprite(500,200, 10 ,10)
  wizard.addImage(wizardImg)
  wizard.scale=0.2

  restart=createSprite(300,300,10,10)
  restart.addImage(restartImg)
  restart.scale=0.2

 // demon= createSprite(300,300 , 10 ,10)
 // demon.addImage(demonImg)
 // demon.scale=0.2

 // prince=createSprite(300 , 400 , 10 , 10)
 // prince.addImage(princeImg)
  //prince.scale=0.1

  StoneG=new Group();
}

function draw (){
  background(0,0,0)
  
  if(gameState==="play"){

    restart.visible=false

  backGround.velocityX=4

  if(backGround.x>600){
backGround.x=60 }

if (keyDown(UP_ARROW)){
  wizard.y=wizard.y-2
}

if(keyDown(DOWN_ARROW)){
  wizard.y=wizard.y+2
}

if(wizard.isTouching(StoneG)){
gameState="end"
}



  }
  else{
    if(gameState=="end"){
 restart.visible=true
StoneG.destroyEach()
backGround.velocityX=0

 if(mousePressedOver(restart)){
   gameState="play"
   restart.visible=false
 }
    }
  }

spawnStones();

  drawSprites();
}

function spawnStones(){
  if(frameCount%100===0){
  stone=createSprite(0,0,10,10)
  stone.addImage(stoneImg)
  stone.scale=0.08
  stone.velocityX=3
  stone.y=Math.round(random(300,500))
  StoneG.add(stone)
}
}
