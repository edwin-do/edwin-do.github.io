import Vue from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(Vuesax);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
