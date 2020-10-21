const OBJ_KEYS = {
  PADDLE_FLOOR: 0
}

const GSTATE = {
  MENU: 0,
  TEE_OFF: 1,
  RUNNING: 2
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

    this.gameObjs.push(this.paddleFloor)
		this.gameObjs.push(this.paddleCeil)
		this.gameObjs.push(this.paddleLeft)
		this.gameObjs.push(this.paddleRight)
    this.gameObjs.push(this.ball)}

  update(dt) {
    if(this.state === GSTATE.RUNNING ||
    this.state === GSTATE.TEE_OFF) {
      this.gameObjs.forEach(obj => obj.update(dt))
    }
  }

  draw(ctx) {
    this.gameObjs.forEach(obj => obj.draw(ctx))
  }
}
