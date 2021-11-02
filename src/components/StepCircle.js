import Particle from "./Particle";

export default class StepCircle {
  static RadiusReduce = 0.8;
  static Color = "white";

  constructor(radius, ctx) {
    this.radius = radius;
    this.ctx = ctx;
    this.particles = [new Particle(radius, ctx)];
  }

  render() {
    const { ctx, radius, particles } = this;
    ctx.beginPath();
    ctx.strokeStyle = StepCircle.Color;
    ctx.shadowColor = StepCircle.Color;
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.stroke();
    for (const particle of particles) particle.render();
  }

  increase() {
    this.radius -= StepCircle.RadiusReduce;
    for (const particle of this.particles) particle.offset = this.radius;
    return this.radius <= 0;
  }
}
