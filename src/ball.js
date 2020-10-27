class Ball {
  constructor(game) {
    this.game = game
    this.radius = 0
    this.pos = {
      x: 0,
      y: 0
    }
    this.vel = {
      x: 0,
      y: 0
    }
    
  }

  update(dt) {
    this.radius = cvs.width*cvs.height*0.000005

    if(this.game.state === GSTATE.TEE) {
      this.tee()
    } else if(this.game.state = GSTATE.TEE_OFF) {
      this.roam()
    }
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2*Math.PI) 
    ctx.fillStyle = '#1645f5'
    
    ctx.fill()
    ctx.closePath()
  }

  tee() {
    let paddle = this.game.gameObjs[OBJ_KEYS.PADDLE_FLOOR]
    this.pos.x = paddle.pos.x + paddle.width/2
    this.pos.y = cvs.height - paddle.height - this.radius
  }

  roam() {
    this.vel.x = cvs.width*cvs.height*0.00001
    this.vel.y = cvs.width*cvs.height*0.00001

    this.pos.x += this.vel.x
    this.pos.y -= this.vel.y
  }
}
