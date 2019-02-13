import Vue from 'vue';
import Router from 'vue-router';
import { LoadingBar } from 'iview';
import store from '../stores';

// Layouts
import GeneralLayout from '@/layouts/GeneralLayout';
import BlankBase from '@/layouts/BlankBase';
import JournalistAccountLayout from '@/layouts/JournalistAccountLayout';

// Client Views
import PostFeeds from '../src/views/PostFeeds.vue';
import PostDisplay from '../src/views/PostDisplay.vue';
import PhotoContest from '../src/views/PhotoContest.vue';
import MyProfile from '../src/views/journalists/MyProfile.vue';
import DashBoardHome from '../src/views/journalists/DashBoardHome.vue';
import MyPosts from '../src/views/journalists/MyPosts.vue';
import CreatePost from '../src/views/journalists/CreatePost.vue';
import JournalistApply from '../src/views/journalists/AuthenticationApply.vue';
import JournalistSetUp from '../src/views/journalists/AuthenticationSetUp.vue';
import JournalistVerify from '../src/views/journalists/AuthenticationVerify.vue';
import JournalistLanding from '../src/views/journalists/Landing.vue';
import ForgotPassword from '@/views/journalists/ForgotPassword.vue';
import ResetPassword from '@/views/journalists/ResetPassword.vue';

// Admin Views
import AdminLogin from '../src/views/admin/Login.vue';
import AdminHome from '../src/views/admin/Home.vue';

// Other views
import NotFound from '../src/views/NotFound.vue';
import About from '../src/views/About.vue';
import Terms from '../src/views/TermsAndConditions.vue';
import Privacy from '../src/views/Privacy.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/', component: GeneralLayout,
      children: [
        { path: '', component: PostFeeds },
        { path: 'posts', redirect: '/' },
        { path: 'posts/:slug', component: PostDisplay },
        { path: 'about', component: About },
        { path: 'terms-and-conditions', component: Terms },
        { path: 'privacy-policies', component: Privacy },
        { path: 'photocontest', redirect: '/creators/photocontest' }
      ]
    },
    {
      path: '/admin', component: BlankBase,
      children: [
        { path: '', redirect: 'dashboard' },
        { path: 'login', component: AdminLogin },
        { path: 'dashboard', component: AdminHome, meta: { admin: true } }
      ]
    },
    {
      path: '/creators',
      component: BlankBase,
      children: [
        { path: '', component: JournalistLanding },
        { path: 'apply', component: JournalistApply },
        { path: 'setup', component: JournalistSetUp },
        { path: 'verify', component: JournalistVerify },
        { path: 'photocontest', component: PhotoContest },
        { path: 'forgot-password', component: ForgotPassword },
        { path: 'reset-password/:token', component: ResetPassword },
        {
          path: ':username', component: JournalistAccountLayout, meta: { journalist: true },
          children: [
            { path: '', component: MyProfile },
            { path: 'dashboard', name: 'journalist-dashboard', component: DashBoardHome },
            {
              path: 'posts', name: 'posts', component: BlankBase, meta: { journalist: true },
              children: [
                { path: '', name: 'all-posts', component: MyPosts },
                { path: 'create', name: 'create-post', component: CreatePost },
                { path: ':slug/edit', name: 'edit-post', component: CreatePost },
              ]
            }
          ]
        },
      ]
    },
    { path: "*", component: NotFound },
    { path: '/creators/*', component: NotFound }
  ]
});

// Nav Guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.journalist)) {
    if (store.getters.isAJournalist) {
      next();
    } else {
      next({
        path: '/creators',
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else if (to.matched.some(record => record.meta.admin)) {
    if (store.getters.isAnAdmin) {
      next();
    } else {
      next({
        path: '/admin/login',
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  /* eslint-disable */
  LoadingBar.start();
  next()
});


ga('set', 'page', router.currentRoute.path); // eslint-disable-line no-undef
ga('send', 'pageview'); // eslint-disable-line no-undef

router.afterEach((to, from, next) => { // eslint-disable-line no-unused-vars
  ga('set', 'page', to.path); // eslint-disable-line no-undef
  ga('send', 'pageview'); // eslint-disable-line no-undef
  LoadingBar.finish();
});

export default router;
