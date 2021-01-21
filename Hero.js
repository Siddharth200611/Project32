class Hero {
  constructor(x, y,r) {

      var options ={
    isStatic:false,
    restitution:0.5,
    density:20,
   
      }
      this.r=r;
      this.x=x;
      this.y=y;

      this.image=loadImage("images/Superhero-01.png");    
      this.body = Bodies.circle(x, y, this.r,options);   
     
      World.add(world, this.body);

  }
  display() {

      var pos = this.body.position;
     var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
     fill(255,0,255)
      imageMode(CENTER);
			image(this.image,0,0,this.r,this.r)
     // ellipseMode(RADIUS);
      //ellipse(0, 0, this.r,this.r);
      pop();
  }
}