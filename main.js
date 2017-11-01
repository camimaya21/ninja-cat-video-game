window.onload = function() {
  var gameStarted = false;
  var keys = [];
  var friction = 0.85; //Coheficiente de rozamiento
  var gravity = 0.98; // es una constante --> no se modifica
  var deadNinja = false;
  var ninjaCat = new NinjaCat(100, 400, 50, 40, 40);
  var floorLava = new Weapons(50, 0, 460, 856, 30);
  var board = new GameArea;


  document.body.addEventListener("keydown", function(e) {
    if (e.keyCode == 13 && !gameStarted) {startGame();}
    if (e.keyCode == 13 && deadNinja) {reset();}
    keys[e.keyCode] = true;
  });

  document.body.addEventListener("keyup",function(e){keys[e.keyCode] = false;});

  board.init();

  function startGame() {
    gameStarted = true;
    board.clear();
    requestAnimationFrame(loop);
  }

  function gameOver() {
    board.clear();
    deadNinja = true;
    board.finish();
  }

  function reset() {
    board.clear();
    ninjaCat.resetGame();
    deadNinja = false;
    requestAnimationFrame(loop);
  }

  function loop() {
    board.clear();
    ninjaCat.drawNinja();
    drawBarrels();
    floorLava.drawLava();


    if (keys[32] || keys[38]) {
      if (!ninjaCat.jumping) {
        ninjaCat.vy = -ninjaCat.jumpStrength * 2;
        ninjaCat.jumping = true;
      }
    }
    if (keys[39]) { ninjaCat.moveRight(); }
    if (keys[37]) { ninjaCat.moveLeft(); }

    ninjaCat.x += ninjaCat.vx;
    ninjaCat.y += ninjaCat.vy;

    ninjaCat.vx *= friction;
    ninjaCat.vy += gravity;

    ninjaCat.grounded = false;

    //Shuriken attack
    board.shurikenWave();

    for (let i = 0; i < shuriArray.length-1; i++) {

    shuriArray[i].throw();
    shuriArray[i].draw();

    if (board.collision(ninjaCat, shuriArray[i])) {
      ninjaCat.receiveDamage(shuriArray[i].attack());
      console.log(ninjaCat.lives);
      if (ninjaCat.lives <= 0) {
        gameOver();
      }
    }
  }

    //Collisions
    for (let i = 0; i < barrels.length; i++) {
      let direction = board.collision(ninjaCat, barrels[i]);

      if (direction == "left" || direction == "right") {
        ninjaCat.vx = 0;
      } else if (direction == "bottom") {
        ninjaCat.jumping = false;
        ninjaCat.grounded = true;
      } else if (direction == "top") {
        ninjaCat.vy *= -1;
      }
    }
    if (ninjaCat.grounded) {
      ninjaCat.vy = 0;
    }

    if (board.collision(ninjaCat, floorLava)) {
      ninjaCat.receiveDamage(floorLava.attack());
      if(ninjaCat.lives <= 0){
       gameOver();
     }
    }

    if (!deadNinja) {
      requestAnimationFrame(loop);
    }
  };

};
