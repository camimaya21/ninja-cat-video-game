
function GameArea() {

}

GameArea.prototype.start = function() {
  // this.canvas.width = 854;
  // this.canvas.height = 480;
  // this.ctx = this.canvas.getContext("2d");
  // document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  //Generamos un setInterval para actualizar en todo momento el juego
  this.interval = setInterval(updateGameArea, 20);
};


GameArea.prototype.score = function() {
  // points = (Math.floor(this.frames/5));
  // this.ctx.font = '18px serif';
  // this.ctx.fillStyle = 'black';
  // this.ctx.fillText('Score: '+points, 350, 50);
};

GameArea.prototype.stop = function() {
  // clearInterval(this.interval);
};
