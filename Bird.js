class Bird extends Base {
    constructor(x, y) {
    super(x,y,50,50)

this.image=loadImage ("sprites/Bird.png") 
    }
  display(){
  this.body.position.x=mouseX
  this.body.position.y=mouseY
  super.display()
  }
 };
