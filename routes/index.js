// import Vue from 'vue';
import store from '../stores';


import BlankBase from '../src/layouts/BlankBase.vue';
import BaseConsumer from '../src/layouts/BaseConsumer.vue';

import BaseDashBoard from '../src/layouts/BaseDashBoard.vue';
import MyProfile from '../src/views/journalists/MyProfile.vue';
import DashBoardHome from '../src/views/journalists/DashBoardHome.vue';
import MyPosts from '../src/views/journalists/MyPosts.vue';
import CreatePost from '../src/views/journalists/CreatePost.vue';

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

import BaseFeeds from '../src/layouts/BaseFeeds.vue';
import PostFeeds from '../src/views/PostFeeds.vue';
import PostDisplay from '../src/views/PostDisplay.vue';


import ConsumerSignIn from '../src/views/consumers/ConsumerSignIn.vue';
import SelectCountry from '../src/views/consumers/SelectCountry.vue';
import SelectCategory from '../src/views/consumers/SelectCategory.vue';
import ConsumerModal from '../src/views/consumers/ConsumerModal.vue';
import PostDisplay from '../src/views/PostDisplay.vue';

const routes = [{
    path: '/',
    component: BaseFeeds,
    children: [{
        path: '',
        component: PostFeeds
      },
      {
        path: 'posts',
        redirect: '/'
      },
      {
        path: 'posts/:slug',
        component: PostDisplay
      }
    ]
  },
  {
    path: '/creators',
    component: BlankBase,
    children: [{
        path: '',
        component: JournalistLanding
      },
      {
        path: 'apply',
        component: JournalistApply
      },
      {
        path: 'login',
        component: JournalistSignIn,
        beforeEnter(to, from, next) {
          // if (store.state.login.sub.token) {
          if (localStorage.getItem('jwt')) {
            store.state.auth.jwt = localStorage.getItem('jwt')
            next(`creators/${store.state.auth.loggedInUser.userName}/dashboard`)
            // console.log(store.state.)
          } else {
            next()
          }
        },
      },
      {
        path: 'register',
        component: JournalistSetUp,
        // beforeEnter(to, from, next) {
        //   if (store.getters.isAuthenticated) {
        //     next()
        //   } else {
        //     next('creators/verify')
        //   }

        // },
        beforeEnter(to, from, next) {
          // if (store.state.login.sub.token) {
          if (localStorage.getItem('jwt')) {
            store.state.auth.jwt = localStorage.getItem('token')
            next()
          } else {
            next('creators/verify')
          }
        },
      },
      {
        path: 'setup',
        component: JournalistManualSetUp,
        beforeEnter(to, from, next) {
          if (store.getters.isAuthenticated) {
            next()
          } else {
            next('creators/verify')
          }

        }
      },
      {
        path: 'verify',
        component: JournalistVerify
      },
      {
        path: ':username',
        component: BaseDashBoard,
        // beforeEnter(to, from, next) {
        //   if (store.getters.isAJournalist) {
        //     next()
        //   } else {
        //     next('creators/login')
        //   }

        // },
        beforeEnter(to, from, next) {
          // if (store.state.login.sub.token) {
          if (localStorage.getItem('jwt')) {
            console.log(store.getters.isAJournalist)
            next()
          } else {
            next('creators/login')
          }
        },
        meta: {
          journalist: true,
          auth: true
        },
        children: [{
            path: '',
            component: MyProfile
          },
          {
            path: 'dashboard',
            component: DashBoardHome,
            // beforeEnter(to, from, next) {
            //   if (store.getters.isAJournalist) {
            //     next()
            //   } else {
            //     next('creators/login')
            //   }
            // }
          },
          {
            path: 'posts',
            component: BlankBase,

            children: [{
                path: '',
                component: MyPosts
              },
              {
                path: 'create',
                component: CreatePost
              },
              {
                path: ':slug/edit',
                component: CreatePost,
                meta: {
                  auth: true
                },
              }
            ]
          }
        ]
      },
    ]
  },
  {
    path: '/faq/:person',
    component: FrequentlyAskedQuestions
  },
  {
    path: '/rules/:person',
    component: HouseRules
  },
  {
    path: '/guides',
    component: PublishGuide
  },
  {
    path: '/ranking/:person',
    component: RankingSystem
  },
  {
    path: '/admin',
    component: BlankBase,
    children: [{
        path: '',
        redirect: 'dashboard',
        beforeEnter(to, from, next) {
          if (store.getters.isAnAdmin) {
            next()
          } else {
            next('admin/login')
          }
        }
      },
      {
        path: 'login',
        component: AdminLogin
      }
    ]
  },
  {
    path: '/web',
    component: BaseConsumer, // All pages for the new user features should reside here
    children: [{
        path: 'country',
        component: SelectCountry
      },
      {
        path: 'category',
        component: SelectCategory
      },
      {
        path: 'modal',
        component: ConsumerModal
      }

    ]
  },
  {
    path: '/login',
    component: ConsumerSignIn
  },
  {
    path: "*",
    component: NotFound
  }
]


export default routes;