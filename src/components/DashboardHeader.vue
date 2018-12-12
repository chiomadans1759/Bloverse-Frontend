<template>
  <div class="wrapper">
    <!-- Sidebar -->
    <nav id="sidebar">
      <div class="sidebar-header">
        <router-link to="/" class="router-link">
          <img class="logo" src="@/assets/Logo.svg" style="height: 40px">
        </router-link>
      </div>

      <ul class="linkss">
        <li class="list-inline-item">
          <router-link
            :to="`/creators/${auth.loggedInUser.userName}/dashboard`"
            :class="{'active': currentRoute == 'journalist-dashboard'}"
            id="dash-links">
            <i class="far fa-th-large" style="color: #096DD9;"></i>
            Dashboard
          </router-link>
        </li>
        <li class="list-inline-item">
          <router-link
            :to="`/creators/${auth.loggedInUser.userName}/posts/create`"
            :class="{'active': currentRoute == 'create-post'}"
            id="dash-links"
          >
            <i class="fal fa-plus" style="color: #096DD9;"></i>
            Create Content
          </router-link>
        </li>
        <li class="list-inline-item">
          <router-link
            :to="`/creators/${auth.loggedInUser.userName}/posts`"
            :class="{'active': currentRoute == 'all-posts'}"
            id="dash-links"
          >
            <i class="fal fa-rocket" style="color: #096DD9;"></i>
            My Posts
          </router-link>
        </li>
      </ul>

      <footer id="sidebar-footer">
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
            class="avatar-img rounded"
          >
          <span class="mt-2">{{auth.loggedInUser.firstName}}&nbsp;{{auth.loggedInUser.lastName}}</span>
        </div>
      </footer>
    </nav>
  </div>
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
.wrapper {
  margin: 2rem;
  width: 100%;
  height: 90vh;
}

#sidebar {
  min-width: 250px;
  max-width: 250px;
}

.sidebar-header {
  position: absolute;
}

.linkss {
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  position: absolute;
}

.linkss li {
  margin-bottom: 2rem;
}

#dash-links {
  color: #222222;
  font-size: 16px;
}

.linkss li a.active {
  border-right: 2px solid #096dd9;
  padding-right: 1rem;
}

#sidebar-footer {
  bottom: 5%;
  position: absolute;
}

#sidebar-footer ul li {
  bottom: 0;
  list-style-type: none;
}

#sidebar-footer span {
  margin-left: 0.5rem;
  font-size: 14px;
  color: #222222;
}
</style>
