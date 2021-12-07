import { shuffle } from "../plugins/shuffle";

const Colors = Object.freeze(["#F44336", "#4CAF50", "#FFEB3B", "#2196F3"]);
let ColorsIndex = [0, 1, 2, 3]; //对应Colors每一种颜色的四个下标
const ColorsNumber = [6, 6, 6, 6]; //对应Colors每一种颜色的数量
const Basics = Object.freeze({ R: 4, C: 6, L: 72 });

export default class BlockPair {
  constructor(W, H) {
    this.W = W;
    this.H = H;
    this.save = null;
    this.blocks = [];
  }

  render = () => {
    this.blocks = this.L3Block();
    const { ctx, L, blocks } = this;
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 2;
    console.log(blocks);
    for (const b of blocks) {
      ctx.fillStyle = b.c;
      ctx.fillRect(b.x, b.y, L, L);
      ctx.strokeRect(b.x, b.y, L, L);
    }
    return this;
  };

  resize = (W = this.W, H = this.H) => {
    if (W > H) {
      this.X = Basics.C;
      this.Y = Basics.R;
    } else {
      this.X = Basics.R;
      this.Y = Basics.C;
    }
    this.L = Math.floor(Math.min(Basics.L, W / this.X, H / this.Y));
    this.OX = (W - this.X * this.L) / 2;
    this.OY = (H - this.Y * this.L) / 2;
    this.ctx.translate(this.OX, this.OY);
    return this;
  };

  L3Block = () => {
    const { L } = this;
    const result = [];
    let coReIndex;
    for (let i = 0; i < 4; i++) {
      const position = Math.floor(Math.random() * 2);
      const X0 = (i % 2) * 2;
      const Y0 = Math.floor(i / 2) * 3;
      for (let j = 0; j < 2; j++) {
        ColorsIndex = ColorsIndex.filter((num) => {
          return ColorsNumber[num] > 0;
        });
        coReIndex = ColorsIndex.filter((num) => {
          return ColorsNumber[num] > 1;
        });
        console.log(ColorsIndex);
        console.log(coReIndex);
        console.log(ColorsNumber);
        console.log("--------------------");
        let colorsIndex = shuffle(ColorsIndex);
        // console.log(colorsIndex);
        //重复颜色的下标
        const repeatIndex = coReIndex.splice(
          Math.floor(Math.random() * colorsIndex.length),
          1
        )[0];
        coReIndex = [];
        // console.log(repeatIndex);
        colorsIndex.splice(colorsIndex.indexOf(repeatIndex), 1);
        //不重复颜色的下标
        const unRepeatIndex = colorsIndex.splice(
          Math.floor(Math.random() * colorsIndex.length),
          1
        )[0];
        // console.log(unRepeatIndex);
        //将选出的颜色按重复、不重复的顺序写成数组
        const select = [Colors[repeatIndex], Colors[unRepeatIndex]];
        //减去使用过的颜色
        ColorsNumber[repeatIndex] -= 2;
        ColorsNumber[unRepeatIndex] -= 1;
        // console.log(ColorsNumber);
        const direction = Math.floor(Math.random() * 2);
        result.push(
          /* 
          {
            x: X0 * L,
            y: (Y0 + j * 2) * L,
            c: select[(position & direction) ^ repeat],
          },
          {
            x: (X0 + 1) * L,
            y: (Y0 + j * 2) * L,
            c: select[(position | direction) ^ repeat ^ 1],
          },
          {
            x: (X0 + (position ^ j)) * L,
            y: (Y0 + 1) * L,
            c: select[(position | direction) ^ repeat],
          }
          */
          {
            x: X0 * L,
            y: (Y0 + j * 2) * L,
            c: select[position ^ j ? 1 ^ direction : 0],
          },
          {
            x: (X0 + 1) * L,
            y: (Y0 + j * 2) * L,
            c: select[position ^ j ? 0 : 1 ^ direction],
          },
          {
            x: (X0 + (position ^ j)) * L,
            y: (Y0 + 1) * L,
            c: select[0 ^ direction],
          }
        );
      }
    }
    return result;
  };

  clear = (b, save) => {
    const { ctx, L, blocks } = this;
    const minX = Math.min(b.x, save.x);
    const maxX = Math.max(b.x, save.x);
    const minY = Math.min(b.y, save.y);
    const maxY = Math.max(b.y, save.y);
    let flag = true;
    const inners = [];
    for (let i = 0; i < blocks.length; i++) {
      const inner = blocks[i];
      inners.push(i);
      if (
        inner.c !== save.c &&
        inner.x >= minX &&
        inner.x <= maxX &&
        inner.y >= minY &&
        inner.y <= maxY
      ) {
        flag = false;
        break;
      }
    }
    if (flag) {
      for (const index of inners) blocks.splice(index, 1);
      ctx.clearRect(minX, minY, maxX + L - minX, maxY + L - minY);
    }
  };

  Click = ({ clientX, clientY }) => {
    const { ctx, L, blocks, OX, OY, save } = this;
    clientX -= OX;
    clientY -= OY;
    for (const b of blocks) {
      if (
        clientX >= b.x &&
        clientX <= b.x + L &&
        clientY >= b.y &&
        clientY <= b.y + L
      ) {
        if (!save) {
          ctx.strokeStyle = "#00BCD4";
          ctx.strokeRect(b.x, b.y, L, L);
          this.save = b;
        } else if (save !== b) {
          ctx.strokeStyle = "#333";
          ctx.strokeRect(save.x, save.y, L, L);
          this.save = null;
          if (save.c === b.c) this.clear(b, save);
        }
        break;
      }
    }
  };
}
