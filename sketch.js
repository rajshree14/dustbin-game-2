
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body

var ball
var btn1

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,390,800,20)
	rightSide = new Ground(500,320,20,120)
	leftSide = new Ground(700,320,20,120)

	/*btn1 = createImg("push.png")
	btn1.position(220,30)
	btn1.size(50,50)
	btn1.mouseClicked(keyPressed)*/

	var balls_options={
		restitution:0.03,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(100,50,10,balls_options)
	World.add(engine.world,ball)
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(51);
  
  ground.display()
  rightSide.display()
  leftSide.display()

  circle(ball.position.x,ball.position.y,10)

  if (keyCode===UP_ARROW)
  {
	  
	  Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})
  }
  
  Engine.update(engine)

  drawSprites();
 
}