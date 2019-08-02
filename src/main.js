import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/tailwind.css";
import "vue2-toast/lib/toast.css";

import Toast from "vue2-toast";

Vue.use(Toast);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
