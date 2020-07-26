class  Divisions{
    constructor(x,y,w,h){
        var options={
            isStatic : true
        }
        this.divisions=Bodies.rectangle(x,y,w,h,options);
        this.w =w;
        this.h =h;
        World.add(world,this.divisions);
    }
    display(){
        var pos = this.divisions.position;
        rectMode(CENTER);
        fill("orange");
        rect(pos.x,pos.y,this.w,this.h);
    }
}