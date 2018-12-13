<template>
  <main class="wrapper" id="journalist-account-sidebar">
    <!-- Sidebar -->
    <nav id="sidebar">
      <div class="sidebar-header">
        <router-link to="/" class="router-link">
          <img class="logo" src="@/assets/Logo.svg" style="height: 40px">
        </router-link>
      </div>

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
            <a href="/creators/login" @click.prevent="clearSession" class="mt-3">
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
    </nav>
  </main>
</template>

<script>
import { Row, Col } from "iview";
import { mapState, mapActions } from "vuex";
import LoginButton from "./LoginButton";

export default {
  components: { Row, Col, LoginButton },
  methods: {
    ...mapActions(["clearSession"])
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
#journalist-account-sidebar {
  padding: 4rem 2rem 2rem;
}

#journalist-account-sidebar .list-unstyled {
  margin-top: 6rem;
}

#journalist-account-sidebar .list-unstyled li {
  margin-bottom: 2rem;
}

#journalist-account-sidebar .list-unstyled li a {
  font-size: 16px;
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
  margin-top: 10rem;
}

#journalist-account-sidebar #footer ul li {
  list-style-type: none;
}

#journalist-account-sidebar #footer span {
  margin-left: 0.5rem;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.9);
}
</style>
