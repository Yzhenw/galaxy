<script setup>
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  to: { type: String, required: true },
});

const router = useRouter();

const Click = () => router.push(props.to);
</script>

<template>
  <section class="card theme-2" @click="Click">
    <p class="title">{{ title.slice(0, 2) }}<br />{{ title.slice(2, 4) }}</p>
    <p class="subtitle">{{ subtitle }}</p>
  </section>
</template>

<style scoped>
.card {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 30px;
}
.subtitle {
  font-size: 12px;
}
</style>
