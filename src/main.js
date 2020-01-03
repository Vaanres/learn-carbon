import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import CarbonComponentsVue from "@carbon/vue";
import { createProvider } from "./vue-apollo";
Vue.use(CarbonComponentsVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
