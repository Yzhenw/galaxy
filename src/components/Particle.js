export default class Particle {
  static Color = "red";
  constructor(offset, ctx) {
    this.ctx = ctx;
    this.offset = offset;
    this.radius = 4;
  }

  render() {
    const { offset, ctx, radius } = this;
    ctx.beginPath();
    ctx.fillStyle = Particle.Color;
    ctx.shadowColor = Particle.Color;
    ctx.arc(offset, 0, radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
