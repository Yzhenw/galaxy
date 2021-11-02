<script setup>
import { onMounted, ref } from "vue";
import CircleJump from "./components/CircleJump";
const WIDTH = ref(document.body.clientWidth);
const HEIGHT = ref(document.body.clientHeight);

onMounted(() => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const cj = new CircleJump(ctx, WIDTH.value, HEIGHT.value);
  cj.start();
});
</script>

<template>
  <canvas id="canvas" :width="WIDTH" :height="HEIGHT" />
</template>
