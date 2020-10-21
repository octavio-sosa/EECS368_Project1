class Game {
  constructor() {

    this.gameObjs = []

    this.paddleFloor = new Paddle('floor')
		this.paddleCeil = new Paddle('ceiling')
		this.paddleLeft = new Paddle('leftWall')
		this.paddleRight = new Paddle('rightWall')
    this.ball = new Ball(this.paddleFloor)

    this.gameObjs.push(this.paddleFloor)
		this.gameObjs.push(this.paddleCeil)
		this.gameObjs.push(this.paddleLeft)
		this.gameObjs.push(this.paddleRight)
    this.gameObjs.push(this.ball)}

  update(dt) {
    this.gameObjs.forEach(obj => obj.update(dt))
  }

  draw(ctx) {
    this.gameObjs.forEach(obj => obj.draw(ctx))
  }
}
