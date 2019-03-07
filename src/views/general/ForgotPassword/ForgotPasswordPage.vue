<template>
  <div class="forgot-password-container">
    <navbar
      :showBackArrow="showBackArrow"
      :showNavigations="showNavigations"
      customClass="auth-nav"
      isTransparent
    />
    <div
      class="forgot-password-content d-flex flex-column justify-content-center align-items-center"
    >
      <div>
        <h4 class="forgot-password-intro-one">Forgot Password</h4>
        <h5 class="forgot-password-intro-two">Enter your email address and
          <br>we will send you a link to reset
          <br>your password
        </h5>
        <div class="forgot-password-form-section">
          <text-input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            :value="email"
            :onChange="onChange"
            custom-class="text-input"
          />
          <Button customClass="btn btn-primary password-primary-button">Send</Button>

          <div class="password-grid-container">
            <div class="password-grid-item">
              <hr class="password-hr-text">
            </div>
            <div class="password-middle-grid-item">
              <p>
                <strong class="password-or-text">Or</strong>
              </p>
            </div>
            <div class="password-grid-item">
              <hr class="password-hr-text">
            </div>
          </div>
        </div>
      </div>

      <Button customClass="btn btn-outline-secondary secondary-button">
        <h2 class="sign-up-new-bloverse-text text-center">Create
          <router-link to="/register" class="signup-login-text">new account</router-link>
        </h2>
      </Button>
    </div>
    <div class="text-center m-3">
      <p>
        <span class="bloverse">bloverse</span>
        {{year}}. All Right reserved
      </p>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button/Button.vue";
import TextInput from "@/components/TextInput/TextInput.vue";
import Navbar from "@/components/Navbar/Navbar.vue";

export default {
  data() {
    return {
      email: "",
      year: new Date().getFullYear(),
      showNavigations: false,
      showBackArrow: true
    };
  },
  components: {
    Button,
    TextInput,
    Navbar
  },
  methods: {
    onChange: function(event) {
      this[event.target.name] = event.target.value;
    }
  }
};
</script>

<style lang="scss">
@import "./ForgotPasswordPage.scss";
</style>
