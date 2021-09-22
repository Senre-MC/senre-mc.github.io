var game = document.getElementById("game");
var ctx = game.getContext("2d");
// Game Variables

ctx.fillStyle="black";
ctx.fillRect(0, 0, game.width, game.height);
var pieces = new Uint8Array(65);

// Initialize Game
if(deviceTester() == Viewer.MOBILE) {
  ctx.fillStyle="white";
  ctx.font = "24px serif";
  ctx.fontBaseline = "top";
  ctx.fillText("Error: Desktop Only", 1, 1);
  game.innerText = "Error: Desktop Only\nThis requires the use of a keyboard, which is something that cannot be reliably used on a mobile device.";
} else {
  ctx.fillStyle="white";
  for(var i=0;i<9;i++) {
    ctx.fillRect(2,37*i,298,1);
    ctx.fillRect(2+37*i,0,298,1);
  }
  window.requestAnimationFrame(game_onStep);
}

// Begin Game
function game_onStep() {
  
}

function game_onClick({x, y}) {
  ctx.fillStyle="black";
  ctx.fillRect(0, 0, game.width, 30);
  ctx.fillStyle="white";
  ctx.fillText("Mouse: "+x+","+y, 0, 20);
}


