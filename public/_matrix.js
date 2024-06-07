// get Box
var Outerbox = document.querySelector('.aboutHeader')

// get style + colors
const computedStyle = window.getComputedStyle(Outerbox);
var fg = computedStyle.getPropertyValue('color');
var bg = computedStyle.getPropertyValue('background-color').replace(/rgb/i, "rgba").replace(/\)/i,', .1)');

console.log(bg)
// Initialising the canvas
var canvas = document.querySelector('canvas'),
  ctx = canvas.getContext('2d');

// Initialising some vars
let fontSize = 15;
let font = `Arial`;
let columns = canvas.width / fontSize;
var drops = [];

// getting some functions

function setWandH() {
  console.log("set Width and Height of Matrix")
  var height = Outerbox.offsetHeight;
  var width = Outerbox.offsetWidth;
  canvas.width = width;
  canvas.height = height;
  // Setting up the columns
  columns = width / fontSize;

  // Setting up the drops
  for (var i = 0; i < columns; i++) {
    drops[i] = 1;
  }
}

// Setting up the letters
var letters = 'ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ012345789:・."=*+-<>Z¦｜çﾘｸ';
letters = letters.split('');

// Setting up the draw function
function draw() {
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = fg;
    ctx.font = `${fontSize}px ${font}`
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

// Keep size correct
window.onresize = setWandH;
window.addEventListener("resize", setWandH);

window.onload = setWandH;
addEventListener("load", setWandH);

window.onpageshow = setWandH;
addEventListener("pageshow", setWandH);

setWandH()
setInterval(draw, 33);


