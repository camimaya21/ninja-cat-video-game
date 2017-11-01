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
};

NinjaCat.prototype.drawNinja = function (){
  ctx.fillStyle = "#ff0000";
    ctx.fillRect(this.x, this.y, this.width, this.height);
// var img = new Image();
//     img.onload = function() {
//       ctx.drawImage(img, this.x, this.y, 60, 60);
//     };
//     img.src = "images/cat1.png";
};

NinjaCat.prototype.resetGame = function (){
  this.lives = 100;
  this.x = 400;
  this.y = 50;
  this.grounded = true;
  this.vy = 0;
  this.vx = 0;
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



//Refacto?
// NinjaCat.prototype.jump = function() {
//   if (!this.jumping) {
//     this.vy = -this.jumpStrength;
//     this.jumping = true;
//   }
// };
// console.log(ninjaCat.jump());
