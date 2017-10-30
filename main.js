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
  updateCanvas();
};

function updateCanvas() {
  ctx.clearRect(0,0,854,480);
  ctx.fillText("ninjaCat_x: " + ninjaCat.x, 650,40);
  ctx.fillText("ninjaCat_y: " + ninjaCat.y, 650,60);
  draw(ninjaCat);
};

updateCanvas();

};
