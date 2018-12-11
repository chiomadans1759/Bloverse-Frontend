<template>
  <header id="feeds-header">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col">
          <router-link to="/" class="router-link">
            <img class="logo" src="@/assets/Logo.svg" style="height: 40px" />
          </router-link>
        </div>

        <div class="col-auto">
          <div v-if="!auth.loggedInUser">
            <login-button class="pt-2 mr-3" />
            <router-link to="/creators" class="btn btn-primary btn-md text-uppercase">
              create content
            </router-link>
          </div>

          <div v-else>
            <div class="row">
              <div class="col">
                <div class="avatar avatar-sm">
                  <img :src="auth.loggedInUser.imageUrl" alt="Author's Image" class="avatar-img rounded">
                </div>
              </div>

              <div class="col-auto pt-3 pl-0">
                <div class="dropdown">
                  <a href="#" class="text-dark" style="font-size: 14px;" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{auth.loggedInUser.firstName}} {{auth.loggedInUser.lastName}} <i class="fa fa-caret-down"></i>
                  </a>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Dashboard</a>
                    <a class="dropdown-item" href="#">Create Post</a>
                    <a class="dropdown-item" href="#">Your Posts</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Logout</a>
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
import { Row, Col } from 'iview';
import { mapState } from "vuex";
import LoginButton from "./LoginButton";

export default {
  components: { Row, Col, LoginButton },
  computed: {
    ...mapState(["auth"])
  }
}
</script>

<style lang="scss" scoped>
@import url('./../assets/css/utility.css');

#feeds-header {
  height: 8rem;
  padding-top: 2rem;
}

.btn-primary {
  background-color: #096DD9 !important;
  color: #ffffff;
  border-radius: 2px;
}
</style>

