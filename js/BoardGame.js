var shuriArray = [];

function GameArea(time) {
  this.time = time;
};

GameArea.prototype.init = function (){
  ctx.font = "50px Impact";
  ctx.fillStyle = "#b50909";
  ctx.textAlign = "center";
  ctx.fillText("Ninja Cat Training", canvas.width / 2, canvas.height / 2);
  ctx.font = "20px Arial";
  ctx.fillText("Press Enter To Start", canvas.width / 2, canvas.height / 2 + 50);
};

GameArea.prototype.clear = function (){
    ctx.clearRect(0, 0, 854, 480);
};

GameArea.prototype.finish = function (){
  ctx.font = "30px Impact";
  ctx.fillStyle = "#b50909";
  ctx.textAlign = "center";
  ctx.fillText("You need to do more KATAS to be a better Ninja", canvas.width / 2, canvas.height / 2);
  ctx.font = "20px Arial";
  ctx.fillText("Press Enter to Try Again", canvas.width / 2, canvas.height / 2 + 50);
};

GameArea.prototype.shurikenWave = function (){
  for (let i = 0; i < 1; i++){
    // var damage =
  var x = 0;
  var y = Math.floor(Math.random() * (canvas.height - 0) + 20);
  //var vx = Math.floor(Math.random() * (canvas.height - 10 * 2) + 100);
  var vx = 20;
 var vy = 2;

  shuriArray.push(new Shuriken(10, x, y, vy, vx));
  }
};


GameArea.prototype.collision = function (ninja, objects) {

    let vectorX = (ninja.x + (ninja.width / 2)) -  (objects.x +  (objects.width / 2));
    let vectorY = (ninja.y + (ninja.height / 2)) -  (objects.y +  (objects.height / 2));

    let halfWidths = (ninja.width / 2) +  (objects.width / 2);
    let halfHeights = (ninja.height / 2) +  (objects.height / 2);

    let collisionDirection = null;

    if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
      let offsetX = halfWidths - Math.abs(vectorX);
      let offsetY = halfHeights - Math.abs(vectorY);
      if (offsetX < offsetY) {
        if (vectorX > 0) {
          collisionDirection = "left";
          ninja.x += offsetX;
        } else {
          ollisionDirection = "right";
          ninja.x -= offsetX;
        }
      } else {
        if (vectorY > 0) {
          collisionDirection = "top";
          ninja.y += offsetY;
        } else {
          collisionDirection = "bottom";
          ninja.y -= offsetY;
        }
      }
    };
    return collisionDirection;
};

GameArea.prototype.score = function() {
  // points = (Math.floor(this.frames/5));
  // this.ctx.font = '18px serif';
  // this.ctx.fillStyle = 'black';
  // this.ctx.fillText('Score: '+points, 350, 50);
};
