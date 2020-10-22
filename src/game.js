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
    //this.brick = new Brick(this, {x: 10, y: 10}, '#e86ce0')
    this.gameObjs = [this.paddleFloor, this.paddleCeil,
                    this.paddleLeft, this.paddleRight,
                    this.ball, ...this.bricks]
    /*
      this.gameObjs.push(this.paddleFloor)
      this.gameObjs.push(this.paddleCeil)
      this.gameObjs.push(this.paddleLeft)
      this.gameObjs.push(this.paddleRight)
      this.gameObjs.push(this.ball)
      this.gameObjs.push(this.brick)
    */
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
