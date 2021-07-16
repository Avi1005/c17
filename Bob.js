class Bob{
      
       constructor(x,y){
           var options = {
               isStatic:false,
                restitution: 1,
                 friction :0,
                 density:7.8,
    }

this.body = Bodies.circle(x,y,2.5,options);
this.r = 2.5
World.add(world,this.body);

 

}
    


display(){
   push();
   ellipseMode(CENTER)
   fill(254,0,255)
ellipse(this.body.position.x,this.body.position.y,25,25)
pop()
}
}