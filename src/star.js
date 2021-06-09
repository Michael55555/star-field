class Star {
  constructor(v, x, y) {
    this.v = v || Math.random() * 2 + 5;
    this.r = Math.random() * 80;
    this.startR = this.r;
    this.a = Math.random() * Math.PI * 2;
  }

  move() {
    this.r += (this.v + (this.r - this.startR) * 0.4) * 0.1;
  }

  draw(ctx) {
    let offsetY = innerHeight / 2;
    let offsetX = innerWidth / 2;
    let x = this.x;
    let y = this.y;
    const radius = 2;

    ctx.moveTo(x, y);
    ctx.arc(x, y, radius, 0, Math.PI * 2);

    this.drawTray(ctx);
  }

  drawTray(ctx) {
    ctx.strokeStyle = "#AAA";

    let offsetX = innerWidth / 2;
    let offsetY = innerHeight / 2;

    let x1 = Math.sin(this.a) * Math.pow(this.r, 0.95) + offsetX;
    let y1 = Math.cos(this.a) * Math.pow(this.r, 0.95) + offsetY;

    let x2 = Math.sin(this.a) * this.r + offsetX;
    let y2 = Math.cos(this.a) * this.r + offsetY;

    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  get x() {
    let offsetX = innerWidth / 2;

    return Math.sin(this.a) * this.r + offsetX;
  }

  get y() {
    let offsetY = innerHeight / 2;

    return Math.cos(this.a) * this.r + offsetY;
  }
}

export default Star;
