var canvas = document.getElementById("ninja-cat-game");
var ctx = canvas.getContext("2d");

function Weapons(damage, x, y, width, height){
this.damage = damage;
this.x = x;
this.y = y;
this.width = width;
this.height = height;
};

var floorLava = new Weapons(100, 0, 460, 856, 30);
console.log(floorLava);

var shuriken = new Weapons(20, 600, 0, 10, 10);
console.log(shuriken);

Weapons.prototype.attack = function(){
  return this.damage;
};


function drawLava() {
  ctx.fillStyle = "#ad0f0f";
  ctx.fillRect(floorLava.x, floorLava.y, floorLava.width, floorLava.height);
};
