<template>
  <div class="recover-password-container">
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
    <div class="recover-password-content">
        <h4 class="recover-password-intro-one">Recover Password</h4>
        <h5 class="recover-password-intro-two">Enter your new password below</h5>

      <div class="recover-password-form-section">
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
    <div class="bottom">
      <p><span class="bloverse">Bloverse</span> {{year}}. All rights reserved</p>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button/Button.vue';
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
