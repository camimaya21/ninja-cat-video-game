window.onload = function() {
  var canvas = document.getElementById("ninja-cat-game");
  var ctx = canvas.getContext("2d");
  // ctx.fillStyle = 'white';
  // ctx.font = '18px serif';

  var gameStarted = false;
  var keys = [];
  var friction = 0.85;
  var gravity = 0.98;

  document.body.addEventListener("keydown", function(e) {

    if (e.keyCode == 13 && !gameStarted) {
      startGame();
    };
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
    // console.log("the game just begin");
    clearCanvas();

    setInterval(function() {
      // console.log("loop startGame");
      clearCanvas();
      gameLoop();
    }, 1000 / 30);
  };

  function gameLoop() {
    // console.log("Game On!!!");
    draw(ninjaCat);

    if (keys[32] || keys[38]) {
      if (!ninjaCat.jumping) {
        ninjaCat.vy = -ninjaCat.jumpStrength * 2;
        ninjaCat.jumping = true;
      }
    }
    if (keys[39]) {
      // console.log("right Key");
      ninjaCat.moveRight();
    }
    if (keys[37]) {
      // console.log("left Key");
      ninjaCat.moveLeft();
    }

    ninjaCat.x += ninjaCat.vx;
    ninjaCat.y += ninjaCat.vy;
    ninjaCat.vx *= friction;
    ninjaCat.vy += gravity;

    if (ninjaCat.y >= canvas.height - ninjaCat.height) {
      ninjaCat.y = canvas.height - ninjaCat.height;
      ninjaCat.jumping = false;
    }

  };

  function clearCanvas() {
    ctx.clearRect(0, 0, 854, 480);
  };

  // Keyboard controls - fluid moves
  // var keysDown = {};
  // addEventListener('keydown', function (e) {
  //   ninjaCat.moving = true;
  // 	keysDown[e.keyCode] = true;
  // }, false);
  //
  // addEventListener('keyup', function (e) {
  //   ninjaCat.moving = false;
  // 	delete keysDown[e.keyCode];
  // }, false);

};
