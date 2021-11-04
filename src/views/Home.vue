<script setup>
import { onMounted } from "vue";
import Card from "../components/Card.vue";
import anime from "animejs";

const cards = [
  { title: "开始游戏", subtitle: "整起！拿奖！", to: "/game", x: 170 },
  { title: "游戏规则", subtitle: "没玩过可以来瞅瞅", to: "/rule", x: 80 },
  { title: "游戏排行", subtitle: "来膜一波大佬", to: "/rank", x: 270 },
  { title: "个人信息", subtitle: "实名认证后才可领奖哦~", to: "/info", x: 0 },
];

onMounted(() => {
  anime({
    targets: ".card",
    translateX: (el, i) => cards[i].x,
    translateY: (el, i) => 120 + 40 * i,
    scale: (el, i, l) => l - i + 0.25,
    duration: () => anime.random(1200, 1800),
    delay: () => anime.random(0, 400),
    rotate: () => anime.random(-360, 360),
    borderRadius: () => ["50%", anime.random(10, 35) + "%"],
  });
});
</script>

<template>
  <main>
    <Card
      v-for="c of cards"
      :key="c.to"
      :title="c.title"
      :subtitle="c.subtitle"
      :to="c.to"
    />
  </main>
</template>
