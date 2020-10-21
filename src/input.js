let mouse = {
	x: 0,
	y: 0
}
window.addEventListener('resize', () => {
	cvs.width = window.innerWidth - window.innerWidth*0.02
	cvs.height = window.innerHeight - window.innerHeight*0.02
})

window.addEventListener('mousemove', e => {
	mouse.x = e.x,
	mouse.y = e.y
})

window.addEventListener('keydown', e => {
  if(e.code == 'Space' && game.state === GSTATE.TEE) {
    game.state = GSTATE.TEE_OFF   
  }
})
