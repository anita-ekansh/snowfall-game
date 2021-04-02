const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var back;
var maxDrops = 30;
var drops=[];
var maxDrops2 = 30;
var drops2=[];
//var snowBack, snowBackImage;

//function preload(){
  //snowBackImage = loadImage("snow1.jpg")
//}

function setup() {
  createCanvas(1100,400);
  engine = Engine.create();
  world = engine.world;

  back = new Back(400,200);
  drop= new Drop(0, 870, 3);
  drop2= new Drop2(0, 870, 3);
  
  if(frameCount%100===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new Drop(random(-900,490),random(0,400),3,10));
     }
  }

  if(frameCount%100===0){
    for(var i=0; i<maxDrops2;i++){
      drops2.push(new Drop2(random(-900,490),random(0,400),3,10));
     }
  }
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 

  back.display();
  drop.display();
  drop2.display();

  for(var i=9; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }

  for(var i=9; i<maxDrops;i++){
    drops2[i].display();
    drops2[i].update();
  }
  drawSprites();
}