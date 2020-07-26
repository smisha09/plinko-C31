class Particles{
    constructor(x,y,radius){
        var options={
            restitution: 0.4
            
        }
        this.particle=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        //fill(random(0, 255), random(0, 255), random(0, 255));
        World.add(world,this.particle);
    }
    display(){
    var pos = this.particle.position;
    var angle = this.particle.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    noStroke();
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius)
    pop();
}
}