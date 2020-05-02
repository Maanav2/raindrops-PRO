class Rain{
    constructor(){
        this.body=Bodies.rectangle(random(0,400),random(0,400),6,10);
        this.width=6;
        this.height=10;
        Matter.Body.setVelocity(this.body,{x:0,y:3})
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        if(pos.y>400){
            pos.y=400-pos.y;
            Matter.Body.setVelocity(this.body,{x:0,y:3});
        }
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("Brown");
        stroke("black");
        strokeWeight(1);
        rect(0, 0, this.width, this.height);
        
        pop();
    }
};