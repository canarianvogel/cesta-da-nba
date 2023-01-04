const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var parede
var parede1
var parede2
var parede3
var bola
var pbola
var cima
var direita
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
 parede=new Parede(200,390,400,20)
 parede1=new Parede(390,200,20,400) 
 parede2=new Parede(10,200,20,400) 
 parede3=new Parede(200,10,400,20)
 pbola={
   isStatic:false,
restitution:0.5,
frictionAir:0.01
 }

bola=Bodies.circle(120,250,10,pbola)
World.add(world,bola)

 cima=createImg("up.png")
cima.position(220,30)
cima.size(50,50)
cima.mouseClicked(forca)

 direita=createImg("right.png")
direita.position(20,30)
direita.size(50,50)









}

function draw() 
{
  background(10);
  Engine.update(engine);
  parede.show()
  parede1.show()
  parede2.show()
  parede3.show()
  ellipseMode(RADIUS)
    ellipse(bola.position.x,bola.position.y,10,10)
  }

function forca(){
Matter.Body.applyForce(bola,{x:0,y:0},{x:0,y:-0.01})

}
function forca1(){
  Matter.Body.applyForce(bola,{x:0,y:0},{x:+0.011,y:0})
  
  }
