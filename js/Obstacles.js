var barrels = [];
var bWidth = 150;
var bHeight = 100;
console.log(barrels);

barrels.push({
  x: 100,
  y: 380,
  width: bWidth,
  height: bHeight,
});

barrels.push({
  x: 350,
  y: 380,
  width: bWidth,
  height: bHeight,
});

barrels.push({
  x: 600,
  y: 380,
  width: bWidth,
  height: bHeight,
});
/// Floor ///
barrels.push({
  x: 0,
  y: canvas.height - 5,
  width: canvas.width,
  height: bHeight,
});

// Left Wall
barrels.push({
  x: -10,
  y: 0,
  width: 10,
  height: canvas.height,
});

// Left Wall
barrels.push({
  x: canvas.width,
  y: 0,
  width: 10,
  height: canvas.height,
});

// Ceiling
barrels.push({
  x: 0,
  y: -10,
  width: canvas.width,
  height: 15,
});

console.log(barrels);

function drawBarrels() {
  ctx.fillStyle = "#c3c3c3";
  for (var i = 0; i < barrels.length; i++) {
    ctx.fillRect(barrels[i].x, barrels[i].y, barrels[i].width, barrels[i].height);
  }
};


// function Stand (width, height){
// this.width = width;
// this.height = height;
// };
//
// var barrelsize = new Stand (150, 50);
// console.log(barrels);

// var barrels = [{sLeft}, sCenter, sRight];
// console.log(barrels);
// //
// var sLeft = new Stand (100, 480, 150, 100);
// console.log(sLeft);
//
// var sCenter = new Stand (350, 480, 150, 100);
// console.log(sCenter);
//
// var sRight = new Stand (600, 480, 150, 100);
// console.log(sRight);
//
// Stand.prototype.draw = function(){
//   ctx.fillStyle = "#c3c3c3";
//   ctx.fillRect(this.x, this.y, this.width, this.height);
// };
