import store from '../stores';


import GeneralLayout from '@/layouts/GeneralLayout';
import BlankBase from '@/layouts/BlankBase';
import JournalistAccountLayout from '@/layouts/JournalistAccountLayout';

import PostFeeds from '../src/views/PostFeeds.vue';
import PostDisplay from '../src/views/PostDisplay.vue';


import MyProfile from '../src/views/journalists/MyProfile.vue';
import DashBoardHome from '../src/views/journalists/DashBoardHome.vue';
import MyPosts from '../src/views/journalists/MyPosts.vue';
import CreatePost from '../src/views/journalists/CreatePost.vue';

// import JournalistLanding from '../src/views/journalists/Landing.vue';
import JournalistApply from '../src/views/journalists/AuthenticationApply.vue';
import JournalistSetUp from '../src/views/journalists/AuthenticationSetUp.vue';
import JournalistVerify from '../src/views/journalists/AuthenticationVerify.vue';
import JournalistLanding from '../src/views/journalists/Landing.vue';

import AdminLogin from '../src/views/admin/Login.vue';
import AdminHome from '../src/views/admin/Home.vue';

import NotFound from '../src/views/NotFound.vue';


/*

import FrequentlyAskedQuestions from '../src/views/DocsFAQ.vue';
import HouseRules from '../src/views/DocsHouseRules.vue';
import RankingSystem from '../src/views/DocsRankingSystem.vue';
import PublishGuide from '../src/views/DocsPublishGuide.vue';

 
import ConsumerSignIn from '../src/views/consumers/ConsumerSignIn.vue';
import SelectCountry from '../src/views/consumers/SelectCountry.vue';
import SelectCategory from '../src/views/consumers/SelectCategory.vue';
import ConsumerModal from '../src/views/consumers/ConsumerModal.vue';
import ConsumerLandingPage from '../src/views/consumers/ConsumerLandingPage.vue';
import ConsumersTrending from '../src/views/consumers/ConsumersTrending.vue';
import ConsumerProfile from '../src/views/consumers/ConsumerProfile.vue';

*/

const routes = [
  {
    path: '/', component: GeneralLayout,
    children: [
      { path: '', component: PostFeeds },
      { path: 'posts', redirect: '/' },
      { path: 'posts/:slug', component: PostDisplay }
    ]
  },
  {
    path: '/admin', component: BlankBase,
    children: [
      { path: '', redirect: 'dashboard' },
      {
        path: 'dashboard', component: AdminHome, meta: { admin: true, auth: true }, beforeEnter(to, from, next) {
          if (store.getters.isAnAdmin) {
            next();
          } else {

            next('/admin/login');
          }
          next();
        }
      },
      { path: 'login', component: AdminLogin }
    ]
  },
  {
    path: '/creators',
    component: BlankBase,
    children: [
      { path: '', component: JournalistLanding },
      { path: 'apply', component: JournalistApply },
      {
        path: 'setup', component: JournalistSetUp,
        beforeEnter(to, from, next) {
          if (store.getters.isAllowedToRegister) {
            next()
          } else {
            next('creators/verify')
          }
        }
      },
      { path: 'verify', component: JournalistVerify },
      {
        path: ':username', component: JournalistAccountLayout, meta: { journalist: true, auth: true },
        children: [
          { path: '', component: MyProfile},
          { path: 'dashboard', name: 'journalist-dashboard', component: DashBoardHome,beforeEnter(to, from, next) {
            if (store.getters.isAJournalist) {
              next();
            } else {
              next('/creators');

            }
          }
          },
          {
            path: 'posts', component: BlankBase,
            children: [
              { path: '', name: 'all-posts', component: MyPosts },
              { path: 'create', name: 'create-post', component: CreatePost },
              { path: ':slug/edit', component: CreatePost },
            ]
          }
        ]
      },
    ]
  },
  /*
  { path: '/faq/:person', component: FrequentlyAskedQuestions },
  { path: '/rules/:person', component: HouseRules },
  { path: '/guides', component: PublishGuide },
  { path: '/ranking/:person', component: RankingSystem },
  { path: '/web', component: BaseConsumer, // All pages for the new user features should reside here
    children: [
      { path: '', component: ConsumerLandingPage },
      { path: 'country', component: SelectCountry },
      { path: 'category', component: SelectCategory },
      { path: 'modal', component: ConsumerModal },
      { path: 'profile', component: ConsumerProfile},
      { path: 'trending', component: ConsumersTrending }
    ]
  },
  { path: '/login', component: ConsumerSignIn },
  */
  { path: "*", component: NotFound }
]


export default routes;
