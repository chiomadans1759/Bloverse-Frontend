<template>
  <header id="feeds-header">
  <nav class="navbar navbar-expand-lg navbar-light bg-white px-5">
    <router-link to="/" class="router-link">
      <img class="logo" src="@/assets/Logo.svg" />
    </router-link>
    <div class="form-inline my-2 my-lg-0 navbar-toggler mobile-view" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span id="option-icon"/>
        <span id="option-icon"/>
        <span id="option-icon"/>
      </a>
      <div class="dropdown-menu dropdown-mobile-view" aria-labelledby="navbarDropdown">
        <router-link to="/abouts" class="dropdown-item">About</router-link>
        <router-link to="#" class="dropdown-item">Photo Contest</router-link>
        <router-link to="/terms-and-conditions" class="dropdown-item">Terms</router-link>
        <router-link to="/privacy-policies" class="dropdown-item">Privacy</router-link>
        <a class="dropdown-item" href="#">FAQ</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Feedback</a>
      </div>
      <div>
         <span class="vl bg-light"></span>
          <router-link class="get-started-link" to="/login">
            Get Started
          </router-link>
      </div>
    </div>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link"> Home <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Photo Contest</a>
        </li>
        <li class="nav-item dropdown pr-4">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span id="option-icon"/>
            <span id="option-icon"/>
            <span id="option-icon"/>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link to="/terms-and-conditions" class="dropdown-item">Terms</router-link>
            <router-link to="/privacy-policies" class="dropdown-item">Privacy</router-link>
            <router-link to="/settings" class="dropdown-item">Settings</router-link>
            <a class="dropdown-item" href="#">FAQ</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Feedback</a>
          </div>
        </li>
      </ul>
      <div class="form-inline my-2 my-lg-0 pr-4">
          <router-link class="get-started-link" to="/login">
            Get Started
          </router-link>
        <span class="vl bg-light"></span>
          <router-link class="publish-link" to="/creators/apply">
            Publish
          </router-link>
      </div>
    </div>
</nav>
  </header>
</template>

<script>
import { Row, Col } from 'iview';
import { mapState, mapActions } from "vuex";

export default {
  components: { Row, Col },
  methods: {
    ...mapActions(['clearSession'])
  },
  computed: {
    ...mapState(["auth"])
  }
}
</script>

<style lang="scss" scoped>
  @import './Navbar';
</style>

