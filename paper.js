class Paper {
    constructor(x, y, radius) {
      var options = {
          'isStatic': false,
          'restitution':0.3,
          'friction':0.5,    
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
  
      World.add(world, this.body);
    }
    display(){
      var paperpos =this.body.position;
  
      push();
      ellipseMode(RADIUS);
      fill("yellow");
      ellipse(paperpos.x, paperpos.y, this.radius, this.radius);
      pop();
    }
  }