let canvas = document.querySelector('#canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let ctx = canvas.getContext('2d')

ctx.fillStyle = '#c1cbf9'
ctx.fillRect(0, 0, canvas.width, canvas.height)

function renderGame(time) {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.fillStyle = '#c1cbf9'
	ctx.fillRect(0, 0, canvas.width, canvas.height)

	requestAnimationFrame(renderGame)
}

renderGame()
