var barrels = [];
var limits = [];
var bWidth = 150;
var bHeight = 150;
var stoneImage = new Image();
var metalSurface = new Image();

/// Platforms
barrels.push({
  x: 100,
  y: 340,
  width: bWidth,
  height: bHeight,
});

barrels.push({
  x: 350,
  y: 340,
  width: bWidth,
  height: bHeight,
});

barrels.push({
  x: 600,
  y: 340,
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

function drawBarrels() {
  for (var i = 0; i < barrels.length; i++) {
    ctx.fillStyle = "#8a0400";
    ctx.fillRect(barrels[i].x , barrels[i].y, barrels[i].width, barrels[i].height);
    stoneImage.src = "images/stone.png";
    ctx.drawImage(stoneImage, barrels[i].x, barrels[i].y-10, 150, 150);
    metalSurface.src = "images/platform.png";
    ctx.drawImage(metalSurface, barrels[i].x-5, barrels[i].y-10, 160, 10);
  }
};
function drawLimits() {
  for (var i = 0; i < limits.length; i++) {
    ctx.fillStyle = "#1d1d1d";
    ctx.fillRect(limits[i].x, limits[i].y, limits[i].width, limits[i].height);
  }
};
