<template>
  <div class="sign-in-container">
    <div class="top">
        <span class="top-left-container">
        <a href="/">
          <i class="fal fa-long-arrow-left fa-2x"></i>
          <span class="back-text">Back</span>
        </a>
        <router-link to="/" class="router-link">
          <img class="logo" src="@/assets/Logo - White.svg">
        </router-link>
      </span>
    </div> 
    <div class="sign-up-content">
      <div>
        <h4 class="sign-in-intro-one">Welcome Back</h4>
        <h5 class="sign-in-intro-two">Login With</h5>

        <div class="social-login">
          <Button customClass="btn btn-light sign-in-social-button sign-in-facebook-btn">
            <img src="@/assets/facebook-logo-light.svg">
          </Button>
          <br>
          <Button customClass="btn btn-light sign-in-social-button">
            <img src="@/assets/google-text-logo.png" height="25" width="60">
          </Button>
        </div>

        <div class="grid-container">
          <div class="grid-item">
            <hr class="hr-text" />
          </div>
          <div class="middle-grid-item"><p>Or</p></div>
          <div class="grid-item">
            <hr class="hr-text" />
          </div>
        </div>
      </div>

      <div class="sign-in-form-section">
        <text-input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          :value="email"
          :onChange="onChange"
          custom-class="text-input"
        />
        <text-input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          :value="password"
          :onChange="onChange"
          custom-class="text-input"
        />
        <p class="forgot-password-link">
          <router-link to="/forgot-password">Forgot password ?</router-link>
        </p>

        <Button customClass="btn btn-primary primary-button">Login</Button>

        <Button customClass="btn btn-outline-secondary secondary-button">
          <h2 class="sign-up-new-bloverse-text">New to Bloverse?
            <router-link to="/register" class="signup-login-text">Sign Up</router-link>
          </h2>
        </Button>
      </div>
      
      <div class="signin-creator-text">
        <h2 class="sign-in-creator-text">Content creator? 
        <router-link to="/creators/apply" class="router-link sign-up-apply-now-text">
          Apply
        </router-link>
        </h2>
      </div>
    </div>
    <div class="bottom">
      <p><span class="bloverse">Bloverse</span> {{year}}. All rights reserved</p>
    </div>
  </div>
</template>

<script>
import Button from "../../../components/Button/Button.vue";
import TextInput from "../../../components/TextInput/TextInput.vue";

export default {
  data() {
    return {
      email: "",
      password: "",
      year: new Date().getFullYear()
    };
  },
  components: {
    Button,
    TextInput,
  },
  methods: {
    onChange: function(event) {
      this[event.target.name] = event.target.value;
    }
  }
};
</script>

<style lang="scss">
  @import './SigninPage.scss';
</style>
