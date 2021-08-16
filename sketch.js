
function preload(){
  //pre-load images
  
  trackImg=loadImage("path.png")
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  track=createSprite(200,200,50,400)
  track.addImage(trackImg)
  track.scale=1.30
 
  runner=createSprite(200,320,40,40)
  runner.addAnimation("running" ,runnerImg)
  runner.scale=0.07

  wall1=createSprite(20,200,20,400)
  wall1.visible=false
  
  wall2=createSprite(380,200,20,400)
  wall2.visible=false
}

function draw() {
  background(0);
 
  track.velocityY=5
  if(track.y>650){
    track.y=height/2
  }

  runner.x=mouseX
  
  runner.collide(wall1)

  runner.collide(wall2)

  drawSprites();
}
