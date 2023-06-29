
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground,world,engine
var rightside,leftside
function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_option={
		isStatic:false ,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(50,100,35,ball_option)
	World.add(world,ball)

	ground = new Ground (650,700,width,20)
	leftside = new Ground (1050,627,20,120)
    rightside = new Ground (550,627,20,120)
	Engine.run(engine);
  ellipseMode(RADIUS)

}


function draw() {
  rectMode(CENTER);
  background(0);

	ellipse(ball.position.x,ball.position.y,35,35)

  ground.display()
  leftside.display()
  rightside.display()

  drawSprites(); 
}

function keyPressed(){
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
}

}

