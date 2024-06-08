// some function to change rgb to rgba
function rgbtorgba(rgb, opacity) {
  // Get the RGB values
  const rgb_values_raw = rgb.match(/^rgb\((\d+), (\d+), (\d+)\)$/);

  // Check if there is a match.
  if (!rgb_values_raw) {
    console.log(`RGBtoRGBA | ERROR | Invalid RGB format`)
    return "Invalid RGB format";
  }

  // Attempt to convert each value to a number using Number().
  let _, r, g, b;
  try {
    [_, r, g, b] = rgb_values_raw.map(Number);
  } catch (error) {
    console.log(`RGBtoRGBA | ERROR | Failed to convert to RGBA`)
    return "Failed to convert each value to a number";
  }

  // Clamp the opacity value between 0.0 and 1.0.
  opacity = Math.max(0.0, Math.min(1.0, opacity));

  // Return the rgba string using template literal.
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function getGradientPercentage(topHeight, bottomHeight, itemHeight) {
  // Check for valid input (avoid division by zero)
  if (topHeight <= 0 || bottomHeight <= 0 || itemHeight < 0) {
    return "Invalid input. Values must be positive.";
  }

  // get the total Height
  const totalHeight = topHeight + bottomHeight;

  console.log(`TOP: ${topHeight} | BOTTOM: ${bottomHeight} | ITEM: ${itemHeight}`)

  // Calculate the distance between the line and the bottom of the short section
  const distanceFromLine = bottomHeight - (totalHeight - itemHeight);
  console.log(`distanceFromLine: ${distanceFromLine}`)
  // check if bellow line 
  const isBelow = distanceFromLine > 0;
  if (!isBelow) return 1;

  // Ensure distance is non-negative (item below or at line level)
  //const clampedDistance = Math.max(distanceFromLine, 0);

  // Calculate the percentage based on the distance from line then invert the percentage
  const InvertedPercentage = (distanceFromLine / bottomHeight) * 100;
  const Percentage = 100 - InvertedPercentage;

  // Round the percentage to two decimal places (optional)
  return Percentage;
}

// get Box and Canvas overhang size
var Outerbox = document.querySelector('.aboutHeader')
var CanvasTop = Outerbox.offsetHeight / 2
var CanvasOverhang = Outerbox.offsetHeight / 2;

// get style + colors
const computedStyle = window.getComputedStyle(Outerbox);
var fg = computedStyle.getPropertyValue('color');
var bg_opaque = computedStyle.getPropertyValue('background-color');
var bg_translucent = rgbtorgba(bg_opaque, .1);      // computedStyle.getPropertyValue('background-color').replace(/rgb/i, "rgba").replace(/\)/i,', .1)');
var bg_transparent = rgbtorgba(bg_opaque, 0);
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
  const topColor = bg_opaque;
  const bottomColor = bg_translucent;
  const my_gradient = ctx.createLinearGradient(Outerbox.offsetWidth, CanvasTop + CanvasOverhang, Outerbox.offsetWidth, 0);
    my_gradient.addColorStop(0, topColor);
    my_gradient.addColorStop(0.4, bottomColor);
    my_gradient.addColorStop(1, bottomColor);
    
   
    
  ctx.fillStyle = my_gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var y = drops[i] * fontSize;

    if ( y >= CanvasTop ) { // Gradient stuff 
      const gradientPercent = getGradientPercentage(CanvasTop, CanvasOverhang, y);
      const gradient = Math.min(Math.max(gradientPercent/100, 0), 1);

      // console.log(`${gradientPercent}% == ${gradient}`)

      ctx.fillStyle = rgbtorgba(fg, gradient);
    } else {
      ctx.fillStyle = fg;
    }
    var text = letters[Math.floor(Math.random() * letters.length)];
    
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


