function GameArea () {
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');

}

GameArea.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

GameArea.prototype.score = function () {
  points = (Math.floor(this.frames/5));
  this.ctx.font = '18px serif';
  this.ctx.fillStyle = 'black';
  this.ctx.fillText('Score: '+points, 350, 50);
};

GameArea.prototype.stop = function () {
  clearInterval(this.interval);
};
