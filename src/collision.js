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

function repel(ball, gameObj) {
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

  let hitObjSide = {
    left: ballTan.right >= objSide.left &&
          ballTan.right < objSide.right &&
          ball.pos.y >= objSide.upper &&
          ball.pos.y <= objSide.lower,
    right: ballTan.left <= objSide.right &&
           ballTan.left > objSide.left &&
          ball.pos.y >= objSide.upper &&
          ball.pos.y <= objSide.lower,
    upper: ballTan.lower >= objSide.upper &&
           ballTan.lower < objSide.lower &&
           ball.pos.x >= objSide.left &&
           ball.pos.x <= objSide.right,
    lower: ballTan.upper <= objSide.lower &&
           ballTan.upper > objSide.upper &&
           ball.pos.x >= objSide.left &&
           ball.pos.x <= objSide.right
  }

let hitObjCorner = {
  upperLeft: ballTan.right >= objSide.left &&
             ballTan.right < objSide.right &&
             ballTan.lower >= objSide.upper &&
             ballTan.lower < objSide.lower &&
             ball.pos.y < objSide.upper &&
             ball.pos.x < objSide.left,
  upperRight: ballTan.left <= objSide.right &&
              ballTan.left > objSide.left &&
              ballTan.lower >= objSide.upper &&
              ballTan.lower < objSide.lower &&
              ball.pos.y < objSide.upper &&
              ball.pos.x > objSide.right,
  lowerLeft: ballTan.right >= objSide.left && //lowerLeft may be causeing issues
             ballTan.right < objSide.right &&
             ballTan.upper <= objSide.lower &&
             ballTan.upper > objSide.upper &&
             ball.pos.y > objSide.lower &&
             ball.pos.x < objSide.left,
  lowerRight: ballTan.left <= objSide.right && //lowerRight may be causing issues
              ballTan.left > objSide.left &&
              ballTan.upper <= objSide.lower &&
              ballTan.upper > objSide.upper &&
              ball.pos.y > objSide.lower &&
              ball.pos.x > objSide.right
}

  if(hitObjSide.left) {
    ball.pos.x = objSide.left-ball.radius
    ball.vel.x *= -1
  } else if(hitObjSide.right) {
    ball.pos.x = objSide.right+ball.radius
    ball.vel.x *= -1
  } else if (hitObjSide.upper) {
    ball.pos.y = objSide.upper-ball.radius
    ball.vel.y *= -1
  } else if (hitObjSide.lower) {
    ball.pos.y = objSide.lower+ball.radius
    ball.vel.y *= -1
  } else if(hitObjCorner.upperLeft) {
    ball.pos.x = objSide.left - ball.radius
    ball.pos.y = objSide.upper - ball.radius
    ball.vel.x *= -1
    ball.vel.y *= -1
  } else if(hitObjCorner.upperRight) {
    ball.pos.x = objSide.right + ball.radius
    ball.pos.y = objSide.upper - ball.radius
    ball.vel.x *= -1
    ball.vel.y *= -1
  } else if (hitObjCorner.lowerLeft) {
    ball.pos.x = objSide.left - ball.radius
    ball.pos.y = objSide.lower + ball.radius
    ball.vel.x *= -1
    ball.vel.y *= -1
  } else if (hitObjSide.lowerRight) {
    ball.pos.x = objSide.right + ball.radius
    ball.pos.y = objSide.lower + ball.radius
    ball.vel.x *= -1
    ball.vel.y *= -1
  } else {
    ball.vel.x *= -1
    ball.vel.y *= -1
  }
}
