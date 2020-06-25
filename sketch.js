const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;



function setup() {
  createCanvas(1000,600);

 
  engine = Engine.create();
  world = engine.world;
  
  roof = new Roof(500,25,1000,50);

  bob1 = new Bob(500,400,40);
  rope1 = new Rope(bob1.body,roof.body, 0,35);

  bob2 = new Bob(575,400,40);
  rope2 = new Rope(bob2.body,roof.body, 80,35);

  bob3 = new Bob(650,400,40);
  rope3 = new Rope(bob3.body,roof.body, 160,35);

  bob4 = new Bob(425,400,40);
  rope4 = new Rope(bob4.body,roof.body, -80,35);

  bob5 = new Bob(350,400,40);
  rope5 = new Rope(bob5.body,roof.body, -160,35);

  Engine.run(engine)

}




function draw() {
  background(200);  
  Engine.update(engine);

  rope1.view();
  rope2.view();
  rope3.view();
  rope4.view();
  rope5.view();

  roof.display();
  bob1.Display();
  bob2.Display();
  bob3.Display();
  bob4.Display();
  bob5.Display();

  

}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-200,y:-200});
  }
}