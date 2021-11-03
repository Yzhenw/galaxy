export default class PlayerCircle {
  static Color = "cyan";

  constructor(circles, ctx) {
    this.radius = 6;
    this.ctx = ctx;
    this.position = 0;
    this.circles = circles;
  }

  render() {
    const { ctx, radius, circles, position } = this;
    ctx.beginPath();
    ctx.fillStyle = PlayerCircle.Color;
    ctx.shadowColor = PlayerCircle.Color;
    const l = circles[position].radius;
    ctx.arc(0, l, radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
