import Vue from 'vue'
import router from '../router'
import App from './App.vue'

import { locale, Message } from 'iview';
import lang from 'iview/dist/locale/en-US';

import 'iview/dist/styles/iview.css';


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
