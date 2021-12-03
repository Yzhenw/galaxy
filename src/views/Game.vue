<script setup>
import { onMounted } from "vue";
import BlockPair from "../configs/BlockPair";
const W = document.documentElement.clientWidth;
const H = document.documentElement.clientHeight;

let blockpair = new BlockPair(W, H);

onMounted(() => {
  const canvas = document.getElementById("canvas");
  blockpair.ctx = canvas.getContext("2d");
  blockpair.resize(W, H).render();

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
      blockpair.resize(clientWidth, clientHeight).render();
    }
  );
});
</script>

<template>
  <canvas id="canvas" @click="blockpair.Click" :width="W" :height="H" />
</template>
