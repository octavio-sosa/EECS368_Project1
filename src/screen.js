class Screen {
  constructor(game){
    this.game = game
    this.width = cvs.width
    this.height = cvs.height

    this.font = '40px serif'
    this.textColor = '#2cd2ee'
    this.pageColor = 'rgba(0, 0, 0, 0.5)'
  }

  update(dt) {
    if(this.game.state === GSTATE.LOST) {
      this.text = 'You lost. Press SPACE to restart'
    } else if (this.game.state === GSTATE.WON) {
      this.text = 'You WON! Press SPACE to restart'
    }
  }

  draw(ctx){
    if(this.game.state === GSTATE.LOST || this.game.state === GSTATE.WON){
      ctx.fillStyle = this.pageColor
      ctx.rect(0, 0, this.width, this.height)
      ctx.fill()

      ctx.font = this.font
      ctx.fillStyle = this.textColor
      ctx.textAlign = 'center'
      ctx.fillText(this.text, this.width/2, this.height/2)
    }
  }
}
