<script setup>
import Particles from "../plugins/particles";
import { onMounted, ref } from "vue";

let particles = null;
onMounted(() => {
  particles = new Particles("button.particles-button", {
    type: "triangle",
    easing: "easeOutQuart",
    size: 6,
    particlesAmountCoefficient: 4,
    oscillationCoefficient: 2,
    color: "#ffffff",
  });
});

const Click = () => {
  particles.disintegrate();
};
</script>

<template>
  <div class="flex theme-2">
    <button class="particles-button" @click="Click"><slot /></button>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
