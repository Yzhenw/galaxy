import StepCircle from "./StepCircle";
import PlayerCircle from "./PlayerCircle";

export default class CircleJump {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.radius = 180;
    this.circles = [new StepCircle(this.radius, ctx)];
    this.circles.start = 0;
    this.player = new PlayerCircle(this.circles, ctx);
    this.timer = null;
    this.speed = {
      CirclesIncrease: 60,
      RadiusReduce: 0.8,
      CanvasRotate: Math.PI / 180,
    };
  }

  start() {
    const { ctx, width, height } = this;
    ctx.shadowBlur = 8;

    ctx.save();
    ctx.transform(1, Math.PI / 10, 0, 1, width / 2, height / 2);
    this.times = 0;

    window.addEventListener("click", () => {
      this.player.position += 1;
      this.stop();
    });

    this.timer = requestAnimationFrame(this.render);
  }

  render = () => {
    const { ctx, width, height, circles, radius, player, speed } = this;
    this.times += 1;
    if (this.times === speed.CirclesIncrease) {
      circles.push(new StepCircle(radius, ctx));
      this.times = 0;
    }
    ctx.clearRect(-width / 2, -height / 2, width, height);

    ctx.rotate(speed.CanvasRotate);
    for (let i = circles.start; i < circles.length; i++) {
      circles[i].render();
      if (circles[i].increase()) circles.start = i + 1;
    }
    player.render();

    this.timer = requestAnimationFrame(this.render);
    this.stop();
  };

  stop() {
    const { circles } = this;
    const { position } = this.player;

    if (position < circles.start || position >= circles.length)
      cancelAnimationFrame(this.timer);
  }

  accelerate() {}
}
