
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paperball;
var dust1,dust2,dust3;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var groundoptions = 
	{
isStatic: true
	}
ground = Bodies.rectangle(400,690,800,20,groundoptions)
World.add(world,ground)

 paperball = new Paper(100,200,20,20)
	Engine.run(engine);
  
dust1 = new Dust(450,650,20,80)
dust2 = new Dust(550,670,200,20)
dust3 = new Dust(650,650,20,80)
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,800,20)
  
dust1.display()
dust2.display()
dust3.display()
 paperball.display()
}
function keyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85})
	}
}


