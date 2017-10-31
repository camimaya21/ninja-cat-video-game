var canvas = document.getElementById("ninja-cat-game");
var ctx = canvas.getContext("2d");

function Barrel (x, y, width, height){
this.x = x;
this.y = canvas.height - 100;
this.width = width;
this.height = height;
};

var barrelLeft = new Barrel (100, 480, 150, 100);
console.log(barrelLeft);

var barrelCenter = new Barrel (350, 480, 150, 100);
console.log(barrelCenter);

var barrelRight = new Barrel (600, 480, 150, 100);
console.log(barrelRight);

Barrel.prototype.draw = function(){
  ctx.fillStyle = "#c3c3c3";
  ctx.fillRect(this.x, this.y, this.width, this.height);
};
