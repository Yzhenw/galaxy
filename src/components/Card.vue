<script setup>
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import anime from "animejs";

const props = defineProps({
  title: { type: String, required: true },
  to: { type: String, required: true },
  image: { type: String, required: true },
});

const id = "satellite-" + props.to.slice(1);

// onMounted(() => {
//   const path = anime.path(`#${id}>path`);
//   anime({
//     targets: `#${id} image`,
//     translateX: path("x"),
//     translateY: path("y"),
//     rotate: path("angle"),
//     duration: () => anime.random(5000, 10000),
//     loop: true,
//     easing: "linear",
//   });
// });

const router = useRouter();
</script>

<template>
  <section class="card" @click="router.push(to)">
    <span>{{ title.slice(0, 2) }}</span>
    <span>{{ title.slice(2, 4) }}</span>
    <svg :id="id" width="40" height="40" viewBox="0 0 40 40">
      <image :href="props.image" x="0" y="0" width="6" height="6" />
    </svg>
  </section>
</template>

<style scoped>
.card {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 20px;
  background: url("../assets/image/card.png") center/cover no-repeat;
  font-size: 8px;
  line-height: 9px;
}
</style>
