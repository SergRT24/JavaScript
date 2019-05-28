var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var position = 0;
var size = 0
setInterval(function(){
  ctx.clearRect(0, 0, 400, 400);
  ctx.fillRect(position, 0, size, size);

  size = size + 1;

  if(size > 400){
    size = 0;
  }
}, 30);
