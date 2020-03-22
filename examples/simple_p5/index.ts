// preload, setup, draw, resizeCanvas - are functions for p5.js

// declare global variables for images, fonts, sounds. For example:
// let font: p5.font
// let gameStartImage: p5.Image
// ...

let gameController: GameController;

function preload () {
  // assign global variables declared above to images, fonts, sounds here ...
  // use functions 'loadImage', 'loadFont', 'loadSound' from p5.js library
  // ...
}

function setup () {
  createCanvas(windowWidth, 600);
  frameRate(60);

  gameController = new GameController();
}

function draw () {
  gameController.update()
  gameController.draw()
}

function windowResized() {
  resizeCanvas(windowWidth, 600);
}
