window.onload = function() {
  var gameStarted = false;
  var keys = [];
  var friction = 0.85; //Coheficiente de rozamiento
  var gravity = 0.98; // es una constante --> no se modifica
  var deadNinja = false;
  // var intervalId = "";

  document.body.addEventListener("keydown", function(e) {

    if (e.keyCode == 13 && !gameStarted) {
      startGame();
    }
    if (e.keyCode == 13 && deadNinja) {
      reset();
    }
    keys[e.keyCode] = true;

  });

  document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
  });

  intro_screen();

  function intro_screen() {
    ctx.font = "50px Impact";
    ctx.fillStyle = "#b50909";
    ctx.textAlign = "center";
    ctx.fillText("Ninja Cat Training", canvas.width / 2, canvas.height / 2);

    ctx.font = "20px Arial";
    ctx.fillText("Press Enter To Start", canvas.width / 2, canvas.height / 2 + 50);
  };

  function startGame() {
    gameStarted = true;
    clearCanvas();

    requestAnimationFrame(loop);

    //  intervalId = setInterval(function() {
    //   clearCanvas();
    //   loop();
    // }, 1000 / 60);
  };

  function gameOver() {
    clearCanvas();
    deadNinja = true;

    ctx.font = "30px Impact";
    ctx.fillStyle = "#b50909";
    ctx.textAlign = "center";
    ctx.fillText("You need to do more KATAS to be a better Ninja", canvas.width / 2, canvas.height / 2);

    ctx.font = "20px Arial";
    ctx.fillText("Press Enter to Try Again", canvas.width / 2, canvas.height / 2 + 50);
    // clearInterval(intervalId);
  }

  function reset() {
    console.log("reset");
    ninjaCat.x = 400;
    ninjaCat.y = 50;
    ninjaCat.grounded = true;
    ninjaCat.vy = 0;
    ninjaCat.vx = 0;
    deadNinja = false;
    // clearInterval(intervalId);
    requestAnimationFrame(loop);
  }


  function loop() {

    clearCanvas();
    drawBarrels();
    drawNinja();
    drawLava();

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
      var direction = collisionCheck(ninjaCat, barrels[i]);
      // console.log(direction);
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
    if (collisionCheck(ninjaCat, floorLava)) {
      // ninjaCat.receiveDamage(floorLava.attack());
      gameOver();
    }
    if (!deadNinja) {
      requestAnimationFrame(loop);
    }

  };




  function collisionCheck(ninjaCat, barrels) {

    let vectorX = (ninjaCat.x + (ninjaCat.width / 2)) - (barrels.x + (barrels.width / 2));
    let vectorY = (ninjaCat.y + (ninjaCat.height / 2)) - (barrels.y + (barrels.height / 2));

    let halfWidths = (ninjaCat.width / 2) + (barrels.width / 2);
    let halfHeights = (ninjaCat.height / 2) + (barrels.height / 2);

    let collisionDirection = null;

    if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
      let offsetX = halfWidths - Math.abs(vectorX);
      let offsetY = halfHeights - Math.abs(vectorY);
      if (offsetX < offsetY) {
        if (vectorX > 0) {
          collisionDirection = "left";
          ninjaCat.x += offsetX;
        } else {
          ollisionDirection = "right";
          ninjaCat.x -= offsetX;
        }
      } else {
        if (vectorY > 0) {
          collisionDirection = "top";
          ninjaCat.y += offsetY;
        } else {
          collisionDirection = "bottom";
          ninjaCat.y -= offsetY;
        }
      }
    };
    return collisionDirection;
  };

  function clearCanvas() {
    ctx.clearRect(0, 0, 854, 480);
  };

};
