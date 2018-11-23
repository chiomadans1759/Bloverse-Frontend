import Vue from 'vue'
import axios from 'axios';
// import {
//   locale,
//   Message,
//   LoadingBar
// } from 'iview';
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
import store from '../stores';

//import VueAnalytics from 'vue-analytics';


import routes from '../routes'
import App from './App.vue'

// import lang from 'iview/dist/locale/en-US';

import 'iview/dist/styles/iview.css';



Vue.use(GoogleAuth, {
  client_id: '966117903311-1fk401e4fiks3u34nsputljh7smgckor.apps.googleusercontent.com'
})
Vue.googleAuth().load()
Vue.googleAuth().directAccess()


// configure language
locale(lang);


Vue.prototype.$IVIEW = {};
Vue.prototype.$http = axios;
Vue.prototype.$Message = Message;
Vue.prototype.$Loading = LoadingBar;
Vue.prototype.$BASE_URL = process.env.VUE_APP_URL

Vue.use(VueRouter);
Vue.use(SocialSharing);
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
    let jwt, loggedInUser;

    jwt = localStorage.getItem('jwt')
    loggedInUser = localStorage.getItem('loggedInUser');
    loggedInUser = loggedInUser && JSON.parse(loggedInUser);
    const shouldRegister = localStorage.getItem('shouldRegister') || false;

    store.commit('setJwt', jwt);
    store.commit('setLoggedInUser', loggedInUser);
    store.commit('setShouldRegister', shouldRegister);
  },
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => { <<
  <<
  << < HEAD
  const onlyAuth = to.matched.some(record => record.meta.auth)
  const onlyJournalist = to.matched.some(record => record.meta.journalist)
  const onlyAdmin = to.matched.some(record => record.meta.admin)
  LoadingBar.start();
  if (onlyAuth) {
    // This should start for only auth
    if (store.getters.isAuthenticated) {
      if (onlyJournalist && store.getters.isAJournalist)
        next()
      else if (onlyAdmin && store.getters.isAnAdmin)
        next()
      else
        next({
          path: '/'
        })
    } else {
      let nextUrl = to.fullPath
      if (onlyJournalist)
        next({
          path: '/creators/login',
          params: {
            nextUrl
          }
        })
      else if (onlyAdmin)
        next({
          path: '/admin/login',
          params: {
            nextUrl
          }
        })
      else
        next({
          path: '/'
        })
    }
  } else if (to.matched.some(record => record.meta.acceptedApplicant)) {
    if (store.getters.allowedToRegister === true)
      next()
    else {
      next({
        path: '/creators/verify'
      })
    }
  } else
    next(); ===
  ===
  =
  LoadingBar.start();
  next() >>>
    >>>
    > 74 a449cc0b860995abeb3a73582a9c89967f56ee
});

ga('set', 'page', router.currentRoute.path); // eslint-disable-line no-undef
ga('send', 'pageview'); // eslint-disable-line no-undef


router.afterEach((to, from, next) => { // eslint-disable-line no-unused-vars
  ga('set', 'page', to.path); // eslint-disable-line no-undef
  ga('send', 'pageview'); // eslint-disable-line no-undef
  LoadingBar.finish();
});