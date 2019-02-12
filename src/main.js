import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import './assets/css/bootstrap.css'
import VueRouter from 'vue-router'
import LoginPage from './components/LoginPage.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '', component: App},
    { path: '/login', component: LoginPage},
    { path: '*', component: { template: '<h1>Page not Found</h1>>'}}
  ],
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
    router: router
})