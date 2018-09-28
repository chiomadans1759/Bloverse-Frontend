import Vue from 'vue'
import VueRouter from 'vue-router';


import routes from '../routes'
import App from './App.vue'
import iView from 'iview'

// import lang from 'iview/dist/locale/en-US';

import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);
Vue.config.productionTip = false


// Routing logic
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
