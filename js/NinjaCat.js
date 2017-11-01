var canvas = document.getElementById("ninja-cat-game");
var ctx = canvas.getContext("2d");

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

var ninjaCat = new NinjaCat(100, 400, 50, 40, 40);
// console.log(ninjaCat);

//Arreglar esta función como constructora
function drawNinja() {
  ctx.fillStyle = "#ff0000";
		ctx.fillRect(ninjaCat.x, ninjaCat.y, ninjaCat.width, ninjaCat.height);
  // var img = new Image();
  // img.onload = function() {
  //   ctx.drawImage(img, ninjaCat.x, ninjaCat.y, 60, 60);
  // };
  // img.src = "images/cat1.png";
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
  if (this.lives > 0){
    return "NinjaCat has been hurt " + "-" + damage + " points of live";
  } else {
    return "Sorry...You need to do more KATAS to be a better Ninja";
  }
};

// console.log(ninjaCat.receiveDamage(20));


//Refacto?
// NinjaCat.prototype.jump = function() {
//   if (!this.jumping) {
//     this.vy = -this.jumpStrength;
//     this.jumping = true;
//   }
// };
// console.log(ninjaCat.jump());
