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


import Feeds from '../src/views/DisplayFeeds.vue';

const routes = [
  { path: '/', component: Feeds },
  {
    path: '/journalist', component: BaseJournalist,
    children: [
      { path: '', component: JournalistLanding },
      { path: 'apply', component: JournalistApply },
      { path: 'login', component: JournalistSignIn },
      { path: 'register', component: JournalistSetUp },
      { path: 'setup', component: JournalistManualSetUp },
      { path: 'verify', component: JournalistVerify },
      { path: ':username', component: BaseDashBoard,
        children: [
          { path: '', component: MyProfile },
          { path: 'dashboard', component: DashBoardHome },
          { path: 'posts', component: BasePost,
            children: [
              { path: '', component: MyPosts },
              { path: 'create', component: CreatePost }
            ]
          }
        ]
      }
    ]
  }
]




export default routes;
