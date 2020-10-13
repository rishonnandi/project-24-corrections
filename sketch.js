
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	 createCanvas(1200, 500);
	 engine = Engine.create();
	 world = engine.world;
	
    
   ground = new Ground(600,height,1200,20);
   paperObject=new Paper(200,480,40);
   leftBox=createSprite(960,420,20,120);
   leftBox.shapeColor="red";
   bottomBox=createSprite(870,480,200,20);
   bottomBox.shapeColor="red";
   rightBox=createSprite(780,420,20,120);
   rightBox.shapeColor="red";
	    
}


function draw() {
   background(0);
    Engine.update(engine);
    ground.display();
    paperObject.display();
    leftBox.display();
    rightBox.display();
    bottomBox.display();
    drawSprites();
 }
 

  function keyPressed(){
     if(keyCode===UP_ARROW){
    
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:55,y:-55});

     }

       }


