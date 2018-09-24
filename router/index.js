import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Feeds from '../src/views/DisplayFeeds.vue';


const routes = [
  { path: '/', component: Feeds },
]


const router = new VueRouter({
  routes // short for `routes: routes`
})


export default router;
