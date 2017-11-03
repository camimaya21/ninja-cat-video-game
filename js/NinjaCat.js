var canvas = document.getElementById("ninja-cat-game");
var ctx = canvas.getContext("2d");
var img = new Image();

function NinjaCat(lives, x, y, width, height) {
  this.lives = lives;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.speed = 5;
  this.vx = 0;
  this.vy = 0;
  this.jumpStrength = 7;
  this.jumping = false;
  this.grounded = false;
  this.image = new Image();
  this.scores = 0;
};

NinjaCat.prototype.drawNinja = function (){
  this.image.src = "images/cat1.png";
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
};

NinjaCat.prototype.resetGame = function (){
  this.lives = 100;
  this.x = 400;
  this.y = 50;
  this.grounded = true;
  this.vy = 0;
  this.vx = 0;
};

NinjaCat.prototype.moves = function(){
  this.x += this.vx;
  this.y += this.vy;
  this.grounded = false;
};

NinjaCat.prototype.moveRight = function() {
  if (this.vx > -this.speed) {
    return this.vx++;
  }
};

NinjaCat.prototype.moveLeft = function() {
  if (this.vx < this.speed) {
    return this.vx--;
  }
};

NinjaCat.prototype.receiveDamage = function (damage){
  this.lives -= damage;
};

NinjaCat.prototype.drawLives = function(){
  ctx.font = "24px 'Shojumaru', cursive";
  ctx.fillStyle = '#FFF';
  ctx.fillText('Lives: '+this.lives, 90, 50);
  ctx.textBaseline = "top";
};
