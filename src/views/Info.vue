<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue";
import Input from "../components/Input.vue";

const name = ref("");
const uid = ref("U");
const phone = ref("");

const Click = () => {};
</script>

<template>
  <main>
    <Input label="姓名" v-model="name" />
    <Input label="学号" v-model="uid" />
    <Input label="手机号" v-model="phone" />
    <Button @click="Click">确认</Button>
  </main>
</template>
