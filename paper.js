 class Paper {

constructor(x,y,width,height){

var options = {

restitution :0.3,
friction:0.9,
density: 6,
}
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;

World.add(world, this.body);


}
display(){
 
ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.y,this.width,this.height)


}



















 }