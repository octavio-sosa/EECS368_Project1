class Paddle {
	constructor(type) {
		this.width = 0
		this.height = 0
		this.type = type

		this.pos = {
			x: 0,
			y: 0
		}
	}

	update(dt) {
		this.width = cvs.width*0.05
		this.height = cvs.height*0.0075
		//this.width = cvs.width*0.125
		//this.height = cvs.height*0.015
		this.movePaddle()

	}

	draw(ctx) {
		ctx.fillStyle = '#2b0719'
		if(this.type == 'floor' || this.type == 'ceiling') {
			ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
		} else if (this.type == 'leftWall' || this.type == 'rightWall') {
			ctx.fillRect(this.pos.x, this.pos.y, this.height, this.width)
		}
	}

	movePaddle() {
		if(this.type == 'floor') {
			this.pos.x = mouse.x - this.width/2 - 10
			this.pos.y = cvs.height-this.height
		} else if (this.type == 'ceiling') {
			this.pos.x = mouse.x - this.width/2 - 10
			this.pos.y = 0
		} else if (this.type == 'leftWall') {
			this.pos.x = 0
			this.pos.y = mouse.y - this.width/2
		} else if (this.type == 'rightWall') {
			this.pos.x = cvs.width - this.height
			this.pos.y = mouse.y - this.width/2
		}
	}

}
