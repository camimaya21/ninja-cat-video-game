window.onload = function() {
  var gameStarted = false;
  var keys = [];
  var friction = 0.85;
  var gravity = 0.98;
  var deadNinja = false;
  var ninjaCat = new NinjaCat(100, 400, 50, 55, 55);
  var floorLava = new Weapons(50, 0, 360, 856, 150);
  var board = new GameArea();

  document.body.addEventListener("keydown", function(e) {
    if (e.keyCode == 13 && !gameStarted) {startGame();}
    if (e.keyCode == 13 && deadNinja) {reset();}
    keys[e.keyCode] = true;
  });

  document.body.addEventListener("keyup",function(e){keys[e.keyCode]=false;});

  board.init();

function startGame() {
  gameStarted = true;
  board.clear();
  requestAnimationFrame(loop);
};

function gameOver() {
  board.clear();
  deadNinja = true;
  board.finish();
};

function reset() {
  board.clear();
  ninjaCat.resetGame();
  deadNinja = false;
  board.clearPoints();
  _timer();
  requestAnimationFrame(loop);
};

function _timer() {
  var intervalId = setInterval(function() {
    board.points += 1;
    if (deadNinja) {
      clearInterval(intervalId);
    }
  }, 1000);
};

_timer();

function loop() {;
  board.clear();
  board.bgTemple();
  ninjaCat.drawNinja();
  drawBarrels();
  drawLimits();
  floorLava.drawLava();
  ninjaCat.drawLives();
  board.drawScore();
  ninjaCat.moves();
  board.shurikenWave();
  ninjaCat.vx *= friction;
  ninjaCat.vy += gravity;

  if (keys[32] || keys[38]) {
    if (!ninjaCat.jumping) { ninjaCat.vy = -ninjaCat.jumpStrength * 2;
      ninjaCat.jumping = true; }
  }
  if (keys[39]) { ninjaCat.moveRight(); }
  if (keys[37]) { ninjaCat.moveLeft();  }

  for (let i = 0; i < board.shuriArray.length; i++) {

    board.shuriArray[i].throw();
    board.shuriArray[i].draw();

    if (board.collision(ninjaCat, board.shuriArray[i])) {
      ninjaCat.receiveDamage(board.shuriArray[i].attack());
      if (ninjaCat.lives <= 0) { gameOver(); board.shuriArray.splice(0, 5); }
    }
    if(board.shuriArray[i].x > canvas.width){ board.shuriArray.splice(i, 1); }
  }

  for (let i = 0; i < barrels.length; i++) {
    let direction = board.collision(ninjaCat, barrels[i]);

    if (direction == "left" || direction == "right") { ninjaCat.vx = 0;
    } else if (direction == "bottom") {
      ninjaCat.jumping = false;
      ninjaCat.grounded = true;
    } else if (direction == "top") { ninjaCat.vy *= -1; }
  }

  for (let i = 0; i < limits.length; i++) {
    let direction = board.collision(ninjaCat, limits[i]);
    if (direction == "left" || direction == "right") { ninjaCat.vx = 0; }
  }

  if (ninjaCat.grounded) {  ninjaCat.vy = 0;  }

  if (board.collision(ninjaCat, floorLava)) {
    ninjaCat.receiveDamage(floorLava.attack());
    if (ninjaCat.lives <= 0) {  gameOver();   }
  }

  if (!deadNinja) { requestAnimationFrame(loop); }

  // if (board.points >10){
  //   barrels.foreach(barrels.width - 50);
  // }

};

};
