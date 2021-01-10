// Canvas set up
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.heigh = 500;

let score = 0;
let gameFrame = 0;
ctx.font = "50px Arial";

// Mouse Interaction
// get the correct mouse position
let canvasPosition = canvas.getBoundingClientRect();
const mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  click: false,
};
canvas.addEventListener("mousedown", (event) => {
  mouse.click = true;
  mouse.x = event.x - canvasPosition.left;
  mouse.y = event.y - canvasPosition.top;
  // console.log(event);
  // console.log(mouse.x, mouse.y);
  // console.log(canvasPosition);
});
canvas.addEventListener("mouseup", () => {
  mouse.click = false;
});

// Players
class Player {
  constructor() {
    this.x = canvas.width;
    this.y = canvas.height / 2;
    this.radius = 50;
    this.angle = 0;
    this.frameX = 0;
    this.frameY = 0;
    this.frame = 0;
    this.spriteWidth = 498;
    this.spriteHeight = 327;
  }

  update() {
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    if (mouse.x != this.x) {
      // this.x--;
      this.x -= dx / 30;
    }
    if (mouse.y != this.y) {
      // this.y--;
      this.y -= dy / 30;
    }
  }

  draw() {
    if (mouse.click) {
      ctx.lineWidth = 0.2;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }
    // Player Character
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.fillRect(this.x, this.y, this.radius, 10);
  }
}

const player = new Player();
// Animation loop
function animate() {
  // clearing canvas between animation
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  player.draw();
  // using recursion(where function calls it's self over and over again)
  requestAnimationFrame(animate);
}
animate();
