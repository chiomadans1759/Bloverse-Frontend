import Vue from 'vue'
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  locale,
  Message,
  LoadingBar
} from 'iview';
import GoogleAuth from 'vue-google-authenticator'
import lang from 'iview/dist/locale/en-US';
import VueRouter from 'vue-router';
import moment from 'moment'
import SocialSharing from 'vue-social-sharing';
import VueHead from 'vue-head'

import Meta from 'vue-meta';
import store from '../stores';

//import VueAnalytics from 'vue-analytics';


import routes from '../routes'
import App from './App.vue'

import {initialize} from '@/utils/general.js';

// import lang from 'iview/dist/locale/en-US';

import 'iview/dist/styles/iview.css';

import '@fortawesome/fontawesome-pro/css/all.css'
import '@fortawesome/fontawesome-pro/js/all.js'

Vue.use(GoogleAuth, {
  client_id: '966117903311-1fk401e4fiks3u34nsputljh7smgckor.apps.googleusercontent.com'
})
Vue.googleAuth().load()
Vue.googleAuth().directAccess()
Vue.use(VueHead)

// configure language
locale(lang);


Vue.prototype.$IVIEW = {};
Vue.prototype.$http = axios;
Vue.prototype.$Message = Message;
Vue.prototype.$Loading = LoadingBar;
Vue.prototype.$BASE_URL = process.env.VUE_APP_URL

Vue.use(VueRouter);
Vue.use(SocialSharing);
Vue.use(VueHead);
Vue.use(Meta);
/*Vue.use(VueAnalytics, {
  id: 'UA-127172964-2',
  router
})*/

Vue.config.productionTip = false

// Routing logic
const router = new VueRouter({
  mode: 'history',
  routes
})

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
})

new Vue({
  router,
  store,
  created() {
    // let jwt, loggedInUser;

    // jwt = localStorage.getItem('jwt')
    // loggedInUser = localocalStorage.getItem('loggedInUser');
    // loggedInUser = loggedInUser && JSON.parse(loggedInUser);
    // const shouldRegister = localStorage.getItem('shouldRegister') || false;

    // store.commit('setJwt', jwt);
    // store.commit('setLoggedInUser', loggedInUser);
    // store.commit('setShouldRegister', shouldRegister);

  },
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  /* eslint-disable */
  LoadingBar.start();
  next()
});

gtag('set', 'page', router.currentRoute.path); // eslint-disable-line no-undef
gtag('send', 'pageview'); // eslint-disable-line no-undef


router.afterEach((to, from, next) => { // eslint-disable-line no-unused-vars
  gtag('set', 'page', to.path); // eslint-disable-line no-undef
  gtag('send', 'pageview'); // eslint-disable-line no-undef
  LoadingBar.finish();
});
