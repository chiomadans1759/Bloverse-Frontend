import Vue from 'vue'
import axios from 'axios';
import { locale, Message, LoadingBar } from 'iview';
import GoogleAuth from 'vue-google-authenticator'
import lang from 'iview/dist/locale/en-US';
import moment from 'moment'
import infiniteScroll from "vue-infinite-scroll";
import SocialSharing from 'vue-social-sharing';
import VueHead from 'vue-head'
import Meta from 'vue-meta';
import router from '../routes/index.js';
import App from './App.vue'

import {initialize} from '@/utils/general.js';

import 'iview/dist/styles/iview.css';

import '@fortawesome/fontawesome-pro/css/all.css';
import '@fortawesome/fontawesome-pro/js/all.js';

import store from '../stores';

Vue.use(GoogleAuth, {
  client_id: '966117903311-1fk401e4fiks3u34nsputljh7smgckor.apps.googleusercontent.com'
})
Vue.googleAuth().load()
Vue.googleAuth().directAccess()
Vue.use(VueHead)
Vue.use(infiniteScroll);

// configure language
locale(lang);

Vue.prototype.$IVIEW = {};
Vue.prototype.$http = axios;
Vue.prototype.$Message = Message;
Vue.prototype.$Loading = LoadingBar;
Vue.prototype.$BASE_URL = process.env.VUE_APP_URL

Vue.use(SocialSharing);
Vue.use(VueHead);
Vue.use(Meta);

Vue.config.productionTip = false

initialize(store, router);

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

Vue.filter('customizedTime', (value) => {
  return moment(value).fromNow()
});

Vue.filter('truncate', function (string, number) {
  if (string.length >= number) {
    return string.slice(0, number) + "...";
  } else {
    return string;
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
