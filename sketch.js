var ghostImg, ghost;
var climberImg,climber,climbersGroup;
var doorImg,doorsGroup,door;
var towerImg,tower;
var invisibleBlock,invisibleBlockGroup;          

function preload(){
  
towerImg = loadImage("tower.png");
climberImg = loadImage('climber.png') 
doorImg = loadImage("door.png")
ghostImg = loadImage('ghost-standing.png') 
}

function setup(){
createCanvas(600,600);
tower = createSprite(300,300)
tower.addImage("tower",towerImg)  ;
tower.velocityY= 1;
  
 doorsGroup = new Group();
climbersGroup = new Group();
ghost=createSprite(200,200,30,30) ; 
ghost.addImage("ghost",ghostImg) ;
ghost.scale=0.3;
   
  invisibleBlockGroup=new Group();
  
  
  }


function draw(){
 background("black");  
  if(tower.y>400){
    tower.y=300
  }
  if(keyDown("left")){
    ghost.x = ghost.x-3
  }
  if(keyDown("right")){
    ghost.x = ghost.x+3
  }
if(keyDown("space")){
    ghost.velocityY = -3
}  
  ghost.velocityY=ghost.velocityY+0.5
  
  
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY=0
  }
  if (invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
  }
  
  
  spawnDoors();
drawSprites();
}
function spawnDoors(){
  
  if(frameCount%200===0){
    door = createSprite(200,-50)
   door.addImage(doorImg) ;
    door.x= Math.round(random(100,500));
    door.velocityY=1
    doorsGroup.add(door)
    
    climber = createSprite(200,10);
    climber.addImage(climberImg);
    climber.x = door.x
    climber.velocityY=1
    climbersGroup.add(climber)
    
 ghost.depth=door.depth 
  ghost.depth+=1
    
   invisibleBlock = createSprite(200,15) ;
    invisibleBlock.width=climber.width;
    invisibleBlock.height = 2;
    invisibleBlock.x=door.x;
    invisibleBlock.velocityY=1;
    invisibleBlock.debug = true;
    invisibleBlockGroup.add(invisibleBlock);
    
    
    
    
  }
  
}




