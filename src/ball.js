class Ball {
  constructor(game) {
    this.game = game
    this.radius = 0
    this.pos = {
      x: 0,
      y: 0
    }
    this.velScale = 0.000001
    this.vel = {
      x: 0,
      y: 0
    }
    
  }

  update(dt) {
    //this.radius = cvs.width*cvs.height*0.000005
    this.radius = cvs.width*cvs.height*0.000001

    if(this.game.state === GSTATE.TEE) {
      this.tee()
    } else if(this.game.state = GSTATE.TEE_OFF) {
      this.roam()
    }

    this.game.bricks.forEach( brick => {
      if( this.isCollision(brick)) {
        console.log("hit!")
        brick.isHit = true //TODO: remove from gameObjs
        //repel(this, brick) //updates this.vel TODO
      }
    })
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
    this.vel.x = cvs.width*cvs.height*this.velScale
    this.vel.y = cvs.width*cvs.height*this.velScale

    this.pos.x += this.vel.x
    this.pos.y -= this.vel.y
  }

  isCollision(object) {
    let objSize = {
      width: object.width,
      h: object.height
    }

    let objPos = {
      start: (object.pos.x, object.pos.y),
      end: (object.pos.x+objSize.width, object.pos.y+objSize.height),
    }

    let ballTan = {
      upper: this.pos.y-this.radius,
      lower: this.pos.y+this.radius,
      left: this.pos.x-this.radius,
      right: this.pos.x+this.radius
    }

    let objSide = {
      upper: objPos.start[1],
      lower: objPos.end[1],
      left: objPos.start[0],
      right: objPos.end[0]
    }

    /*
    let isInWidthSpan = this.pos.x+this.radius >= objPos.start[0] &&

    let isInWidthSpan = this.pos.x+this.radius >= objPos.start[0] &&
                    this.pos.x-this.radius <= objPos.end[0]

    let isInHeightSpan = this.pos.y+this.radius >= objPos.start[1] &&
                     this.pos.y-this.radius <= objPos.end[1]
    
    console.log("isInWidthSpan: ", isInWidthSpan)
    console.log("isInHeightSpan: ", isInHeightSpan)
    */

    if(ballTan.right >= objSide.left &&
      ballTan.left <= objSide.right &&
      ballTan.lower <= objSide.upper &&
      ballTan.upper <= objSide.lower) {
      return true
    } else {
      return false
    }
  }

  repel(object) {
    let collisionVect = {
      start: (this.pos.x, this.pos.y),
      end: (0,0)
    }
  }
}

