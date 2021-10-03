class Target{
    constructor (x,y,width,height){
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle (x,y,this.width, this.height, options); 
        this.width = width; 
        this.height = height; 
        World.add (world, this.body)
    }
    display(){
        var pos = this.body.position 
        //rectMode (CENTER); 
        ellipse(pos.x,pos.y, this.width,this.height);  
    }
} 