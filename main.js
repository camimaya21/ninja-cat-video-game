window.onload = function() {
  var canvas = document.getElementById("ninja-cat-game");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = 'white';
  ctx.font = '18px serif';

// Keyboard controls - fluid moves
var keysDown = {};
addEventListener('keydown', function (e) {
  ninjaCat.moving = true;
	keysDown[e.keyCode] = true;
}, false);

addEventListener('keyup', function (e) {
  ninjaCat.moving = false;
	delete keysDown[e.keyCode];
}, false);


document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 32: ninjaCat.jump(); console.log('jump', ninjaCat); break;
    case 37: ninjaCat.moveLeft(); console.log('left', ninjaCat); break;
    case 39: ninjaCat.moveRight(); console.log('right', ninjaCat); break;
  }
  // updateCanvas();
};

// function updateCanvas() {
//   ctx.clearRect(0,0,854,480);
//   ctx.fillText("ninjaCat_x: " + ninjaCat.x, 650,40);
//   ctx.fillText("ninjaCat_y: " + ninjaCat.y, 650,60);
//   draw(ninjaCat);
// };

function update() {
  hitBottom();
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ninjaCat.speedY = ninjaCat.speedY + (gravity - ninjaCat.userPull); // MODIFICA EL EFECTO GRAVEDAD EN FUNCIÓN
  ninjaCat.y += ninjaCat.speedY;
  // console.log(ninjaCat.speedY, ninjaCat.y);
  ninjaCat.x += ninjaCat.speedX;
  draw(ninjaCat);
};

function hitBottom () {
  var rockbottom = canvas.height - ninjaCat.height; //LIMITE DE CHOQUE DE LA BOLA
    if (ninjaCat.y > rockbottom) {
      ninjaCat.y = ninjaCat.miny;
        gravity = 0;
    };
  };

var intervalId = setInterval(update, 50);

document.onkeydown = function(e) {
  if(e.keyCode == 32 || 38){
    ninjaCat.userPull = 0.8;
    gravity = 0.1;
  }
  if(e.keyCode == 37){
    ninjaCat.moveLeft();
    gravity = 0.1;
  }
  if(e.keyCode == 39){
    ninjaCat.moveRight();
    gravity = 0.1;
  };
};

document.onkeyup = function(e) {
  if (e.keyCode == 32 || 38) {
    ninjaCat.userPull = 0;
    gravity = 0.1;
  }
  if (e.keyCode == 37) {
    ninjaCat.moveLeft();
    ninjaCat.userPull = 0;
    gravity = 0.1;
  }
  if (e.keyCode == 39) {
    ninjaCat.moveRight();
    ninjaCat.userPull = 0;
    gravity = 0.1;
  };;
};
// updateCanvas();
//
};
