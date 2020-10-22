class Brick {
  constructor(game, pos, color) {
    this.game = game

    this.width = cvs.height*0.0075
    this.height = cvs.height*0.0075

    this.pos = {
      x: pos.x,
      y: pos.y
    }

    this.color = color
    this.isHit = false
  }

  update(dt) {
    
  }

  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
  }
}
