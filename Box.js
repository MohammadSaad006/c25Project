class Box {
    constructor(x,y,width,height){
var options={
    isStatic:true
}

        
 this.body= Bodies.rectangle(x,y,width,height,options)
 
 this.width=width
 this.height= height
 this.image=loadImage("sprites/dustbingreen.png")
 World.add(myWorld,this.body)
 
    }
display(){
    var pos = this.body.position
    noStroke();
    imageMode(CENTER)
    
    image(this.image,930,285,170,190)
}

}