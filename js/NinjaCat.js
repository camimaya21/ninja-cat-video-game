var gravity =  0.05;
var canvas = document.getElementById("ninja-cat-game");
var ctx = canvas.getContext("2d");

function NinjaCat(lives, width, height, x, y, color) {
  this.lives = lives;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  this.color = color;
}
var ninjaCat = new NinjaCat(100, 50, 50, 300, 500, "blue");
console.log(ninjaCat);

function draw(ninjaCat) {
  var img = new Image();
  img.onload = function() {
  ctx.drawImage(img, ninjaCat.x, ninjaCat.y, 50, 50);
  };
  img.src = "images/cat_jump.gif";
};

NinjaCat.prototype.moveLeft = function() {
  return this.x -= this.width;
};
console.log("left" + ninjaCat.moveLeft());

NinjaCat.prototype.moveRight = function() {
  return this.x += this.width;
};
console.log("right" + ninjaCat.moveRight());

NinjaCat.prototype.jump = function() {
  return (this.y -= (this.height*2));
};
console.log("up" + ninjaCat.jump());
