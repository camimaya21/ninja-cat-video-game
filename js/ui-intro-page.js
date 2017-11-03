GameArea.prototype.init = function (){
      var image = new Image();
      var alpha = ctx.globalAlpha;

      // capa1/title
      ctx.save();

      // capa1/title/
      ctx.save();

      // capa1/Archivo enlazado
      ctx.restore();
      ctx.save();
      ctx.transform(17.932, 0.000, -0.000, 17.932, 238.1, 238.1);
      this.image.src = "images/shuriken.png";
      ctx.drawImage(image, -256.0, -256.0);
      ctx.restore();

      // capa1/startButton/Grupo
      ctx.save();
      ctx.globalAlpha = alpha * 0.68;

      // capa1/startButton/Grupo/Trazado
      ctx.save();
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();
      ctx.moveTo(595.1, 170.9);
      ctx.lineTo(829.1, 170.9);
      ctx.bezierCurveTo(835.6, 170.9, 840.9, 176.2, 840.9, 182.6);
      ctx.lineTo(840.9, 204.6);
      ctx.bezierCurveTo(840.9, 211.1, 835.6, 216.4, 829.1, 216.4);
      ctx.lineTo(595.1, 216.4);
      ctx.bezierCurveTo(588.7, 216.4, 583.4, 211.1, 583.4, 204.6);
      ctx.lineTo(583.4, 182.6);
      ctx.bezierCurveTo(583.4, 176.2, 588.7, 170.9, 595.1, 170.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(116, 10, 10)";
      ctx.fill();

      // capa1/startButton/Grupo/Trazado compuesto
      ctx.beginPath();

      // capa1/startButton/Grupo/Trazado compuesto/Trazado
      ctx.moveTo(829.1, 171.1);
      ctx.bezierCurveTo(835.5, 171.1, 840.6, 176.3, 840.6, 182.6);
      ctx.lineTo(840.6, 204.6);
      ctx.bezierCurveTo(840.6, 211.0, 835.5, 216.1, 829.1, 216.1);
      ctx.lineTo(595.1, 216.1);
      ctx.bezierCurveTo(588.8, 216.1, 583.6, 211.0, 583.6, 204.6);
      ctx.lineTo(583.6, 182.6);
      ctx.bezierCurveTo(583.6, 176.3, 588.8, 171.1, 595.1, 171.1);
      ctx.lineTo(829.1, 171.1);

      // capa1/startButton/Grupo/Trazado compuesto/Trazado
      ctx.moveTo(829.1, 170.6);
      ctx.lineTo(595.1, 170.6);
      ctx.bezierCurveTo(588.5, 170.6, 583.1, 176.0, 583.1, 182.6);
      ctx.lineTo(583.1, 204.6);
      ctx.bezierCurveTo(583.1, 211.3, 588.5, 216.6, 595.1, 216.6);
      ctx.lineTo(829.1, 216.6);
      ctx.bezierCurveTo(835.8, 216.6, 841.1, 211.3, 841.1, 204.6);
      ctx.lineTo(841.1, 182.6);
      ctx.bezierCurveTo(841.1, 176.0, 835.8, 170.6, 829.1, 170.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(121, 3, 3)";
      ctx.fill();

      // capa1/startButton/Grupo
      ctx.restore();
      ctx.globalAlpha = alpha * 1.00;

      // capa1/startButton/Grupo/Press ENTER to Sta
      ctx.save();
      ctx.font = "24.0px 'Impact'";
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fillText("Press ENTER to Sta", 615.7, 200.4);

      // capa1/startButton/Grupo/r
      ctx.fillText("r", 792.2, 200.4);

      // capa1/startButton/Grupo/t
      ctx.fillText("t", 801.2, 200.4);

      // capa1/keyboard
      ctx.restore();
      ctx.restore();

      // capa1/keyboard /keyboardUp
      ctx.save();

      // capa1/keyboard /keyboardUp /Trazado
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(702.2, 374.1);
      ctx.lineTo(722.2, 374.1);
      ctx.bezierCurveTo(728.9, 374.1, 734.2, 379.5, 734.2, 386.1);
      ctx.lineTo(734.2, 406.1);
      ctx.bezierCurveTo(734.2, 412.8, 728.9, 418.1, 722.2, 418.1);
      ctx.lineTo(702.2, 418.1);
      ctx.bezierCurveTo(695.6, 418.1, 690.2, 412.8, 690.2, 406.1);
      ctx.lineTo(690.2, 386.1);
      ctx.bezierCurveTo(690.2, 379.5, 695.6, 374.1, 702.2, 374.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 50, 50)";
      ctx.fill();
      ctx.strokeStyle = "rgb(255, 255, 255)";
      ctx.stroke();

      // capa1/keyboard /keyboardUp /Trazado
      ctx.beginPath();
      ctx.moveTo(717.2, 395.6);
      ctx.lineTo(713.7, 395.6);
      ctx.lineTo(713.7, 405.6);
      ctx.lineTo(710.7, 405.6);
      ctx.lineTo(710.7, 395.6);
      ctx.lineTo(707.2, 395.6);
      ctx.lineTo(712.2, 387.0);
      ctx.lineTo(717.2, 395.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // capa1/keyboard /keyboardDown
      ctx.restore();
      ctx.globalAlpha = alpha * 0.15;

      // capa1/keyboard /keyboardDown /Trazado
      ctx.save();
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();
      ctx.moveTo(722.2, 462.1);
      ctx.lineTo(702.2, 462.1);
      ctx.bezierCurveTo(695.6, 462.1, 690.2, 456.8, 690.2, 450.1);
      ctx.lineTo(690.2, 430.1);
      ctx.bezierCurveTo(690.2, 423.5, 695.6, 418.1, 702.2, 418.1);
      ctx.lineTo(722.2, 418.1);
      ctx.bezierCurveTo(728.9, 418.1, 734.2, 423.5, 734.2, 430.1);
      ctx.lineTo(734.2, 450.1);
      ctx.bezierCurveTo(734.2, 456.8, 728.9, 462.1, 722.2, 462.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 50, 50)";
      ctx.fill();
      ctx.strokeStyle = "rgb(255, 255, 255)";
      ctx.stroke();

      // capa1/keyboard /keyboardDown /Trazado
      ctx.beginPath();
      ctx.moveTo(707.2, 440.6);
      ctx.lineTo(710.7, 440.6);
      ctx.lineTo(710.7, 430.6);
      ctx.lineTo(713.7, 430.6);
      ctx.lineTo(713.7, 440.6);
      ctx.lineTo(717.2, 440.6);
      ctx.lineTo(712.2, 449.3);
      ctx.lineTo(707.2, 440.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // capa1/keyboard /keyboardLeft
      ctx.restore();
      ctx.globalAlpha = alpha * 1.00;

      // capa1/keyboard /keyboardLeft /Trazado
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(690.2, 430.1);
      ctx.lineTo(690.2, 450.1);
      ctx.bezierCurveTo(690.2, 456.8, 684.9, 462.1, 678.2, 462.1);
      ctx.lineTo(658.2, 462.1);
      ctx.bezierCurveTo(651.6, 462.1, 646.2, 456.8, 646.2, 450.1);
      ctx.lineTo(646.2, 430.1);
      ctx.bezierCurveTo(646.2, 423.5, 651.6, 418.1, 658.2, 418.1);
      ctx.lineTo(678.2, 418.1);
      ctx.bezierCurveTo(684.9, 418.1, 690.2, 423.5, 690.2, 430.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 50, 50)";
      ctx.fill();
      ctx.strokeStyle = "rgb(255, 255, 255)";
      ctx.stroke();

      // capa1/keyboard /keyboardLeft /Trazado
      ctx.beginPath();
      ctx.moveTo(667.7, 445.1);
      ctx.lineTo(667.7, 441.6);
      ctx.lineTo(677.7, 441.6);
      ctx.lineTo(677.7, 438.6);
      ctx.lineTo(667.7, 438.6);
      ctx.lineTo(667.7, 435.1);
      ctx.lineTo(659.1, 440.1);
      ctx.lineTo(667.7, 445.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // capa1/keyboard /keyboardRight
      ctx.restore();

      // capa1/keyboard /keyboardRight /Trazado
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(778.2, 430.1);
      ctx.lineTo(778.2, 450.1);
      ctx.bezierCurveTo(778.2, 456.8, 772.9, 462.1, 766.2, 462.1);
      ctx.lineTo(746.2, 462.1);
      ctx.bezierCurveTo(739.6, 462.1, 734.2, 456.8, 734.2, 450.1);
      ctx.lineTo(734.2, 430.1);
      ctx.bezierCurveTo(734.2, 423.5, 739.6, 418.1, 746.2, 418.1);
      ctx.lineTo(766.2, 418.1);
      ctx.bezierCurveTo(772.9, 418.1, 778.2, 423.5, 778.2, 430.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(50, 50, 50)";
      ctx.fill();
      ctx.strokeStyle = "rgb(255, 255, 255)";
      ctx.stroke();

      // capa1/keyboard /keyboardRight /Trazado
      ctx.beginPath();
      ctx.moveTo(756.7, 445.1);
      ctx.lineTo(756.7, 441.6);
      ctx.lineTo(746.7, 441.6);
      ctx.lineTo(746.7, 438.6);
      ctx.lineTo(756.7, 438.6);
      ctx.lineTo(756.7, 435.1);
      ctx.lineTo(765.4, 440.1);
      ctx.lineTo(756.7, 445.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // capa1/How to Play
      ctx.restore();
      ctx.restore();
      ctx.font = "24.0px 'Impact'";
      ctx.fillText("How to Play:", 435.5, 266.6);

      // capa1/Grupo

      // capa1/Grupo/NinjaCat wants to be one of the greatest Ninja on earth Help
      ctx.save();
      ctx.font = "14.0px 'Courier New'";
      ctx.fillText("NinjaCat wants to be one of the greatest Ninja on earth. Help", 435.5, 299.3);

      // capa1/Grupo/him to survive the
      ctx.fillText("him to survive the ", 435.5, 316.1);

      // capa1/Grupo/Master Training
      ctx.font = "Bold 14.0px 'Courier New'";
      ctx.fillText("Master Training", 595.1, 316.1);

      // capa1/Grupo/to become an
      ctx.font = "14.0px 'Courier New'";
      ctx.fillText(" to become an ", 721.1, 316.1);

      // capa1/Grupo/IronNinja
      ctx.font = "Bold 14.0px 'Courier New'";
      ctx.fillText("IronNinja.", 838.7, 316.1);

      // capa1/Grupo/Use your keyboard to move NinjaCat to keep him safe
      ctx.font = "14.0px 'Courier New'";
      ctx.fillText("Use your keyboard to move NinjaCat, to keep him safe.  ", 435.5, 349.7);

      // capa1/Archivo enlazado
      ctx.restore();
      ctx.save();
      ctx.transform(1.920, 0.000, -0.000, 1.920, 238.3, 238.3);
      ctx.drawImage(document.getElementById("image2"), -12.0, -15.0);
      ctx.restore();

      // capa1/Grupo

      // capa1/Grupo/N
      ctx.save();
      ctx.font = "57.3px 'Shojumaru'";
      ctx.fillText("N", 547.4, 64.6);

      // capa1/Grupo/i
      ctx.fillText("i", 598.4, 64.6);

      // capa1/Grupo/nj
      ctx.fillText("nj", 618.9, 64.6);

      // capa1/Grupo/a
      ctx.fillText("a", 700.4, 64.6);

      // capa1/Grupo/C
      ctx.fillText("C", 747.6, 64.6);

      // capa1/Grupo/a
      ctx.fillText("a", 794.1, 64.6);

      // capa1/Grupo/t
      ctx.fillText("t", 840.0, 64.6);

      // capa1/Grupo/Traini
      ctx.fillText("Traini", 557.0, 133.3);

      // capa1/Grupo/n
      ctx.fillText("n", 777.4, 133.3);

      // capa1/Grupo/g
      ctx.fillText("g", 823.9, 133.3);
      ctx.restore();
      ctx.restore();
    };
