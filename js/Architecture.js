var barrels = [];
var limits = [];
var bWidth = 150;
var bHeight = 100;

/// Platforms
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

/// floor
limits.push({
  x: 0,
  y: canvas.height - 5,
  width: canvas.width,
  height: bHeight,
});

// Left Wall
limits.push({
  x: -10,
  y: 0,
  width: 10,
  height: canvas.height,
});

// Right Wall
limits.push({
  x: canvas.width,
  y: 0,
  width: 10,
  height: canvas.height,
});

// Ceiling
limits.push({
  x: 0,
  y: -10,
  width: canvas.width,
  height: 15,
});

console.log(limits);
console.log(barrels);

function drawBarrels() {
  ctx.fillStyle = "#c3c3c3";
  for (var i = 0; i < barrels.length; i++) {
    ctx.fillRect(barrels[i].x, barrels[i].y, barrels[i].width, barrels[i].height);
  }
};
function drawLimits() {
  ctx.fillStyle = "#c3c3c3";
  for (var i = 0; i < limits.length; i++) {
    ctx.fillRect(limits[i].x, limits[i].y, limits[i].width, limits[i].height);
  }
};
