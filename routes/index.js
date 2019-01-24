import store from '../stores';


import GeneralLayout from '@/layouts/GeneralLayout';
import BlankBase from '@/layouts/BlankBase';
import JournalistAccountLayout from '@/layouts/JournalistAccountLayout';


import PostDisplay from '../src/views/general/SinglePost/SinglePostPage.vue';


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
import Terms from '../src/views/general/TermsAndConditions/TermsAndConditionsPage.vue';
import Privacy from '../src/views/general/PrivacyPolicy/PrivacyPolicyPage.vue';
import Settings from '@/views/consumers/Settings/SettingsPage.vue'

import AboutUs from '../src/views/general/About/AboutPage.vue';
import ForgotPassword from '../src/views/general/ForgotPassword/ForgotPasswordPage.vue';
import PhotoContest from '../src/views/general/PhotoContest/PhotoContestPage.vue';
import Homepage from '../src/views/general/Home/Homepage.vue';
import SigninPage from '../src/views/general/Signin/SigninPage.vue';
import SignupPage from '../src/views/consumers/SignUp/SignUpPage.vue';
import NewPasswordPage from '../src/views/general/NewPassword/NewPasswordPage.vue';
import ChangePassword from '../src/views/general/ChangePassword/ChangePassword.vue';

const routes = [
  {
    path: '/', component: GeneralLayout,
    children: [
      { path: '', component: Homepage },
      { path: 'posts', redirect: '/' },
      { path: 'posts/:slug', component: PostDisplay },
      { path: '/about', component: AboutUs , name:"about"},
      { path: '/terms-and-conditions', component: Terms},
      { path: '/privacy-policies', component: Privacy},
      { path: '/settings', component: Settings}
    ]
  },

  {
    path: '/', component: BlankBase,
    children: [
      { path: '/photocontest', component: PhotoContest},
    ]
  },

  { path: '/forgotpassword', component: ForgotPassword},

  { path: '/login', component: SigninPage},

  { path: '/register', component: SignupPage},

  { path: '/newpassword', component: NewPasswordPage},

  { path: "/changepassword", component: ChangePassword },


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
