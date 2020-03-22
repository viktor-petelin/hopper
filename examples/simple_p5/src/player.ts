class Player {
  private x: number
  private y: number
  private xVelocity: number
  private yVelocity: number
  private speed: number
  private color: p5.Color

  constructor () {
    this.speed = 0.1
    this.x = 50
    this.y = 400
    this.xVelocity = 1
    this.yVelocity = 0
    this.color = color(100, 254, 180)
  }

  move() {
    if (keyIsDown(UP_ARROW)) {
      this.yVelocity -= this.speed
      console.log('[DEBUG] up')
    } else if (keyIsDown(DOWN_ARROW)) {
      this.yVelocity += this.speed
      console.log('[DEBUG] down')
    }

    this.x += this.xVelocity;
    this.y += this.yVelocity;
  }

  draw() {
    push()

    strokeWeight(2);
    fill(this.color)
    circle(this.x, this.y, 50)

    // ...
    pop()
  }
}
