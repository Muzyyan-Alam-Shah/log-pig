const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1200,500,70,70);
    box2 = new Box(1400,500,70,70);
    pig1=new Pig(1300,500);
    log1=new Log(1300,450,270,90);

    box3 = new Box(1200,410,70,70);
    box4 = new Box(1400,410,70,70);
    pig2=new Pig(1300,410);
    log2=new Log(1300,390,270,90);

    ground = new Ground(750,height,1500,20);

    }

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    
    ground.display();
}