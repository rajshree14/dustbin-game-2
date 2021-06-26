class Ground
{
    constructor(x,y,w,h)
    {
      this.body=Bodies.rectangle(x,y,w,h,{isStatic:true})
      this.width=w
      this.height=h
      World.add(engine.world,this.body)
    }

    display()
    {
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}