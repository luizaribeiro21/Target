const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball; 
var ground, target; 

var score = 0 

function setup() {
  createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground (200,800,3500,550);

  target = new Target (1100,250,400,400); 
  target2 = new Target (1100,250,300,300); 
  target3 = new Target (1100,250,200,200);
  target4 = new Target (1100,250,100,100);

  ball = new Ball (200,200,80,80); 

  rope = new Rope (ball.body, {x:150, y:200}); 


}

function draw() {
  background(180);

  textSize (50)
  text ("Score = "+ score, 120,60 )


  Engine.update (engine); 

  target.display();
  target2.display(); 
  target3.display(); 
  target4.display(); 

  ground.display();

  ball.display();

  rope.display(); 

  if (ball.body.position.x > 900 && ball.body.position.x < 1300 && ball.body.position.y > 50 && ball.body.position.y < 450 ){
    score = score +1
  }

  if (ball.body.position.x > 950 && ball.body.position.x < 1250 && ball.body.position.y > 100 && ball.body.position.x < 400){
    score = score +2
  }

  if (ball.body.position.x > 1000 && ball.body.position.x < 1200 && ball.body.position.y > 150 && ball.body.position.x < 350){
    score = score +3
  }

  if (ball.body.position.x > 1050 && ball.body.position.x < 1150 && ball.body.position.y > 200 && ball.body.position.x < 300){
    score = score + 4
  }


  textSize (10)
  text ("1", 925,250)

  textSize (10)
  text ("2", 975,250)

  textSize (10)
  text ("3", 1025,250)

  textSize (10)
  text ("4", 1075,250)



 
}

function mouseDragged(){
  Matter.Body.setPosition (ball.body, {x:mouseX, y:mouseY}); 
}

function mouseReleased (){
  rope.fly(); 
}

function keyPressed (){
  if (keyCode === 32){
    rope.attach (ball.body, {x:200, y:200}); 
  }
}




