import Vue from "vue";
import { Button, Layout, Input, Col, Row, List } from 'ant-design-vue';
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(Layout);
Vue.use(Button);
Vue.use(Input);
Vue.use(Col);
Vue.use(Row);
Vue.use(List);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
