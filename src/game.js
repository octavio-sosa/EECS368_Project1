const OBJ_KEYS = {
  PADDLE_FLOOR: 0
}

const GSTATE = {
  MENU: 0,
  TEE: 1,
  RUNNING: 2,
  LOST: 3
}

class Game {
  constructor() {
    
    this.state = GSTATE.MENU

    this.gameObjs = []

    this.paddleFloor = new Paddle(this, 'floor')
		this.paddleCeil = new Paddle(this, 'ceiling')
		this.paddleLeft = new Paddle(this, 'leftWall')
		this.paddleRight = new Paddle(this, 'rightWall')
    this.ball = new Ball(this)
    this.screen = new Screen(this)

    if(Math.random() <= 0.5){
      this.rule = '90'
    } else {
      this.rule = '30'
    }

    this.brickset = new Brickset(this, this.rule)
    this.bricks = this.brickset.bricks
    this.gameObjs = [this.paddleFloor, this.paddleCeil,
                    this.paddleLeft, this.paddleRight,
                    this.ball, ...this.bricks]
  }

  update(dt) {
    if(this.state === GSTATE.RUNNING ||
    this.state === GSTATE.TEE) {
      this.bricks = this.bricks.filter(brick => !brick.isHit)

      this.gameObjs = [this.paddleFloor, this.paddleCeil,
                      this.paddleLeft, this.paddleRight,
                      this.ball, ...this.bricks]

      this.gameObjs.forEach(obj => obj.update(dt))

      console.log('game state: ', this.state)
    } else if(this.state === GSTATE.LOST) {
      this.screen.update(dt)
      
      if(Math.random() <= 0.5){
        this.rule = '90'
      } else {
        this.rule = '30'
      }

      this.brickset = new Brickset(this, this.rule)
      this.bricks = this.brickset.bricks
    }
  }

  draw(ctx) {
    this.gameObjs.forEach(obj => obj.draw(ctx))
    this.screen.draw(ctx)
  }
}
