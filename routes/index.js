import store from '../stores';


import GeneralLayout from '@/layouts/GeneralLayout';
import BlankBase from '@/layouts/BlankBase';
import JournalistAccountLayout from '@/layouts/JournalistAccountLayout';
import PostDisplay from '../src/views/general/SinglePost/SinglePostPage.vue';

import MyProfile from '../src/views/journalists/MyProfile.vue';
import DashBoardHome from '../src/views/journalists/DashBoardHome.vue';
import MyPosts from '../src/views/journalists/MyPosts.vue';
import CreatePost from '../src/views/journalists/CreatePost.vue';

import JournalistSetUp from '../src/views/journalists/AuthenticationSetUp.vue';
import JournalistVerify from '../src/views/journalists/AuthenticationVerify.vue';

import AdminLogin from '../src/views/admin/Login.vue';
import AdminHome from '../src/views/admin/Home.vue';

import NotFound from '../src/views/NotFound.vue';
import Terms from '../src/views/general/TermsAndConditions/TermsAndConditionsPage.vue';

import Privacy from '../src/views/general/PrivacyPolicy/PrivacyPolicyPage.vue';
import Settings from '@/views/general/Settings/SettingsPage.vue'
import Category from '@/views/consumers/Category/CategoryPage'

import Country from '@/views/consumers/Country/CountryPage';

import AboutUs from '../src/views/general/About/AboutPage.vue';
import ForgotPassword from '../src/views/general/ForgotPassword/ForgotPasswordPage.vue';

import PhotoContest from '../src/views/general/PhotoContest/PhotoContestPage.vue';
import CreatorHomePage from '../src/views/journalists/CreatorHome/CreatorHomePage'
import ConsumerHomepage from '../src/views/consumers/ConsumerHome/ConsumerHomepage.vue';
import SigninPage from '../src/views/general/Signin/SigninPage.vue';
import SignupPage from '../src/views/consumers/SignUp/SignUpPage.vue';
import NewPasswordPage from '../src/views/general/NewPassword/NewPasswordPage.vue';
import ChangePassword from '../src/views/consumers/ChangePassword/ChangePassword.vue';
import Profile from '../src/views/consumers/Profile/ProfilePage.vue';
import EditProfile from '../src/views/consumers/EditProfile/EditProfilePage';
import CreatorProfile from '../src/views/journalists/Profile/ProfilePage';

import CreatorApply from '../src/views/journalists/CreatorApply/CreatorApplyPage.vue';

const routes = [
  {
    path: '/', component: GeneralLayout,
    children: [
      { path: '', component: ConsumerHomepage },
      { path: 'posts', redirect: '/' },
      { path: 'posts/:slug', component: PostDisplay },
      { path: '/about', component: AboutUs, name: "about" },
      { path: '/terms-and-conditions', component: Terms },
      { path: '/privacy-policies', component: Privacy },
      { path: '/settings', component: Settings },
      { path: '/profile', component: Profile },
    ]
  },

  {
    path: '/', component: BlankBase,
    children: [
      { path: '/photocontest', component: PhotoContest },
    ]
  },

  { path: '/forgotpassword', component: ForgotPassword },

  { path: '/edit/profile', component: EditProfile },

  { path: '/login', component: SigninPage },

  { path: '/register', component: SignupPage },

  { path: '/newpassword', component: NewPasswordPage },

  { path: '/choosecategory', component: Category },

  { path: "/changepassword", component: ChangePassword },

  { path: '/edit/profile', component: EditProfile },

  { path: '/choosecountry', component: Country },

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
      { path: '', component: CreatorHomePage },
      { path: 'apply', component: CreatorApply },
      { path: 'profile', component: CreatorProfile },
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
          {
            path: '', component: MyProfile, beforeEnter(to, from, next) {
              if (store.getters.isAJournalist) {
                next();
              } else {
                next('/creators');

              }
            }
          },
          {
            path: 'dashboard', name: 'journalist-dashboard', component: DashBoardHome, beforeEnter(to, from, next) {
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
              {
                path: '', name: 'all-posts', component: MyPosts, beforeEnter(to, from, next) {
                  if (store.getters.isAJournalist) {
                    next();
                  } else {
                    next('/creators');

                  }
                }
              },
              {
                path: 'create', name: 'create-post', component: CreatePost, beforeEnter(to, from, next) {
                  if (store.getters.isAJournalist) {
                    next();
                  } else {
                    next('/creators');

                  }
                }
              },
              {
                path: ':slug/edit', component: CreatePost, beforeEnter(to, from, next) {
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
  {
    path: '/creators/*', component: NotFound, beforeEnter(to, from, next) {
      if (store.getters.isAJournalist) {
        next();
      } else {
        next('/creators');

      }
    }
  }
]


export default routes;
