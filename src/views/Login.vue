<script setup>
import Button from "../components/Button.vue";
import Input from "../components/Input.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const nick = ref("");
const password = ref("");
const Click = () => {
  // 登录api操作
  router.push("/");
};
</script>

<template>
  <main class="flex direction">
    <img width="270" src="../assets/image/title.png" />
    <section>
      <Input label="昵称" v-model="nick" />
      <Input label="密码" type="password" v-model="password" />
    </section>
    <Button @click="Click">登录 / 注册</Button>
  </main>
</template>

<style scoped>
.direction {
  padding: 30px 30px 60px;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-around;
}
</style>
