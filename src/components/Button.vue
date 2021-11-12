<script setup>
import "../assets/css/particles.css";
import Particles from "../plugins/particles";

import { onMounted } from "vue";

const emit = defineEmits(["click"]);

let particles = null;
onMounted(() => {
  particles = new Particles("button.particles-button", {
    type: "triangle",
    easing: "easeOutQuart",
    size: 6,
    particlesAmountCoefficient: 4,
    oscillationCoefficient: 2,
    color: () => (Math.random() < 0.5 ? "#f3f3f3" : "#3c2e9e"),
    complete: () => emit("click"),
    duration: 600,
  });
});

const Click = () => {
  particles.disintegrate();
};
</script>

<template>
  <div class="flex theme-2">
    <button class="particles-button" @click="Click">
      <slot />
    </button>
  </div>
</template>
