import Vue from 'vue'
import axios from 'axios';
import { locale, Message, LoadingBar } from 'iview';
import lang from 'iview/dist/locale/en-US';
import VueRouter from 'vue-router';
import store from '../stores';
//import VueAnalytics from 'vue-analytics';


import routes from '../routes'
import App from './App.vue'

// import lang from 'iview/dist/locale/en-US';

import 'iview/dist/styles/iview.css';
var SocialSharing = require('vue-social-sharing');


// configure language
locale(lang);


Vue.prototype.$IVIEW = {};
Vue.prototype.$http = axios;
Vue.prototype.$Message = Message;
Vue.prototype.$Loading = LoadingBar;


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





router.beforeEach((to, from, next) => {
  const onlyAuth = to.matched.some(record=>record.meta.auth)
  const onlyJournalist = to.matched.some(record=>record.meta.journalist)
  const onlyAdmin = to.matched.some(record=>record.meta.admin)
  LoadingBar.start();
  if(onlyAuth){
    if(store.getters.isAuthenticated){
      if(onlyJournalist && store.getters.isAJournalist)
        next()
      else if(onlyAdmin && store.getters.isAnAdmin)
        next()
      else
        next({path: '/'})
    }
    else{
      let nextUrl = to.fullPath
      if(onlyJournalist)
        next({path: '/journalist/login', params: { nextUrl }})
      else if(onlyAdmin)
        next({path: '/admin/login', params: { nextUrl }})
      else
        next({path: '/'})
    }
  }
  else if(to.matched.some(record=>record.meta.acceptedApplicant)){
    if(store.getters.allowedToRegister === true)
      next()
    else{
      next({path: '/journalist/verify'})
    }
  }else
    next();
});

ga('set', 'page', router.currentRoute.path);
ga('send', 'pageview');

router.afterEach(( to, from, next) => {
  ga('set', 'page', to.path);
  ga('send', 'pageview');
  LoadingBar.finish();
});
