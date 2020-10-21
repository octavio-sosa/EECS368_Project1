class Game {
  constructor() {

    this.gameObjs = []
    this.paddle = new Paddle('floor')
    this.gameObjs.push(this.paddle)

  }

  update(dt) {
    this.gameObjs.forEach(obj => obj.update(dt))
  }

  draw(ctx) {
    this.gameObjs.forEach(obj => obj.draw(ctx))
  }
}
