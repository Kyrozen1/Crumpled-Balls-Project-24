
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, paper, dustbin1, dustbin2, dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 690, 900, 40);
	paper = new Paper(110, 560, 30);
	dustbin1 = new Dustbin(560, 595, 15, 150);
	dustbin2 = new Dustbin(690, 595, 15, 150);
	dustbin3 = new Dustbin(625, 662, 116, 15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	//Give the ball foece
	Matter.Body.applyForce(paper.body, paper.position,{x:145,y:-145});
	   
	 }
   }