var gravity =  0.05;
var canvas = document.getElementById("ninja-cat-game");
var ctx = canvas.getContext("2d");

function NinjaCat(lives, width, height, x, y) {
  this.lives = lives;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 2;
  this.miny= 480 - this.height;
  this.userPull= 0;
};

var ninjaCat = new NinjaCat(100, 50, 50, 300, 500, "blue");
console.log(ninjaCat);

function draw(ninjaCat) {
  var img = new Image();
  img.onload = function() {
  ctx.drawImage(img, ninjaCat.x, ninjaCat.y, 50, 50);
  };
  img.src = "images/cat_jump.gif";
};

// NinjaCat.prototype.newPos = function(){
//   this.x += this.speedX;
//   this.y += this.speedY;
// };

NinjaCat.prototype.moveLeft = function() {
  return this.x -= this.width;
};
console.log("left" + ninjaCat.moveLeft());


NinjaCat.prototype.moveRight = function() {
  return this.x += this.width;
};
console.log("right" + ninjaCat.moveRight());


// NinjaCat.prototype.jump = function() {
//   // this.speedY = this.speedY + (gravity);
//   return this.y -= (this.height)-gravity;
// };
//   console.log(ninjaCat.speedY, ninjaCat.y);
// console.log("up" + ninjaCat.jump());
