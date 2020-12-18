
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,350,1200,20);
	box1 = new Box(1000,333,200,20);
	box2 = new Box(1100,295,20,100);
	box3 = new Box(900,295,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
 
}



