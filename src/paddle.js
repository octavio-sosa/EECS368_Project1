class Paddle {
	constructor(type) {
		this.width = cvs.width*0.1
		this.height = cvs.height*0.1
		this.type = type

		this.pos = {
			x: 0,
			y: cvs.height-5
		}
	}

	update(dt) {
		this.width = cvs.width*0.1
		this.height = cvs.height*0.1

		if(this.type == 'floor') {
			this.pos.x = mouse.x - this.width/2
			this.pos.y = cvs.height-5
		}
	}

	draw(ctx) {
		ctx.fillStyle = '#2b0719'
		ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)

	}

}
