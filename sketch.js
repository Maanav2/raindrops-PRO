const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rain,rain1,rain2,rain3,rain4,rain5,rain6,rain7,rain8,rain9;

function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  rain = new Rain();
  rain1 = new Rain();
  rain2 = new Rain();
  rain3 = new Rain();
  rain4 = new Rain();
  rain5 = new Rain();
  rain6 = new Rain();
  rain7 = new Rain();
  rain8 = new Rain();
  rain9 = new Rain();
}

function draw() {
  background(0);  
  drawSprites();
  Engine.update(engine)
  rain.display();
  rain1.display();
  rain2.display();
  rain3.display();
  rain4.display();
  rain5.display();
  rain6.display();
  rain7.display();
  rain8.display();
  rain9.display();

  
}