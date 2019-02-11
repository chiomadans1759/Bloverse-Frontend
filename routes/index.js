import store from '../stores';

// App Layout
import GeneralLayout from '@/layouts/GeneralLayout';
import BlankBase from '@/layouts/BlankBase';
import JournalistAccountLayout from '@/layouts/JournalistAccountLayout';

// General Layout Pages
import ConsumerHomepage from '../src/views/consumers/ConsumerHome/ConsumerHomepage.vue';
import PostDisplay from '../src/views/general/SinglePost/SinglePostPage.vue';
import Terms from '../src/views/general/TermsAndConditions/TermsAndConditionsPage.vue';
import Privacy from '../src/views/general/PrivacyPolicy/PrivacyPolicyPage.vue';
import Settings from '@/views/general/Settings/SettingsPage.vue';
import AboutUs from '../src/views/general/About/AboutPage.vue';
import ConsumerProfile from '../src/views/consumers/Profile/ProfilePage.vue';

// Blank Base Layout Pages
import PhotoContest from '../src/views/general/PhotoContest/PhotoContestPage.vue';
import ForgotPassword from '../src/views/general/ForgotPassword/ForgotPasswordPage.vue';
import EditProfile from '../src/views/general/EditProfile/EditProfilePage';
import SigninPage from '../src/views/general/Signin/SigninPage.vue';
import SignupPage from '../src/views/consumers/SignUp/SignUpPage.vue';
import NewPasswordPage from '../src/views/general/NewPassword/NewPasswordPage.vue';
import Category from '@/views//general/Category/CategoryPage';
import Country from '@/views/general/Country/CountryPage';
import ChangePassword from '../src/views/general/ChangePassword/ChangePassword.vue';

// Creator Layout Pages
import CreatorHomePage from '../src/views/journalists/CreatorHome/CreatorHomePage';
import CreatorApply from '../src/views/journalists/CreatorApply/CreatorApplyPage.vue';
import CreatorProfile from '../src/views/journalists/Profile/ProfilePage';
import CreatorPosts from '../src/views/journalists/ProfilePost/ProfilePost';
import EmailPrefrence from '../src/views/journalists/EmailPrefrence/EmailPrefrencePage.vue';
import Drafts from '../src/views/journalists/Drafts/DraftsPage';

// Version one routes
import MyProfile from '../src/views/journalists/MyProfile.vue';
import DashBoardHome from '../src/views/journalists/DashBoardHome.vue';
import MyPosts from '../src/views/journalists/MyPosts.vue';
import CreatePost from '../src/views/journalists/CreatePost.vue';
import JournalistSetUp from '../src/views/journalists/AuthenticationSetUp.vue';
import JournalistVerify from '../src/views/journalists/AuthenticationVerify.vue';
import AdminLogin from '../src/views/admin/Login.vue';
import AdminHome from '../src/views/admin/Home.vue';
import NotFound from '../src/views/NotFound.vue';

const routes = [
  {
    path: '/', component: GeneralLayout,
    children: [
      { path: '', component: ConsumerHomepage },
      { path: 'posts', redirect: '/' },
      { path: 'posts/:slug', component: PostDisplay },
      { path: '/about', component: AboutUs },
      { path: '/terms-and-conditions', component: Terms },
      { path: '/privacy-policies', component: Privacy },
      { path: '/settings', component: Settings },
      { path: '/profile', component: ConsumerProfile },
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
      { path: 'email-settings', component: EmailPrefrence },
      { path: 'profile', component: CreatorProfile },
      { path: 'profile/posts', component: CreatorPosts},
      { path: 'drafts', component: Drafts },
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
