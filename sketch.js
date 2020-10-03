
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ball2,ball3,ball4,ball5,ground,roof;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball1=new ball(200,600,100);
	ball2=new ball(301,600,100);
	ball3=new ball(401,600,100);
	ball4=new ball(501,600,100);
	ball5=new ball(601,600,100);
	roof=new Roof(400,50,700,50);
	//chain =new Chain(ground.body,ball1.body);
	//rope1=new rope(ball1.body,roof.body,-ballDiameter*2, 0)
	//rope2=new rope(ball2.body,roof.body,-ballDiameter*1, 0)
	//rope3=new rope(ball3.body,roof.body,0, 0)
	//rope4=new rope(ball4.body,roof.body,-ballDiameter*1, 0)
	//rope5=new rope(ball5.body,roof.body,-ballDiameter*2, 0)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof.display();
  //rope1.display();
  //rope2.display();
 // rope3.display();
 // rope4.display();
  //rope5.display();
  //chain.display();
}



