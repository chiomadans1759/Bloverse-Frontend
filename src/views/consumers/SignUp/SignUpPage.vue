<template>
  <div class="sign-up-container">
    <div class="top">
      <div>
        <span class="top-left-container">
        <a href="/login">
          <i class="fal fa-long-arrow-left fa-2x"></i>
          <span class="back-text">Back</span>
        </a>
        <router-link to="/" class="router-link">
          <img class="logo" src="@/assets/Bloverse-white.svg">
          <img class="blue-logo" src="@/assets/Bloverse.svg">
        </router-link>
      </span>
      </div>
    </div>
    <div class="sign-up-content d-flex flex-column justify-content-center align-items-center">
      <div>
        <h2 class="sign-up-intro-one">Join Us</h2>
        <h4 class="sign-up-intro-two">Lorem ipsum dolor sit amet, vel
          <br /> accumsanliberse ex, ea nec
        </h4>
        <h5 class="sign-up-intro-three">Sign Up With</h5>

        <div class="social-login">
          <Button customClass="btn btn-light sign-up-social-button sign-up-facebook-btn">
            <img src="@/assets/facebook-logo-light.svg">
          </Button>
          <br>
          <Button customClass="btn btn-light sign-up-social-button">
            <img src="@/assets/google-text-logo.png" height="25" width="60">
          </Button>
        </div>

        <div class="grid-container">
          <div class="grid-item">
            <hr class="hr-text" />
          </div>
          <div class="middle-grid-item">
            <p><strong>Or</strong></p>
          </div>
          <div class="grid-item">
            <hr class="hr-text" />
          </div>
      </div>
    </div>

    <div class="sign-up-form-section">
      <text-input
        id="first-name"
        name="firstName"
        type="text"
        placeholder="First name"
        :value="firstName"
        :onChange="onChange"
      />
      <text-input
        id="last-name"
        name="lastName"
        type="text"
        placeholder="Last name"
        :value="lastName"
        :onChange="onChange"
      />
      <text-input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        :value="email"
        :onChange="onChange"
      />
      <text-input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        :value="password"
        :onChange="onChange"
      />
      <Button customClass="btn btn-primary primary-button">Sign Up</Button>

      <h4 class="sign-up-terms-and-privacy">
        By creating an account, you agree to our
        <router-link to="/terms-and-conditions" class="sign-up-link-text">Terms</router-link>
        and
        <router-link to="/privacy-policies" class="sign-up-link-text">Privacy</router-link>
      </h4>

      <Button customClass="btn btn-outline-secondary secondary-button">
        <h2 class="sign-up-new-bloverse-text">Have an account?
          <router-link to="/login" class="signup-login-text">Login</router-link>
        </h2>
      </Button>
    </div>

      <div class="signup-creator-text">
        <h2 class="sign-up-creator-text">Content creator? 
        <router-link to="/creators/apply" class="router-link sign-up-apply-now-text">
          Apply
        </router-link>
        </h2>
      </div>
    </div>
    <creator-card />
    <div class="bottom">
      <p><span class="bloverse">Bloverse</span> {{year}}. All Right reserved</p>
    </div>
  </div>
</template>

<script>
import Button from "../../../components/Button/Button.vue";
import TextInput from "../../../components/TextInput/TextInput.vue";
import CreatorCard from "../../../components/CreatorCard/CreatorCard.vue";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      year: new Date().getFullYear()
    };
  },
  components: {
    Button,
    TextInput,
    CreatorCard,
  },
  methods: {
    onChange: function(event) {
      this[event.target.name] = event.target.value;
    }
  },
  mounted() {
    /* eslint-disable */
    hideTawkBot();
    window.onload = function() {
      hideTawkBot();
    };
  },
  destroyed() {
    showTawkBot();
  }
};
</script>

<style lang="scss">
@import "./SignUpPage.scss";
</style>
