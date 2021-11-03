<script setup>
import Button from "../components/Button.vue";
import Input from "../components/Input.vue";
import { ref } from "vue";

const nick = ref("");
const password = ref("");
</script>

<template>
  <main>
    <img class="title" src="../assets/image/title.png" />
    <Input label="昵称" v-model="nick" />
    <Input label="密码" type="password" v-model="password" />
    <Button>登录 / 注册</Button>
  </main>
</template>

<style scoped>
.title {
  display: block;
  margin: 30px auto;
  width: 240px;
}
</style>
