<template>
  <div class="new-password-container">
    <div class="top">
        <span class="top-left-container">
          <a href="/">
            <i class="fal fa-long-arrow-left fa-2x"></i>
            <span class="back-text">Back</span>
          </a>
          <router-link to="/" class="router-link">
            <img class="logo" src="@/assets/Logo - White.svg" />
            <img class="blue-logo" src="@/assets/Logo.svg">
          </router-link>
        </span>
    </div>
    <div class="new-password-content d-flex flex-column justify-content-center align-items-center">
        <h4 class="new-password-intro-one">New Password</h4>
        <h5 class="new-password-intro-two">Enter your new password below</h5>

      <div class="new-password-form-section">
        <text-input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          :value="password"
          :onChange="onChange"
          custom-class="text-input"
        />

        <text-input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          :value="password"
          :onChange="onChange"
          custom-class="text-input"
        />
        <Button customClass="btn btn-primary password-primary-button">Send</Button>

        <div class="password-grid-container">
          <div class="password-grid-item">
            <hr class="password-hr-text" />
          </div>
          <div class="password-middle-grid-item">
            <p><strong class="password-or-text">Or</strong></p>
          </div>
          <div class="password-grid-item">
            <hr class="password-hr-text" />
          </div>
        </div>

        <Button customClass="btn btn-outline-secondary secondary-button">
          <h2 class="sign-up-new-bloverse-text">Create
            <router-link to="/register" class="signup-login-text">new account</router-link>
          </h2>
        </Button>
      </div>
    </div>
    <author-card />
    <div class="password-bottom">
      <p><span class="bloverse">Bloverse</span> {{year}}. All Right reserved</p>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button/Button.vue';
import TextInput from '@/components/TextInput/TextInput.vue';
import AuthorCard from "@/components/AuthorCard/AuthorCard.vue";

export default {
  data() {
    return {
      email: '',
      year: new Date().getFullYear()
    }
  },
  components: {
    Button,
    TextInput,
    AuthorCard,
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
}
</script>

<style lang="scss">
  @import './NewPasswordPage.scss';
</style>
