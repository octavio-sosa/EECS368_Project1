const OBJ_KEYS = {
  PADDLE_FLOOR: 0
}

const GSTATE = {
  MENU: 0,
  TEE: 1,
  TEE_OFF: 2,
  RUNNING: 3
}

class Game {
  constructor() {
    
    this.state = GSTATE.MENU

    this.gameObjs = []

    this.paddleFloor = new Paddle('floor')
		this.paddleCeil = new Paddle('ceiling')
		this.paddleLeft = new Paddle('leftWall')
		this.paddleRight = new Paddle('rightWall')
    this.ball = new Ball(this)

    let rule = '90'
    this.brickset = new Brickset(this, rule)
    this.bricks = this.brickset.bricks
    this.gameObjs = [this.paddleFloor, this.paddleCeil,
                    this.paddleLeft, this.paddleRight,
                    this.ball, ...this.bricks]
  }

  update(dt) {
    if(this.state === GSTATE.RUNNING ||
    this.state === GSTATE.TEE ||
    this.state === GSTATE.TEE_OFF) {
      this.gameObjs.forEach(obj => obj.update(dt))
    }
  }

  draw(ctx) {
    this.gameObjs.forEach(obj => obj.draw(ctx))
  }
}
