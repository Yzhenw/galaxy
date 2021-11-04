<script setup>
import { onMounted } from "vue";
import CircleJump from "../configs/CircleJump";
const WIDTH = document.body.clientWidth;
const HEIGHT = document.body.clientHeight;

onMounted(() => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const cj = new CircleJump(ctx, WIDTH, HEIGHT);
  cj.start();
});
</script>

<template>
  <canvas id="canvas" :width="WIDTH" :height="HEIGHT" />
</template>
