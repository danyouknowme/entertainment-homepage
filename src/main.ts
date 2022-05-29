import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

import "./index.scss";
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
