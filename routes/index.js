import Vue from 'vue';
import Router from 'vue-router';
import { LoadingBar } from 'iview';
import store from '../stores';

// Layouts
const GeneralLayout = () => import('../src/layouts/GeneralLayout.vue')
const BlankBase = () => import('../src/layouts/BlankBase.vue')
const JournalistAccountLayout = () => import('../src/layouts/JournalistAccountLayout.vue')

// Client Views
const PostFeeds = () => import('../src/views/PostFeeds.vue')
const TrendingFeed = () => import('../src/views/TrendingFeed.vue')
const PostDisplay = () => import('../src/views/PostDisplay.vue')
const PhotoContest = () => import('../src/views/PhotoContest.vue')

// Creator Account Views
const DashBoardHome = () => import('../src/views/journalists/DashBoardHome.vue')
const MyPosts = () => import('../src/views/journalists/MyPosts.vue')
const CreatePost = () => import('../src/views/journalists/CreatePost.vue')
const JournalistApply = () => import('../src/views/journalists/AuthenticationApply.vue')
const JournalistSetUp = () => import('../src/views/journalists/AuthenticationSetUp.vue')
const JournalistVerify = () => import('../src/views/journalists/AuthenticationVerify.vue')
const JournalistLanding = () => import('../src/views/journalists/Landing.vue')
const ForgotPassword = () => import('../src/views/journalists/ForgotPassword.vue')
const ResetPassword = () => import('../src/views/journalists/ResetPassword.vue')

// Admin Views
const AdminLogin = () => import('../src/views/admin/Login.vue')
const AdminHome = () => import('../src/views/admin/Home.vue')

// Other views
const NotFound = () => import('../src/views/NotFound.vue')
const About = () => import('../src/views/About.vue')
const Terms = () => import('../src/views/TermsAndConditions.vue')
const Privacy = () => import('../src/views/Privacy.vue')

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
        { path: 'feeds/trending', component: TrendingFeed },
        { path: 'posts/:slug', component: PostDisplay }
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
    { path: '/about', component: About },
    { path: '/terms-and-conditions', component: Terms },
    { path: '/privacy-policies', component: Privacy },
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
      })
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
      })
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
