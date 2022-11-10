class PlayerArrow {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
      density: 10
    };
    this.width = width;
    this.height = height;

    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    
    this.image = loadImage("./assets/arrow.png");
    World.add(world, this.body);
  }

  shoot(archerAngle) {
    var velocity = p5.Vector.fromAngle(archerAngle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { 

      x: velocity.x + 100, 
      y: velocity.y +20
      
    });

    //console.log(this.body.angle);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();

    if (keyIsDown(DOWN_ARROW) && angle < 16 ) {
      angle += 1;
      Matter.Body.setAngle(this.body, angle);
    }

     if (keyIsDown(UP_ARROW) && angle > -13) {
       angle -=1;
       Matter.Body.setAngle(this.body, angle);
     }
  }
}
