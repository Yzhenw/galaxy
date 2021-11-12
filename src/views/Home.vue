<script setup>
import { onMounted } from "vue";
import Card from "../components/Card.vue";
import anime from "animejs";

import plant1 from "../assets/image/plant-1.png";
import plant2 from "../assets/image/plant-2.png";
import plant3 from "../assets/image/plant-3.png";
import plant4 from "../assets/image/plant-4.png";

const cards = [
  { title: "开始游戏", to: "/game", image: plant1 },
  { title: "游戏排行", to: "/rank", image: plant3 },
  { title: "个人信息", to: "/info", image: plant4 },
  { title: "游戏规则", to: "/rule", image: plant2 },
];

onMounted(() => {
  anime({
    targets: ".card",
    translateX: (el, i) => [100, 250, 60, 190][i],
    translateY: (el, i) => 120 + 90 * i,
    scale: (el, i, l) => l - i + 0.6,
    duration: () => anime.random(1200, 1800),
    delay: () => anime.random(200, 600),
    rotate: (el, i, l) => 360 * (l - i + 3),
  });
});
</script>

<template>
  <main>
    <Card
      v-for="c of cards"
      :key="c.to"
      :title="c.title"
      :to="c.to"
      :image="c.image"
    />
  </main>
</template>
