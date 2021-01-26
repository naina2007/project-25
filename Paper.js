class Paper{

    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.width = 50;
        this.height = 40;
        this.image = loadImage("paper.png");


       
        this.radius=radius;
        this.body=Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);
    }

    display(){
       
    fill("skyblue");
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);

        
    }

}


