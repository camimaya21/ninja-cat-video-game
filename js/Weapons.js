var canvas = document.getElementById("ninja-cat-game");
var ctx = canvas.getContext("2d");

function Weapons(damage, x, y, width, height){
this.damage = damage;
this.x = x;
this.y = y;
this.speed = 5;
this.width = width;
this.height = height;
};

Shuriken.prototype = Object.create(Weapons.prototype);
Shuriken.prototype.constructor = Shuriken;

function Shuriken (damage, x, y, width, height) {
  Weapons.call(this, damage);
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.vx = 0;
  this.vy = 0;
  this.radius = 10;
  this.color = 'white';
}

Shuriken.prototype.drawShuriken = function (){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
    this.x += this.vx; //MODIFICA LA POSICIÓN DEL OBJETO
    this.y += this.vy;
};

Weapons.prototype.attack = function(){
  return this.damage;
};

Weapons.prototype.drawLava = function (){
  ctx.fillStyle = "#ad0f0f";
  ctx.fillRect(this.x, this.y, this.width, this.height);
};
