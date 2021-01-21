class Monster {

    constructor (x,y,width,height){
    
      var options={
      'restitution':0.8,
      'friction':3.0,
     'density':10.04
  
      }
    
      this.width=width;
      this.height=height;
      this.image=loadImage("images/Monster-01.png")
      this.body=Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
    }
    
    
    display(){
    
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    console.log(this.body.speed)
    pop();
  
    };
    
    
    
    
    
    
    
    
    
    };