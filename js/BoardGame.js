function GameArea(time) {
  this.time = time;
  this.points = 0;
  this.shuriArray = [];
  this.image = new Image();
  this.imageIntro = new Image();
  };

GameArea.prototype.clear = function (){
    ctx.clearRect(0, 0, 854, 480);
};

GameArea.prototype.clearPoints = function (){
  this.points = 0;
  this.shuriArray.splice(0, 4);
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

GameArea.prototype.shuriAttack = function(ninja) {
  for (let i = 0; i < this.shuriArray.length; i++) {

    this.shuriArray[i].throw();
    this.shuriArray[i].draw();

    if (this.collision(ninja, this.shuriArray[i])) {
      ninja.receiveDamage(this.shuriArray[i].attack());
      if (ninja.lives <= 0) { console.log(ninja.deadNinja);this.gameOver(ninja); console.log(ninja.deadNinja);this.shuriArray.splice(0, 5); }
    }
    if(this.shuriArray[i].x > canvas.width){ this.shuriArray.splice(i, 1); }

  }
};

GameArea.prototype.gameOver = function (ninja) {
  this.clear();
  ninja.deadNinja = true;
  this.finish();

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
  ctx.font = "24px 'Shojumaru', cursive";
  ctx.fillStyle = '#fff';
  ctx.fillText('Score: '+Math.floor(this.points), 700, 50);
  ctx.textBaseline = "top";
};

GameArea.prototype.bgTemple = function(){
  this.image.src = "images/bg_temple.png";
  ctx.drawImage(this.image, 0, 0, canvas.width, canvas.height);
};

GameArea.prototype.init = function (){
  var alpha = ctx.globalAlpha;
  ctx.fillStyle = '#222222';
  ctx.font = "57.3px 'Shojumaru', cursive";
  ctx.fillText("NinjaCat", 447.4, 64.6);
  ctx.fillText("Training", 457.0, 133.3);

  ctx.fillStyle = "rgb(142, 24, 24)";
  ctx.fillRect(475, 170, 280, 50);

  ctx.font = "24.0px 'Impact'";
  ctx.fillStyle = "#FFF";
  ctx.fillText("Press ENTER to Start", 515, 205);

  ctx.fillStyle = "#222222";
  ctx.font = "24.0px 'Impact'";
  ctx.fillText("How to Play:", 300, 266.6);

  ctx.font = "14.0px 'Courier New'";
  ctx.fillText("NinjaCat wants to be one of the greatest Ninja on earth. Help", 300, 299.3);
  ctx.fillText("him to survive the Master Training to become an IronNinja", 300, 316.1);
  ctx.fillText("Use your keyboard to move NinjaCat, to keep him safe.  ", 300, 349.7);
  ctx.drawImage(this.imageIntro, 0, 0);
};

GameArea.prototype.finish = function (){

  ctx.font = "30px 'Shojumaru', cursive";
  ctx.fillStyle = "rgb(116, 10, 10)";
  ctx.textAlign = "center";
  ctx.fillText("Your score:", 570, 140);
  ctx.fillText(Math.floor(this.points) + " points.", 570, 180);

  ctx.font = "28px 'Shojumaru', cursive";
  ctx.fillStyle = "#222222";
  ctx.fillText('"You need to do more KATAS"', canvas.width / 2 + 145, canvas.height / 2 - 220);
  ctx.fillText('to be an IronNinja"', canvas.width / 2 + 145, canvas.height / 2 - 180);
  ctx.font = "20px Arial";
  ctx.fillStyle = "rgb(116, 10, 10)";

  ctx.fillStyle = "rgb(142, 24, 24)";
  ctx.fillRect(420, 250, 300, 50);

  ctx.font = "24.0px 'Impact'";
  ctx.fillStyle = "#fff";
  ctx.fillText("Press ENTER to Try again", canvas.width / 2 + 140, 260);

  ctx.fillStyle = "#222222";
  ctx.font = "24.0px 'Impact'";
  ctx.fillText("How to Play:", canvas.width / 2 - 100, canvas.height / 2 + 110);

  ctx.font = "14.0px 'Courier New'";
  ctx.fillText("Use your keyboard to move NinjaCat -->", canvas.width / 2,  canvas.height / 2 + 150);
  ctx.drawImage(this.imageIntro, 0, 0);
};
