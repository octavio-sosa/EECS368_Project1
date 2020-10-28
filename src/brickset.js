class Brickset {
  constructor(game, rule) {
    this.game = game
    this.rule = rule
    this.rules = this.getRules()
    this.scale = 0.075
    this.pos = {
      x: cvs.width*this.scale,
      y: cvs.width*this.scale
    }

    this.widthPix = cvs.width - 2*cvs.width*this.scale
    this.heightPix = cvs.height - 2*cvs.height*this.scale

    this.brickSize = {
      width: cvs.height*0.01,
      height: cvs.height*0.01
    }

    this.setSize = {
      cols: Math.floor(this.widthPix/this.brickSize.width),
      rows: Math.floor(this.heightPix/this.brickSize.height)
    }

    this.color = '#e86ce0'

    let matrix = this.genMatrix(this.rule)
    this.bricks = this.genBricks(matrix)

  }

  genRuleResult(rule, triBlocks) {
    let bits = ' '
    for(let i = 0; i < triBlocks.length; i++) {
      bits += triBlocks[i]
    }

    let bitsVal = parseInt(bits, 2) //convert bit word to int
    let result = rule.result[bitsVal]

    return result
  }

  genMatrix(ruleName) {
    //init
    let matrix = []
    let rule = {
      name: ' ',
      result: [0, 0, 0, 0, 0, 0, 0, 0]
    }

    //collect rule description
    this.rules.forEach( r => {
      if(r.name == ruleName) {
        rule = r        
      }
    })

    // initialize rows
    let row = new Array(this.setSize.cols-1).fill(0)
    let nextRow = new Array(this.setSize.cols-1).fill(0)
    row[Math.floor(this.setSize.cols/2)] = 1//set mid element to 1

    matrix.push(row)

    // generate next row from previous row
    for(let i = 1; i < this.setSize.rows; i++) { //all rows but first
      for(let j = 0; j <= this.setSize.cols-3; j++) { //end 3 blocks from end
        let triBlocks = row.slice(j, j+3)
        let result = this.genRuleResult(rule, triBlocks)
        nextRow[j+1] = result
      }
      matrix.push([...nextRow])
      row = [...nextRow]
      nextRow.fill(0) //clear 
    }

    return matrix
  }

  genBricks(matrix) {
    let bricks = []
    let pos = {
      x: this.pos.x,
      y: this.pos.y
    }

    let rows = matrix.length
    let cols = matrix[0].length

    for(let i = 0; i < rows; i++) {
      for(let j = 0; j < cols; j++) {
        if(matrix[i][j]) {
          let brick = new Brick(this.game, pos, this.color)
          bricks.push(brick)
        }
        pos.x += this.brickSize.width
      }
      pos.x = this.pos.x
      pos.y += this.brickSize.height
    }

    return bricks
  }

  getRules() {
    let rules = []

    let rule_90 = {
      name: '90',
      result: [0, 1, 0, 1, 1, 0, 1, 0]
      //index: binary num, value: resulting middle val
    }

    let rule_30 = {
      name: '30',
      result: [0, 1, 1, 1, 1, 0, 0, 0]
    }

    rules.push(rule_90, rule_30)

    return rules
  }
}

