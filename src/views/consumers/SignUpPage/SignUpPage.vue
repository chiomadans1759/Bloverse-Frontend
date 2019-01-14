<template>
  <div class="signup-container">
    <div class="top">
      <span class="top-left-container">
        <a href="/login">
          <i class="fal fa-long-arrow-left fa-2x"></i>
          <span>Back</span>
        </a>
        <router-link to="/" class="router-link">
          <img class="logo" src="@/assets/Logo - White.svg">
        </router-link>
      </span>
    </div>
    <div class="content">
      <div class="signup-intro-text">
        <h2 class="join-us-text">Join us</h2>
        <br>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
        <br>
        <h3 class="sign-up-text">Sign Up With</h3>
      </div>
      <br>
      <div class="social-login">
        <Button>
          <img src="@/assets/facebook-logo-light.svg">
        </Button>
        <br>
        <Button>
          <img src="@/assets/google-text-logo.png" height="25" width="60">
        </Button>
      </div>
      <br>
      <div class="grid-container">
        <div class="grid-item">
          <hr class="hr-text">
        </div>
        <div class="middle-grid-item">
          <p>Or</p>
        </div>
        <div class="grid-item">
          <hr class="hr-text">
        </div>
      </div>
      <br>
      <div class="basic-signup">
        <text-input
          id="first-name"
          name="firstName"
          type="text"
          placeholder="First name"
          :value="firstName"
          :onChange="onChange"
          custom-class="text-input"
        />
        <br>
        <br>
        <text-input
          id="last-name"
          name="lastName"
          type="text"
          placeholder="Last name"
          :value="lastName"
          :onChange="onChange"
          custom-class="text-input"
        />
        <br>
        <br>
        <text-input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          :value="email"
          :onChange="onChange"
          custom-class="text-input"
        />
        <br>
        <br>
        <text-input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          :value="password"
          :onChange="onChange"
          custom-class="text-input"
        />
        <br>
        <br>
        <Button customClass="login-button">Sign Up</Button>
        <br>
        <h4 class="terms-and-privacy">
          By creating an account, you agree to
          <br>our
          <span class="terms-text">Terms</span>
          and
          <span class="privacy-text">Privacy</span>
        </h4>
        <br>
        <Button customClass="signup-button">
          <h2 class="new-bloverse-text">Have an account?
            <router-link to="/login" class="signup-text">Login</router-link>
          </h2>
        </Button>
      </div>
      <br>
      <br>
      <h2 class="creator-text">Content creator?
        <router-link to="/creators/apply" class="router-link apply-now-text">Apply</router-link>
      </h2>
    </div>
  </div>
</template>

<script>
import Button from "../../../components/button/button.vue";
import TextInput from "../../../components/TextInput/TextInput.vue";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  },
  components: {
    Button,
    TextInput
  },
  methods: {
    onChange: function(event) {
      this[event.target.name] = event.target.value;
    }
  }
};
</script>

<style lang="scss">
@import "./SignUpPage.scss";
</style>
