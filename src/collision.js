function isCollision(ball, gameObj) {

  let ballTan = {
    upper: ball.pos.y-ball.radius,
    lower: ball.pos.y+ball.radius,
    left: ball.pos.x-ball.radius,
    right: ball.pos.x+ball.radius
  }

  let objSide = {
    upper: gameObj.pos.y,
    lower: gameObj.pos.y+gameObj.height,
    left: gameObj.pos.x,
    right: gameObj.pos.x+gameObj.width

  }

  if(ballTan.right >= objSide.left &&
    ballTan.left <= objSide.right &&
    ballTan.lower >= objSide.upper &&
    ballTan.upper <= objSide.lower) {
    return true
  } else {
    return false
  }
}
