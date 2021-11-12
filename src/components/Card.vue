<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  title: { type: String, required: true },
  to: { type: String, required: true },
  image: { type: String, required: true },
});

const plant = `url(${props.image})`;

const router = useRouter();
</script>

<template>
  <section class="card" :style="{ '--plant': plant }" @click="router.push(to)">
    <span>{{ title.slice(0, 2) }}<br />{{ title.slice(2, 4) }}</span>
  </section>
</template>

<style scoped>
.card {
  border-radius: 50%;
  width: 42px;
  height: 42px;
  margin: 20px;
  font-size: 8px;
  line-height: 9px;
  position: relative;
}
.card span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.card::before {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: url("../assets/image/card.png") center / cover no-repeat;
  z-index: 0;
}
.card::after {
  content: "";
  display: block;
  position: absolute;
  width: 6px;
  height: 6px;
  left: 6px;
  top: 6px;
  transform-origin: 15px 15px;
  background: var(--plant) center / cover no-repeat;
  animation: satellite 2s linear infinite;
}

@keyframes satellite {
  0% {
    transform: skewX(50deg) rotate(360deg) scale(1);
    z-index: 0;
  }
  25% {
    transform: skewX(50deg) rotate(270deg) scale(1.2);
    z-index: 10;
  }
  50% {
    transform: skewX(50deg) rotate(180deg) scale(1);
    z-index: 0;
  }
  75% {
    transform: skewX(50deg) rotate(90deg) scale(0.8);
    z-index: -10;
  }
  100% {
    transform: skewX(50deg) rotate(0deg) scale(1);
    z-index: 0;
  }
}
</style>
