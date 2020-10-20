let cvs = document.querySelector('#canvas')
cvs.width = window.innerWidth
cvs.height = window.innerHeight
let ctx = cvs.getContext('2d')
let prevTime = 0

let gameObjs = []
let paddle = new Paddle('floor')

gameObjs.push(paddle)

ctx.fillStyle = '#c1cbf9'
ctx.fillRect(0, 0, cvs.width, cvs.height)

function renderGame(time) {
	let dt = time - prevTime
	prevTime = time

	ctx.clearRect(0, 0, cvs.width, cvs.height)
	ctx.fillStyle = '#c1cbf9'
	ctx.fillRect(0, 0, cvs.width, cvs.height)

	gameObjs.forEach(obj => obj.update(dt))
	gameObjs.forEach(obj => obj.draw(ctx))

	requestAnimationFrame(renderGame)
}

renderGame()
