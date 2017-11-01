function Weapons(damage, x, y, width, height){
this.damage = damage;
this.x = x;
this.y = y;
this.speed = 2;
this.width = width;
this.height = height;
};

Shuriken.prototype = Object.create(Weapons.prototype);
Shuriken.prototype.constructor = Shuriken;

function Shuriken (damage, x, y, vy, vx) {
  Weapons.call(this, damage);
  this.x = x;
  this.y = y;
  this.width = 10;
  this.height = 10;
  this.vx = vx;
  this.vy = vy;
  this.radius = 5;
  this.color = 'white';
}

Shuriken.prototype.draw = function (){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
};

Shuriken.prototype.throw = function () {
  this.y += this.vy;
  this.x += this.vx;
};

Weapons.prototype.attack = function(){
  return this.damage;
};

Weapons.prototype.drawLava = function (){
  ctx.fillStyle = "#ad0f0f";
  ctx.fillRect(this.x, this.y, this.width, this.height);
};
