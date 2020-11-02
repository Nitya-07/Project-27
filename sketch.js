
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(200,20,1700,30);
	bob1= new Bob(100,400);
	bob2 = new Bob(180,400);
	bob3 = new Bob(260,400);
	bob4 = new Bob(340,400);
	bob5 = new Bob(420,400);
	rope1 = new Rope(bob1.body,roof.body,{x:40,y:20});
	rope2 = new Rope(bob2.body,roof.body,{x:140,y:20});
	rope3 = new Rope(bob3.body,roof.body,{x:240,y:20});
	rope4 = new Rope(bob4.body,roof.body,{x:340,y:20});
	rope5 = new Rope(bob5.body,roof.body,{x:440,y:20});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  roof.display();
  bob2.display();
  bob1.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}