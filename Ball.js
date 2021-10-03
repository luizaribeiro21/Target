class Ball {
    constructor (x,y,width,height,angle){
        var options ={
            'restuition':0.8,
            'density': 2.0, 
            'friction': 0.006 
        }
        this.body = Bodies.rectangle (x,y,width,height,options)
        this.height = height; 
        this.width = width; 
        World.add (world,this.body)
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position; 
        push(); 
        translate (pos.x,pos.y); 
        rotate (angle); 
        ellipse (0,0,this.width,this.height); 
        pop(); 
    }
}