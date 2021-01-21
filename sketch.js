const World= Matter.World;
const Engine= Matter.Engine;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var hero;
var fly;
var sky;
var monster,monImg1,monImg2;

function preload(){
sky=loadImage("images/GamingBackground.png")

}




function setup(){

createCanvas(1500,1000)

engine=Engine.create();
world=engine.world;

ground=new Ground (400,600,1400,20)
box1=new Box (800,100,70,70);
box2=new Box (800,100,70,70);
box3=new Box (800,100,70,70);
box4=new Box (800,100,70,70);
box5=new Box (800,100,70,70);
box6=new Box (800,100,70,70);

box7=new Box (700,100,70,70);
box8=new Box (700,100,70,70);
box9=new Box (700,100,70,70);
box10=new Box (700,100,70,70);
box11=new Box (700,100,70,70);
box12=new Box (700,100,70,70);

box13=new Box (600,100,70,70);
box14=new Box (600,100,70,70);
box15=new Box (600,100,70,70);
box16=new Box (600,100,70,70);
box17=new Box (600,100,70,70);
box18=new Box (600,100,70,70);
box19=new Box (600,100,70,70);
box20=new Box (600,100,70,70);

hero=new Hero(400,400,150)

fly=new Fly (hero.body,{x:350,y:50});
monster=new Monster(1000,100,200,250);

}

function draw (){

background(sky)
Engine.update(engine)


ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();

hero.display();
fly.display();
monster.display();



}


function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}


