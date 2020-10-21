let mouse = {
	x: 0,
	y: 0
}
window.addEventListener('resize', () => {
	cvs.width = window.innerWidth - window.innerWidth*0.02
	cvs.height = window.innerHeight - window.innerHeight*0.02
})

window.addEventListener('mousemove', (m) => {
	mouse.x = m.x,
	mouse.y = m.y
})
