const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var particles =[];
var plinkos = [];
var divs =[];
var divisionHeight=300;
var score=0;


function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world =engine.world;

  ground1= new Ground(width/2,height,width,20);

    for(var d=0;d<=width;d=d+80){
      divs.push(new Divisions(d,height-divisionHeight/2,10,divisionHeight));
    }

   /* for(var pk1=75;pk1<=width;pk1=pk1+50)
    {
      plinkos.push(new Plinko(pk1,75));
    }
    for(var pk2=50;pk2<=width;pk2=pk2+50)
    {
      plinkos.push(new Plinko(pk2,50));
    }*/
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
  
}

function draw() {
  background(10);  
  Engine.update(engine);
  fill("yellow");
  text("Score :" +score,400,250);
  //ground
  ground1.display();
  for (var d = 0; d < divs.length; d++) {
      divs[d].display();
  }
//plinkos
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-30, width/2+30), 10,10));
    score++;
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

}