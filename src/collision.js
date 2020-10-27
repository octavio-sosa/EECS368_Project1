function isCollision(ball, gameObj) {
  let objSize = {
    width: gameObj.width,
    h: gameObj.height
  }

  let objPos = {
    start: (gameObj.pos.x, gameObj.pos.y),
    end: (gameObj.pos.x+objSize.width, gameObj.pos.y+objSize.height),
  }

  let ballTan = {
    upper: ball.pos.y-ball.radius,
    lower: ball.pos.y+ball.radius,
    left: ball.pos.x-ball.radius,
    right: ball.pos.x+ball.radius
  }

  let objSide = {
    upper: objPos.start[1],
    lower: objPos.end[1],
    left: objPos.start[0],
    right: objPos.end[0]
  }

  /*
  let isInWidthSpan = ball.pos.x+ball.radius >= objPos.start[0] &&

  let isInWidthSpan = ball.pos.x+ball.radius >= objPos.start[0] &&
                  ball.pos.x-ball.radius <= objPos.end[0]

  let isInHeightSpan = ball.pos.y+ball.radius >= objPos.start[1] &&
                   ball.pos.y-ball.radius <= objPos.end[1]
  
  console.log("isInWidthSpan: ", isInWidthSpan)
  console.log("isInHeightSpan: ", isInHeightSpan)
  */

  if(ballTan.right >= objSide.left &&
    ballTan.left <= objSide.right &&
    ballTan.lower <= objSide.upper &&
    ballTan.upper <= objSide.lower) {
    return true
  } else {
    return false
  }
}
