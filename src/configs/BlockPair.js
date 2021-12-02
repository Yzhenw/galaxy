import { shuffle } from "../plugins/shuffle";

const Colors = Object.freeze(["red", "green", "yellow", "blue"]);
const B = Object.freeze({ R: 4, C: 6, L: 72 });

export default class BlockPair {
  constructor(ctx, W, H) {
    this.ctx = ctx;
    this.W = W;
    this.H = H;

    ctx.save();
    this.resize(W, H);
  }

  render = () => {
    const { ctx, L, X, Y } = this;
    const result = this.L3Block();
    return this;
  };

  resize = (W = this.W, H = this.H) => {
    if (W > H) {
      this.X = B.C;
      this.Y = B.R;
    } else {
      this.X = B.R;
      this.Y = B.C;
    }
    this.L = Math.floor(Math.min(B.L, W / this.X, H / this.Y));
    const OX = (W - this.X * this.L) / 2;
    const OY = (H - this.Y * this.L) / 2;
    this.ctx.restore();
    this.ctx.translate(OX, OY);
    return this;
  };

  L3Block = () => {
    const colors = shuffle(Colors);
    const l = colors.length;
    const result = [];
    for (let i = 0; i < 4; i++) {
      const position = Math.floor(Math.random() * 2);
      for (let j = 0; j < 2; j++) {
        const select = [
          colors[Math.floor(Math.random() * 4)],
          colors[Math.floor(Math.random() * 4)],
        ];
        const repeat = Math.floor(Math.random() * 2);
        const direction = Math.floor(Math.random() * 2);
        result.push({});
      }
    }
    return result;
  };
}
