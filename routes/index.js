import Vue from 'vue';


import BaseDashBoard from '../src/layouts/BaseDashBoard.vue';
import MyProfile from '../src/views/journalists/MyProfile.vue';
import DashBoardHome from '../src/views/journalists/DashBoardHome.vue';
import BasePost from '../src/layouts/BlankBase.vue';
import MyPosts from '../src/views/journalists/MyPosts.vue';
import CreatePost from '../src/views/journalists/CreatePost.vue';

import BaseJournalist from '../src/layouts/BlankBase.vue';
import JournalistLanding from '../src/views/journalists/Landing.vue';
import JournalistApply from '../src/views/journalists/AuthenticationApply.vue';
import JournalistSetUp from '../src/views/journalists/AuthenticationSetUp.vue';
import JournalistManualSetUp from '../src/views/journalists/AuthenticationSetUpManual.vue';
import JournalistSignIn from '../src/views/journalists/AuthenticationSignIn.vue';
import JournalistVerify from '../src/views/journalists/AuthenticationVerify.vue';

import FrequentlyAskedQuestions from '../src/views/DocsFAQ.vue';
import HouseRules from '../src/views/DocsHouseRules.vue';
import RankingSystem from '../src/views/DocsRankingSystem.vue';
import PublishGuide from '../src/views/DocsPublishGuide.vue';
import NotFound from '../src/views/NotFound.vue';

import AdminLogin from '../src/views/admin/Login.vue';
import AdminHome from '../src/views/admin/Home.vue';
import BaseAdmin from '../src/layouts/BlankBase.vue';

import BaseFeeds from '../src/layouts/BaseFeeds.vue';
import PostFeeds from '../src/views/PostFeeds.vue';
import PostDisplay from '../src/views/PostDisplay.vue'; 

const routes = [
  { path: '/', component: BaseFeeds,
    children: [
      { path: '', component: PostFeeds },
      { path: 'posts', redirect: '/' },
      { path: 'posts/:slug', component: PostDisplay }
    ]
  },
  {
    path: '/creators', component: BaseJournalist,
    children: [
      { path: '', component: JournalistLanding },
      { path: 'apply', component: JournalistApply },
      { path: 'login', component: JournalistSignIn },
      { path: 'register', component: JournalistSetUp, meta: { acceptedApplicant: true } },
      { path: 'setup', component: JournalistManualSetUp, meta: { acceptedApplicant: true } },
      { path: 'verify', component: JournalistVerify },
      { path: ':username', component: BaseDashBoard,
        meta: {
          journalist: true,
          auth: true
        },
        children: [
          { path: '', component: MyProfile },
          { path: 'dashboard', component: DashBoardHome },
          { path: 'posts', component: BasePost,
            children: [
              { path: '', component: MyPosts },
              { path: 'create', component: CreatePost },
              { path: ':slug/edit', component: CreatePost }
            ]
          }
        ]
      },
    ]
  },
  { path: '/faq/:person', component: FrequentlyAskedQuestions },
  { path: '/rules/:person', component: HouseRules },
  { path: '/guides', component: PublishGuide },
  { path: '/ranking/:person', component: RankingSystem },
  { path: '/admin', component: BaseAdmin,
    children: [
      { path: '', redirect: 'dashboard' },
      { path: 'dashboard', component: AdminHome, 
        meta: {
          admin: true,
          auth: true
        }
      },
      { path: 'login', component: AdminLogin }
    ]
  },
  { path: "*", component: NotFound }
]




export default routes;
