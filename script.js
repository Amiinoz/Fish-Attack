// Canvas set up
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.heigh = 500;

let score = 0;
let gameFrame = 0;
ctx.font = '50px Arial';

// Capture mouse position
// Players
// Animation loop