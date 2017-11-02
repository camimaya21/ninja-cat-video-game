function GameArea(time) {
  this.time = time;
  this.points = 0;
  this.shuriArray = [];
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

GameArea.prototype.clearPoints = function (){
  this.points = 0;
};

GameArea.prototype.finish = function (){
  ctx.font = "30px Impact";
  ctx.fillStyle = "#b50909";
  ctx.textAlign = "center";
  ctx.fillText("Your scores is " + Math.floor(this.points) + " points.", canvas.width / 2, canvas.height / 2 - 50);
  ctx.fillText("You need to do more KATAS to be a better Ninja", canvas.width / 2, canvas.height / 2);
  ctx.font = "20px Arial";
  ctx.fillText("Press Enter to Try Again", canvas.width / 2, canvas.height / 2 + 50);
};

GameArea.prototype.shurikenWave = function (){
  for (let i = 0; this.shuriArray.length < 5; i++){
    var x = 0;
    var y = Math.floor(Math.random() * (400 - 50) + 50);
    var vx = Math.floor(Math.random() * (6 - 3) +  3  );
    var vy = 0.1;

  this.shuriArray.push(new Shuriken(10, x, y, vy, vx));
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

GameArea.prototype.drawScore = function(){
  ctx.font = '18px serif';
  ctx.fillStyle = 'red';
  ctx.fillText('Score: '+Math.floor(this.points), 800, 50);
  ctx.textBaseline = "top";
};
