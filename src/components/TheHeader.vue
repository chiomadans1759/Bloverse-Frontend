<template>
  <header id="feeds-header">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col">
          <router-link to="/" class="router-link">
            <img class="logo" src="@/assets/Logo.svg" style="height: 40px">
          </router-link>
        </div>
        <div class="col-auto">
          <div v-if="!auth.loggedInUser">
            <login-button class="pt-2 mr-3"/>
            <router-link to="/creators" class="btn btn-primary btn-md text-uppercase">create</router-link>
          </div>
          <div v-else>
            <div class="row">
              <div class="col pr-0">
                <div class="avatar avatar-sm pt-2">
                  <img
                    id="author-img"
                    :src="auth.loggedInUser.imageUrl"
                    alt="Author's Image"
                    class="avatar-img rounded"
                  >
                </div>
              </div>
              <div class="col-auto pt-3 pl-0">
                <div class="dropdown">
                  <a
                    href="#"
                    class="text-dark"
                    style="font-size: 14px;"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {{auth.loggedInUser.firstName}} {{auth.loggedInUser.lastName}}
                    <i
                      style="font-size: 12px;"
                      class="far fa-chevron-down ml-1"
                    ></i>
                  </a>
                  <div class="dropdown-menu mt-4" aria-labelledby="dropdownMenuButton">
                    <router-link
                      :to="`/creators/${auth.loggedInUser.userName}/dashboard`"
                      class="dropdown-item pl-4 pr-0"
                    >
                      <i class="far fa-th-large mr-1"></i> Dashboard
                    </router-link>
                    <router-link
                      :to="`/creators/${auth.loggedInUser.userName}/posts/create`"
                      class="dropdown-item pl-4 pr-0"
                    >
                      <i class="far fa-plus mr-1"></i> Create Post
                    </router-link>
                    <router-link
                      :to="`/creators/${auth.loggedInUser.userName}/posts`"
                      class="dropdown-item pl-4 pr-0"
                    >
                      <i class="fa fa-grip-horizontal mr-1"></i> Your Posts
                    </router-link>
                    <div class="dropdown-divider"></div>
                    <a href="#" @click.prevent="clearSession" class="dropdown-item pl-4 pr-0">
                      <i class="far fa-sign-out mr-1"></i> Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
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
    ...mapState(["auth"])
  }
};
</script>

<style lang="scss" scoped>
  #feeds-header {
    height: 8rem;
    padding-top: 2rem;
  }

  #feeds-header #author-img {
    width: 32px;
    height: 32px;
  }

  .dropdown-menu {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }

  #feeds-header .dropdown-item i {
    font-size: 10px !important;
  }
</style>

