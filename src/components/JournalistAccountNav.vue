<template>
  <main id="journalist-account-nav">
    <div class="container pt-2">
      <div class="px-lg-6">
        <div class="row">
          <div class="col">
            <router-link to="/">
              <img class="logo" src="@/assets/Logo.svg" style="height: 40px">
              <span>beta</span>
            </router-link>
          </div>

          <div class="col-auto pt-2 pr-5">
            <nav class="menu pt-2">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <router-link
                    :to="`/creators/${auth.loggedInUser.username}/dashboard`"
                    :class="{'text-primary': currentRoute == 'journalist-dashboard'}">
                    <i class="far fa-th-large"></i>
                    <span class="ml-1">Dashboard</span>
                  </router-link>
                </li>
                <li class="list-inline-item mx-4">
                  <router-link
                    :to="`/creators/${auth.loggedInUser.username}/posts`"
                    :class="{'text-primary': currentRoute == 'all-posts'}">
                    <i class="fal fa-rocket"></i>
                    <span class="ml-1">My Posts</span>
                  </router-link>
                </li>
                <li class="list-inline-item">
                  <router-link
                    :to="`/creators/${auth.loggedInUser.username}/posts/create`"
                    :class="{'text-primary': currentRoute == 'create-post'}">
                    <i class="fal fa-plus"></i>
                    <span class="ml-1">Create Content</span>
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>

          <div class="col-auto">
            <button class="btn btn-link dropdown-toggle text-dark" style="margin-top: -0.3rem;" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="avatar avatar-sm">
                <img :src="auth.loggedInUser.image_url" alt class="avatar-img rounded-circle">
              </div>
              <span class="ml-2">
                {{auth.loggedInUser.first_name}}&nbsp;{{auth.loggedInUser.last_name}}
              </span>
              <i class="fal fa-caret-down"></i>
            </button>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <!-- <a class="dropdown-item" href="#">Action</a>
              </li> -->
              <li>
                <a class="dropdown-item" href="#" @click.prevent="logout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "journalist-account-nav",
  methods: {
    ...mapActions(["clearSession"]),

    logout() {
      this.clearSession()
      this.$router.push("/creators")
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
#journalist-account-nav {
  width: 100%;
  height: 10vh;
  background-color: #ffffff;
  position: fixed;
  z-index: 3000;
  border-bottom: 1px solid #e3ebf6;
}

#journalist-account-nav .menu li {
  font-size: 16px;
}

#journalist-account-nav .menu li a {
  color: #666666;
}
</style>
