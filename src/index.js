let cvs = document.querySelector('#canvas')
cvs.width = window.innerWidth
cvs.height = window.innerHeight
let ctx = cvs.getContext('2d')

ctx.fillStyle = '#c1cbf9'
ctx.fillRect(0, 0, cvs.width, cvs.height)

function renderGame(time) {
	ctx.clearRect(0, 0, cvs.width, cvs.height)
	ctx.fillStyle = '#c1cbf9'
	ctx.fillRect(0, 0, cvs.width, cvs.height)

	requestAnimationFrame(renderGame)
}

renderGame()
