import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import PrototypeI from "./views/PrototypeI.vue";
import PrototypeII from "./views/PrototypeII.vue";
import PrototypeIII from "./views/PrototypeIII.vue";
import ProductEnd from "./views/ProductEnd.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/productend",
      name: "ProductEnd",
      component: ProductEnd
    },
    {
      path: "/PrototypeI",
      name: "PrototypeI",
      component: PrototypeI
    },
    {
      path: "/PrototypeII",
      name: "PrototypeII",
      component: PrototypeII
    },
    {
      path: "/PrototypeIII",
      name: "PrototypeIII",
      component: PrototypeIII
    }
  ]
});
