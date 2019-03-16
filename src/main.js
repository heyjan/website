import Vue from 'vue';
import App from './App.vue';
import './assets/css/style.css';
import './assets/css/bootstrap.css';
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  el: '#app',
  render: h => h(App),
});