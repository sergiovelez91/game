$(document).ready(function() {
  var game = new Game();
  game.newGame();
  ($(document).keydown(function(e) {
    if (e.keyCode === 40 && game.car.y < 950) {
      game.car.goDown();
      console.log("pasa");
    } else if (e.keyCode === 38 && game.car.y > 0) {
      game.car.goUp();
      console.log("pasa2");
    }
    //    car.updatePosition();
  }));

  // function checkBreak() {
  //
  //   if (car.positionX >= (board.div.x >= board.div.x + board.div.wt)) {
  //     console.log("Game over");
  //   }
  //
  // }
});
