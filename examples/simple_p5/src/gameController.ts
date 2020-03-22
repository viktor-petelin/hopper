class GameController {
  // private isPlaying: boolean
  // private isGameOver: boolean
  private player: Player

  constructor () {
    // put initial values here
    // this.abc = 123
    // ...

    // this.isPlaying = false
    // this.isGameOver = false

    this.player = new Player()

    console.log('gameController created!')
  }

  update () {
    this.player.move()
  }

  draw () {
    // draw level
    // draw level objects
    // draw scoreboard
    // draw player

    // ...
    background(200, 200, 200)

    this.player.draw()

  }
}
