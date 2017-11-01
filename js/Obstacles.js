var barrels = [];
var bWidth = 150;
var bHeight = 100;

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
/// floor///
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

function drawBarrels() {
  ctx.fillStyle = "#c3c3c3";
  for (var i = 0; i < barrels.length; i++) {
    ctx.fillRect(barrels[i].x, barrels[i].y, barrels[i].width, barrels[i].height);
  }
};
