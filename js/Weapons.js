var canvas = document.getElementById("ninja-cat-game");
var ctx = canvas.getContext("2d");

function Weapons(damage, x, y, width, height){
this.damage = damage;
this.x = x;
this.y = y;
this.width = width;
this.height = height;
};

Weapons.prototype.attack = function(){
  return this.damage;
};

Weapons.prototype.drawLava = function (){
  ctx.fillStyle = "#ad0f0f";
  ctx.fillRect(this.x, this.y, this.width, this.height);
};
