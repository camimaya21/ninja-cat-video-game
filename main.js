window.onload = function() {
  var gameStarted = false;
  var keys = [];
  var friction = 0.85; //Coheficiente de rozamiento
  var gravity = 0.98; // es una constante --> no se modifica
  var deadNinja = false;
  var ninjaCat = new NinjaCat(100, 400, 50, 40, 40);
  var shurikens = new Shuriken(2, 380, 360, 10, 10, 11, 1);
  var floorLava = new Weapons(50, 0, 460, 856, 30);
  var board = new GameArea;
  // var CatsLives = ninjaCat.lives;
  // var intervalId = "";

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

    //  intervalId = setInterval(function() {
    //   clearCanvas();
    //   loop();
    // }, 1000 / 60);
  }

  function gameOver() {
    board.clear();
    deadNinja = true;
    board.finish();
  }

  function reset() {

    ninjaCat.resetGame();
    console.log("reset?");
    deadNinja = false;
    // clearInterval(intervalId);
    requestAnimationFrame(loop);
  }

  function loop() {
    board.clear();
    drawBarrels();
    ninjaCat.drawNinja();
    floorLava.drawLava();
    shurikens.drawShuriken();
    shurikens.x += shurikens.vx; //MODIFICA LA POSICIÓN DEL OBJETO
    shurikens.y += shurikens.vy; //EN AMBOS EJER A RAZÓN DE LA VELOCIDAD

    if (keys[32] || keys[38]) {
      if (!ninjaCat.jumping) {
        ninjaCat.vy = -ninjaCat.jumpStrength * 2;
        ninjaCat.jumping = true;
      }
    }
    if (keys[39]) {
      ninjaCat.moveRight();
    }
    if (keys[37]) {
      ninjaCat.moveLeft();
    }

    ninjaCat.x += ninjaCat.vx;
    ninjaCat.y += ninjaCat.vy;

    ninjaCat.vx *= friction;
    ninjaCat.vy += gravity;

    ninjaCat.grounded = false;

    for (var i = 0; i < barrels.length; i++) {
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
console.log(ninjaCat.lives);
    if (board.collision(ninjaCat, floorLava)) {
      ninjaCat.receiveDamage(floorLava.attack());
      if(ninjaCat.lives <= 0){
       gameOver();
     }
     console.log(ninjaCat.lives);
    }

    if (board.collision(ninjaCat, shurikens)) {
      ninjaCat.receiveDamage(shurikens.attack());
      console.log(shurikens.damage + "daño shuriken");
      if(ninjaCat.lives <= 0){
       gameOver();
     }
      console.log(ninjaCat.lives);
    }

    if (!deadNinja) {
      requestAnimationFrame(loop);
    }
  };
console.log(ninjaCat.lives);
  // console.log(board.collision());
//   function update() {
//   ctx.clearRect(0,0, canvas.width, canvas.height);
//   shurikens.drawShuriken();
//   shurikens.x += shurikens.vx; //MODIFICA LA POSICIÓN DEL OBJETO
//   shurikens.y += shurikens.vy; //EN AMBOS EJER A RAZÓN DE LA VELOCIDAD
// }


};
