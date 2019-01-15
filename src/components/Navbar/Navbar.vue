<template>
  <header id="feeds-header">
  <nav class="navbar navbar-expand-lg navbar-light bg-white justify-content-between px-5">
    <router-link to="/" class="router-link">
      <img class="logo" src="@/assets/Logo.svg" style="height: 40px" />
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="right-nav">
      <ul class="navbar-nav mr-auto">
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
            <div class="triangle-up"></div>
            <router-link to="/terms-and-conditions" class="dropdown-item">Terms</router-link>
            <router-link to="/privacy-policies" class="dropdown-item">Privacy</router-link>
            <a class="dropdown-item" href="#">FAQ</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Feedback</a>
          </div>
        </li>
      </ul>
      <div class="form-inline my-2 my-lg-0 pr-4">
        <Button customClass="btn btn-outline-primary">
          <router-link to="/login" class="router-link">
            Get Started
          </router-link>
        </Button>
        <span class="vl bg-light"></span>
        <Button customClass="btn btn-primary">
          <router-link to="/creators/apply" class="router-link">
            Publish
          </router-link>
         </Button>
      </div>
    </div>
</nav>
  </header>
</template>

<script>
import { Row, Col } from 'iview';
import { mapState, mapActions } from "vuex";
import Button from '../button/button.vue';

export default {
  components: { Row, Col, Button },
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

