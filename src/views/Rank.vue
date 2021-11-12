<script setup>
import { ref } from "vue";
import "../assets/css/component.css";

const lists = ref();
</script>

<template>
  <main>
    <ul id="stack_iskandar" class="stack stack--iskandar">
      <li class="stack__item" v-for="v of lists" :key="v.name"></li>
    </ul>
  </main>
</template>
