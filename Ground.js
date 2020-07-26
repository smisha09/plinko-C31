class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.ground = Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        World.add(world,this.ground);
    }
    display(){
        var pos = this.ground.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.w,this.h)
    }

}    