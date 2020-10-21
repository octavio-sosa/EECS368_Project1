let cvs = document.querySelector('#canvas')
cvs.width = window.innerWidth - window.innerWidth*0.02
cvs.height = window.innerHeight - window.innerHeight*0.02
let ctx = cvs.getContext('2d')
let prevTime = 0
let game = new Game()

ctx.fillStyle = '#c1cbf9'
ctx.fillRect(0, 0, cvs.width, cvs.height)

function renderGame(time) {
	let dt = time - prevTime
	prevTime = time

	ctx.clearRect(0, 0, cvs.width, cvs.height)
	ctx.fillStyle = '#c1cbf9'
	ctx.fillRect(0, 0, cvs.width, cvs.height)

	game.update(dt)
	game.draw(ctx)

	requestAnimationFrame(renderGame)
}

game.state = GSTATE.TEE
renderGame()
