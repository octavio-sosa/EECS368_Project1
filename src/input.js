let mouse = {
	x: 0,
	y: 0
}
window.addEventListener('resize', () => {
	cvs.width = window.innerWidth
	cvs.height = window.innerHeight
})

window.addEventListener('mousemove', (m) => {
	mouse.x = m.x,
	mouse.y = m.y
})
