class Bob{
    constructor(x, y, radius){
        var a = {
            isStatic:false, restitution:1.05, friction:0.5, density:1.2
        }
        this.body= Bodies.circle(x,y,radius,a)
        this.radius=radius;
        World.add(world, this.body);
    }
    Display(){
        push();
        fill("white");
       // ellipseMode(CENTER);
        circle(this.body.position.x, this.body.position.y, this.radius*2);
        pop();
    }
}