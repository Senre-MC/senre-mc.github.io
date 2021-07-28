var img_small;
var img_large;
var prep = 0;
var zoom = 0;

var drawSText = function(text, x, y) {
  var ax = 0, ay = 0, sx = 0, sy = 0;
  for(var i=0;i<text.length;i++) {
    if(text.charAt(i) === '\n') {
      ax = 0;
      ay++;
    } else {
      sx = text.charCodeAt(i);
      sy = sx >> 4;
      sx &= 15;
      sx <<= 4;
      sy <<= 4;
      if(text.charAt(i) !== ' ') {
        this.drawImage(img_small, sx, sy, 16, 16, x + (ax << 4 >> zoom), y + (ay << 4 >> zoom), 16 >> zoom, 16 >> zoom);
      }
      ax++;
    }
  }
}

var drawBText = function(text, x, y) {
  var ax = 0, ay = 0, sx = 0, sy = 0;
  for(var i=0;i<text.length;i++) {
    if(text.charAt(i) === '\n') {
      ax = 0;
      ay++;
    } else {
      sx = text.charCodeAt(i);
      sy = sx >> 4;
      sx &= 15;
      sx <<= 4;
      sy <<= 5;
      if(text.charAt(i) !== ' ') {
        this.drawImage(img_large, sx, sy, 16, 32, x + (ax << 4 >> zoom), y + (ay << 5 >> zoom), 16 >> zoom, 32 >> zoom);
      }
      ax++;
    }
  }
}

var initializeAll = function(ctx, run) {
  img_small = new Image();
  img_small.src = "small.png";
  img_small.onload = function() {
    prep++;
    if(prep === 2) {run();}
  }
  img_large = new Image();
  img_large.src = "large.png";
  img_large.onload = function() {
    prep++;
    if(prep === 2) {run();}
  }
  ctx.drawSFont = drawSText;
  ctx.drawBFont = drawBText;
}
