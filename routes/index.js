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

import JournalistApply from '../src/views/journalists/AuthenticationApply.vue';
import JournalistSetUp from '../src/views/journalists/AuthenticationSetUp.vue';
import JournalistVerify from '../src/views/journalists/AuthenticationVerify.vue';
import JournalistLanding from '../src/views/journalists/Landing.vue';

import AdminLogin from '../src/views/admin/Login.vue';
import AdminHome from '../src/views/admin/Home.vue';

import NotFound from '../src/views/NotFound.vue';
import About from '../src/views/About.vue';
import Terms from '../src/views/general/TermsAndConditions/TermsAndConditionsPage.vue';
import Privacy from '../src/views/Privacy.vue';

import Signin from '../src/views/general/Signin/SigninPage.vue';
import ForgotPassword from '../src/views/general/ForgotPassword/ForgotPasswordPage.vue';
import consumerSignup from '../src/views/consumers/SignUpPage/SignUpPage';

const routes = [
  {
    path: '/', component: GeneralLayout,
    children: [
      { path: '', component: PostFeeds },
      { path: 'posts', redirect: '/' },
      { path: 'posts/:slug', component: PostDisplay },
      { path: '/about', component: About},
      { path: '/terms-and-conditions', component: Terms},
      { path: '/privacy-policies', component: Privacy},
    ]
  },
  { path: '/login', component: Signin},

  { path: '/forgotpassword', component: ForgotPassword , name:'forgotpassword'},

  { path: '/register', component: consumerSignup},

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
        path: ':username', component: JournalistAccountLayout, meta: { journalist: true, auth: true }, beforeEnter(to, from, next) {
          if (store.getters.isAJournalist) {
            next();
          } else {
            next('/creators');

          }
        },
        children: [
          { path: '', component: MyProfile,beforeEnter(to, from, next) {
            if (store.getters.isAJournalist) {
              next();
            } else {
              next('/creators');

            }
          }
          },
          { path: 'dashboard', name: 'journalist-dashboard', component: DashBoardHome,beforeEnter(to, from, next) {
            if (store.getters.isAJournalist) {
              next();
            } else {
              next('/creators');

            }
          }
          },
          {
            path: 'posts', component: BlankBase, meta: { journalist: true, auth: true },
            children: [
              { path: '', name: 'all-posts', component: MyPosts, beforeEnter(to, from, next) {
                if (store.getters.isAJournalist) {
                  next();
                } else {
                  next('/creators');

                }
              }
              },
              { path: 'create', name: 'create-post', component: CreatePost, beforeEnter(to, from, next) {
                if (store.getters.isAJournalist) {
                  next();
                } else {
                  next('/creators');

                }
              } 
              },
              { path: ':slug/edit', component: CreatePost, beforeEnter(to, from, next) {
                if (store.getters.isAJournalist) {
                  next();
                } else {
                  next('/creators');

                }
              } 
              },
            ]
          }
        ]
      },
    ]
  },

  { path: "*", component: NotFound },
  { path: '/creators/*', component: NotFound, beforeEnter(to, from, next) {
    if (store.getters.isAJournalist) {
      next();
    } else {
      next('/creators');

    }
  } 
  }
]


export default routes;
