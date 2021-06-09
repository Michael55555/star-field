import Star from "./star.js";

let ctx = null;
let frame = 0;
let stars = Array(10)
  .fill()
  .map(() => new Star());

function init() {
  const canvas = document.querySelector("canvas");

  canvas.width = innerWidth;
  canvas.height = innerHeight;

  ctx = canvas.getContext("2d");
}

function draw() {
  ctx.fillStyle = "black";
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";

  if (frame % 3 == 0) {
    stars.push(new Star());
  }

  for (let star of stars) {
    ctx.beginPath();
    star.move();
    star.draw(ctx);
    ctx.fill();
  }

  stars = stars.filter((star) => {
    return (
      star.x < innerWidth && star.y < innerHeight && star.x > 0 && star.y > 0
    );
  });
}

function animate() {
  frame++;
  draw();
  requestAnimationFrame(animate);
}

onload = () => {
  init();
  animate();
};
