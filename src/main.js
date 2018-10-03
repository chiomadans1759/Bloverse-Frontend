import Vue from 'vue'
import axios from 'axios';
import { locale, Message } from 'iview';
import lang from 'iview/dist/locale/en-US';
import VueRouter from 'vue-router';
import store from '../stores';


import routes from '../routes'
import App from './App.vue'

// import lang from 'iview/dist/locale/en-US';

import 'iview/dist/styles/iview.css';


// configure language
locale(lang);


Vue.prototype.$IVIEW = {};
Vue.prototype.$http = axios;
Vue.prototype.$Message = Message;

Vue.use(VueRouter);
Vue.config.productionTip = false


// Routing logic
const router = new VueRouter({
  routes
})

Vue.filter('toUpperCase', (value) => {
  if (!value) return '';
  value = value.toString();
  return value.toUpperCase();
});

Vue.filter('firstToUpper', (value) => {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.substr(1);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
