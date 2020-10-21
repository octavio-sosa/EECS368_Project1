class Ball {
  constructor(game) {
    this.game = game
    this.radius = 0
    this.pos = {
      x: 0,
      y: 0
    }
    this.vel = 0
    
  }

  update(dt) {
    this.radius = cvs.width*cvs.height*0.0000175

    if(this.game.state === GSTATE.TEE_OFF) {
      this.reset()
    }
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2*Math.PI) 
    ctx.fillStyle = '#e86ce0'
    ctx.fill()
    ctx.closePath()
  }

  reset() {
    let paddle = this.game.gameObjs[OBJ_KEYS.PADDLE_FLOOR]
    this.pos.x = paddle.pos.x + paddle.width/2
    this.pos.y = cvs.height - paddle.height - this.radius
    this.vel = cvs.width*cvs.height*0.0001
  }
}
