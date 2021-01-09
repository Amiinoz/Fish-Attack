// Canvas set up
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.heigh = 500;


let score = 0;
let gameFrame = 0;
ctx.font = '50px Arial';

// Mouse Interaction
// get the correct mouse position
let canvasPosition = canvas.getBoundingClientRect();
const mouse = {
  x: canvas.width/2,
  y: canvas.height/2,
  click: false
}
canvas.addEventListener('mousedown', function(event) {
  mouse.x = event.x - canvasPosition.left;
  mouse.y = event.y - canvasPosition.top;
  // console.log(event);
  // console.log(mouse.x, mouse.y);
  // console.log(canvasPosition);
})
// Players
// Animation loop
