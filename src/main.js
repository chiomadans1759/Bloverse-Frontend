import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAnalytics from 'vue-analytics';


import routes from '../routes'
import App from './App.vue'

// import lang from 'iview/dist/locale/en-US';

import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(VueAnalytics, {
  id: 'UA-126813609-1',
  router
})
Vue.config.productionTip = false


// Routing logic
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


ga('set', 'page', router.currentRoute.path);
ga('send', 'pageview');

router.afterEach(( to, from ) => {
  ga('set', 'page', to.path);
  ga('send', 'pageview');
});