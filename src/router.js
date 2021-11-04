import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Rank from "./views/Rank.vue";
import Game from "./views/Game.vue";
import Info from "./views/Info.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/Game", component: Game },
  { path: "/login", component: Login },
  { path: "/rank", component: Rank },
  { path: "/info", component: Info },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
