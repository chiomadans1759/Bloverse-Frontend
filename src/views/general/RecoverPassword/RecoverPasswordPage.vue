<template>
  <div class="forgot-password-container">
    <div class="top">
        <span class="top-left-container">
          <a href="/">
            <i class="fal fa-long-arrow-left fa-2x"></i>
            <span class="back-text">Back</span>
          </a>
          <router-link to="/" class="router-link">
            <img class="logo" src="@/assets/Logo - White.svg" />
          </router-link>
        </span>
    </div>
    <div class="forgot-password-content">
        <h4 class="forgot-password-intro-one">Recover Password</h4>
        <h5 class="forgot-password-intro-two">Enter your new password below</h5>

      <div class="forgot-password-form-section">
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
          id="password"
          name="password"
          type="password"
          placeholder="Confirm Password"
          :value="password"
          :onChange="onChange"
          custom-class="text-input"
        />
        <Button customClass="btn btn-primary primary-button">Send</Button>

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

        <Button customClass="btn btn-outline-secondary secondary-button">
          <h2 class="sign-up-new-bloverse-text">Create
            <router-link to="/register" class="signup-login-text">new account</router-link>
          </h2>
        </Button>
      </div>
    </div>
    <div class="bottom">
      <p><span class="bloverse">Bloverse</span>  {{year}}. All rights reserved</p>
    </div>
  </div>
</template>

<script>
import Button from '@/components/button/button.vue';
import TextInput from '@/components/TextInput/TextInput.vue';

export default {
  data() {
    return {
      email: '',
      year: new Date().getFullYear()
    }
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
}
</script>

<style lang="scss">
  @import './RecoverPasswordPage.scss';
</style>
