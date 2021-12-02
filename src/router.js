import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Rank from "./views/Rank.vue";
import Game from "./views/Game.vue";
import Info from "./views/Info.vue";

const routes = [
  // { path: "/", name: "Home", component: Home },
  { path: "/", name: "Game", component: Game },
  { path: "/login", name: "Login", component: Login },
  { path: "/rank", name: "Rank", component: Rank },
  { path: "/info", name: "Info", component: Info },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from) => {
//   // if(to.name !== "Login"  )
//   console.log(to, from);
// });

export default router;
