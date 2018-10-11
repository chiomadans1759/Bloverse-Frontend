import Vue from 'vue'
import axios from 'axios';
import { locale, Message, LoadingBar } from 'iview';
import lang from 'iview/dist/locale/en-US';
import VueRouter from 'vue-router';
import store from '../stores';
import VueAnalytics from 'vue-analytics';
import VueGoodshare from "vue-goodshare";


import routes from '../routes'
import App from './App.vue'

// import lang from 'iview/dist/locale/en-US';

import 'iview/dist/styles/iview.css';


// configure language
locale(lang);


Vue.prototype.$IVIEW = {};
Vue.prototype.$http = axios;
Vue.prototype.$Message = Message;
Vue.prototype.$Loading = LoadingBar;


Vue.use(VueRouter);
Vue.use(VueGoodshare)
Vue.use(VueAnalytics, {
  id: 'UA-126813609-1',
  router
})
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


ga('set', 'page', router.currentRoute.path);
ga('send', 'pageview');

/*router.beforeEach((to, from, next) => {
  LoadingBar.start();
  next();
});*/

router.afterEach(( to, from, next) => {
  ga('set', 'page', to.path);
  ga('send', 'pageview');
  //LoadingBar.finish();
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
