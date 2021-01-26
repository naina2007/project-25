
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world, paper;
var binImg,bin;

function preload(){
    binImg = loadImage("dustbingreen.png");
}



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	bin = createSprite(1200,545,30,20);
    bin.addImage(binImg);
    bin.scale = 0.82;

	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper= new Paper(50,300,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paper.display();

  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {
		x:  52,
		y: -60
	  });
	}
  }
  
  
  
  
  

