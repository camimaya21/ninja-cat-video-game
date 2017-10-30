var canvas = document.getElementById("ninja-cat-game");
var ctx = canvas.getContext("2d");
// var friction = 0.8;
// var gravity = 0.98;

function NinjaCat(lives, x, y, width, height) {
  this.lives = lives;
  this.x = x;
  this.y = canvas.height - 60;
  this.width = width;
  this.height = height;
  this.speed = 5;
  this.vx = 0;
  this.vy = 0;
  this.jumpStrength = 7;
  this.jumping = false;
  this.grounded = false;
};

var ninjaCat = new NinjaCat(100, 200, 400, 60, 60);
console.log(ninjaCat);

function draw(ninjaCat) {
  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, ninjaCat.x, ninjaCat.y, 60, 60);
  };
  img.src = "images/cat_jump.gif";
};

NinjaCat.prototype.moveRight = function() {
  if (this.vx > -this.speed) {
    return this.vx++;
  }
};
console.log("right" + ninjaCat.moveRight());

NinjaCat.prototype.moveLeft = function() {
  if (this.vx < this.speed) {
    return this.vx--;
  }
};
console.log("left" + ninjaCat.moveLeft());



//Refacto?
// NinjaCat.prototype.jump = function() {
//   if (!this.jumping) {
//     this.vy = -this.jumpStrength;
//     this.jumping = true;
//   }
// };
// console.log(ninjaCat.jump());
