<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
#app {
  background: url("./assets/background.jpg") top center/100vw 100vh fixed
    no-repeat;
}
#app,
main {
  min-height: 100vh;
  overflow: hidden;
  width: 100vw;
}
canvas {
  margin: 0 auto;
  display: block;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.fade-enter-active {
  transition: all 0.6s ease-out;
}
.fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter-from,
.fade-leave-to {
  transform-origin: left center;
  opacity: 0;
}
</style>
