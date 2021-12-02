<script setup>
import { onMounted } from "vue";
import BlockPair from "../configs/BlockPair";
// import CircleJump from "../configs/CircleJump";
const W = document.documentElement.clientWidth;
const H = document.documentElement.clientHeight;

onMounted(() => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // const cj = new CircleJump(ctx, WIDTH, HEIGHT);
  const cj = new BlockPair(ctx, W, H);
  cj.render();

  window.addEventListener(
    "resize",
    ({
      target: {
        document: {
          documentElement: { clientWidth, clientHeight },
        },
      },
    }) => {
      canvas.width = clientWidth;
      canvas.height = clientHeight;
      cj.resize(clientWidth, clientHeight).render();
    }
  );
});
</script>

<template>
  <canvas id="canvas" :width="W" :height="H" />
</template>
