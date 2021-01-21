class Fly {


constructor(bodyA,pointB){
  var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.6,
    length:370
  }

this.pointB=pointB;
this.rope=Constraint.create(options);
World.add(world,this.rope);
}



display(){
  var posA=this.rope.bodyA.position;
  var posB=this.pointB;
  push();
  strokeWeight(0)
  stroke(48,22,8);
  line(posB.x,posB.y,posA.x,posA.y);
  pop();
}

}