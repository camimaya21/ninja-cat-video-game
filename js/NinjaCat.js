function NinjaCat(lives, width, height, x, y){
  this.lives = lives;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.gavity= 20;
}
var ninjaCat1 = new NinjaCat (100, 50, 50, 300, 500);
console.log(ninjaCat1);

NinjaCat.prototype.drawCat = function(){
  
};

NinjaCat.prototype.left = function(){ return this.x - this.width;};
console.log(ninjaCat1.left());

NinjaCat.prototype.right = function(){ return this.x + this.width;};
console.log(ninjaCat1.right());

NinjaCat.prototype.top = function(){ return this.y;};
