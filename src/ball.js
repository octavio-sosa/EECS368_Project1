class Ball {
  constructor(game) {
    this.game = game
    this.radius = 0
    this.pos = {
      x: 0,
      y: 0
    }
    this.velScale = 0.000003
    this.vel = {
      x: cvs.width*cvs.height*this.velScale,
      y: cvs.width*cvs.height*this.velScale
    }
  }

  update(dt) {
    //this.radius = cvs.width*cvs.height*0.000005
    this.radius = cvs.width*cvs.height*0.000009

    if(this.game.state === GSTATE.RUNNING &&
      this.isOutOfBounds()){
      //console.log('lost')
      this.game.state = GSTATE.LOST
    }

    if(this.game.state === GSTATE.TEE) {
      this.tee()
    } else if(this.game.state === GSTATE.RUNNING) {
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

    this.vel = {
      x: cvs.width*cvs.height*this.velScale,
      y: cvs.width*cvs.height*this.velScale
    }
  }

  roam() {
    this.vel.x = cvs.width*cvs.height*this.velScale*Math.sign(this.vel.x)
    this.vel.y = cvs.width*cvs.height*this.velScale*Math.sign(this.vel.y)

    this.pos.x += this.vel.x
    this.pos.y += this.vel.y
  }

  isOutOfBounds(){
    if(this.pos.x < 0 || this.pos.x > cvs.width ||
      this.pos.y < 0 || this.pos.y > cvs.height){
      //console.log('out of bounds')
      return true
    } else {
      return false
    }
  }
}

