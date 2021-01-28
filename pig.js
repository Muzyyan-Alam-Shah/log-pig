class Pig{
    constructor(x,y){
        var options={
            restitution:0.5,friction:1.0,density:1.5
        }
        this.pig=Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.pig);

    }
    display(){
        push();
        translate(this.pig.position.x,this.pig.position.y);
        rotate(this.pig.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();   
    }

}