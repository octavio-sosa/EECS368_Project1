class Ball {
  constructor(paddle) {
    this.paddle = paddle
    this.radius = 0
    this.pos = {
      x: 0,
      y: 0
    }
    this.vel = 0
    
  }

  update(dt) {
    this.radius = cvs.width*cvs.height*0.0000175
    this.pos.x = this.paddle.pos.x + this.paddle.width/2
    this.pos.y = cvs.height - this.paddle.height - this.radius
    this.vel = cvs.width*cvs.height*0.0001
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2*Math.PI) 
    ctx.fillStyle = '#e86ce0'
    ctx.fill()
    ctx.closePath()
  }
}
