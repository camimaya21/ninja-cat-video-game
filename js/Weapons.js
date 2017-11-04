function Weapons(damage, x, y, width, height){
this.damage = damage;
this.x = x;
this.y = y;
this.speed = 2;
this.width = width;
this.height = height;
this.image = new Image();
};

Shuriken.prototype = Object.create(Weapons.prototype);
Shuriken.prototype.constructor = Shuriken;

function Shuriken (damage, x, y, vy, vx) {
  Weapons.call(this, damage);
  this.x = x;
  this.y = y;
  this.width = 15;
  this.height = 15;
  this.vx = vx;
  this.vy = vy;
  this.radius = 5;
  this.color = 'white';
}

Shuriken.prototype.draw = function (){
  this.image.src = "images/shuriken_opt.png";
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
};

Shuriken.prototype.throw = function () {
  this.y += this.vy;
  this.x += this.vx;
};

Weapons.prototype.attack = function(){
  return this.damage;
};

Weapons.prototype.drawLava = function (){
  this.image.src = "images/lava.png";
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
};
