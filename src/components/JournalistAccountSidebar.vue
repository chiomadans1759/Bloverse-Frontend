<template>
  <main class="wrapper" id="journalist-account-sidebar">
     <!-- <div class="mobile-menu">
       <journalist-account-nav></journalist-account-nav>
    </div> -->
    <!-- Sidebar -->
      <div class="sidebar-header">
        <router-link to="/" class="router-link">
          <img class="logo" src="@/assets/Logo.svg" style="height: 40px">
        </router-link>
      </div>
      <div class="desktop-side">
      <nav id="sidebar">
       <ul class="list-unstyled">
        <li class="list-item">
          <router-link
            :to="`/creators/${auth.loggedInUser.userName}/dashboard`"
            :class="{'active': currentRoute == 'journalist-dashboard'}">
            <i class="far fa-th-large"></i>
            <span class="ml-3">Dashboard</span>
          </router-link>
        </li>
        <li class="list-item">
          <router-link
            :to="`/creators/${auth.loggedInUser.userName}/posts/create`"
            :class="{'active': currentRoute == 'create-post'}">
            <i class="fal fa-plus"></i>
            <span class="ml-3">Create Content</span>
          </router-link>
        </li>
        <li class="list-item">
          <router-link
            :to="`/creators/${auth.loggedInUser.userName}/posts`"
            :class="{'active': currentRoute == 'all-posts'}">
            <i class="fal fa-rocket"></i>
            <span class="ml-3">My Posts</span>
          </router-link>
        </li>
      </ul>

      <footer id="footer">
        <ul>
          <li style="margin-bottom:2rem;">
            <a href="" @click.prevent="logOut" class="mt-3">
              <i class="fal fa-power-off" style="color: #D9091E; font-size:16px; "></i>
              <span>Sign Out</span>
            </a>
          </li>
        </ul>
        <div class="avatar avatar-sm pt-2" style="display: flex;">
          <img
            id="author-img"
            :src="auth.loggedInUser.imageUrl"
            alt="Author's Image"
            class="avatar-img rounded">
          <span class="mt-2">{{auth.loggedInUser.firstName}}&nbsp;{{auth.loggedInUser.lastName}}</span>
        </div>
      </footer>

      <journalist-account-footer class="mt-5" />
    </nav>
      </div>
  </main>
</template>

<script>
import { Row, Col } from "iview";
import { mapState, mapActions } from "vuex";
import JournalistAccountNav from '@/components/JournalistAccountNav'
import LoginButton from "./LoginButton";
import JournalistAccountFooter from '@/components/JournalistAccountFooter';

export default {
  components: { Row, Col, LoginButton, JournalistAccountNav, JournalistAccountFooter },
  methods: {
    ...mapActions(["clearSession"]),
    logOut(){
      this.clearSession();
      this.$router.push('/creators');
    }
  },
  computed: {
    ...mapState(["auth"]),
    currentRoute() {
      let route = this.$route.name;
      return route;
    }
  }
};
</script>

<style scoped>

.mobile-menu {
  display: none;
}

#journalist-account-sidebar {
  padding: 4rem 2rem 2rem;
  overflow: visible;
}

#journalist-account-sidebar .sidebar-header {
  margin-top: -3.5rem;
}

#journalist-account-sidebar .list-unstyled {
  margin-top: 7rem;
}

#journalist-account-sidebar .list-unstyled li {
  margin-bottom: 2rem;
  width: 100%;
}

#journalist-account-sidebar .list-unstyled li a {
  font-size: 16px;
  width: 100%;
}

#journalist-account-sidebar .list-unstyled li a i {
  color: #096dd9 !important;
}

#journalist-account-sidebar .list-unstyled li span {
  color: rgba(0, 0, 0, 0.65);
}

#journalist-account-sidebar .list-unstyled li a.active {
  border-right: 2px solid #096dd9;
  padding-right: 1rem;
}

#journalist-account-sidebar .list-unstyled li a.active span {
  color: rgba(0, 0, 0, 0.9);
}

#journalist-account-sidebar #footer {
  margin-top: 8rem;
  margin-bottom: 4rem;
}

#journalist-account-sidebar #footer ul li {
  list-style-type: none;
}

#journalist-account-sidebar #footer span {
  margin-left: 0.5rem;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.9);
}

#journalist-account-sidebar #sidebarModalSearch .modal-content {
  z-index: 3000 !important;
}

.desktop-side {
  display: block;
}

@media screen and (max-width: 600px) {
  .desktop-side {
    display: none;
  }


  .sidebar-header {
    display: none;
  }

  .mobile-menu {
  display: block;
  z-index: 8000 !important;
}

}
</style>
