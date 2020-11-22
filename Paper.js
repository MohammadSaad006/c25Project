class Paper {
   constructor(x,y,radius){
var options={
   isStatic:false,
   restitution:0.3,
   friction:0.5,
   density:1.5
    
   }
   
   this.body= Bodies.circle(x,y,radius,options);
   this.image= loadImage("Sprites/paper.png")
  
   this.radius=radius
   World.add(myWorld,this.body)
   
   }
   display(){
   var paperpos = this.body.position;
   push()
   translate(paperpos.x,paperpos.y);
   imageMode(CENTER);
   noStroke();
  
   image(this.image,0,0,40,40);
   pop()
}

}