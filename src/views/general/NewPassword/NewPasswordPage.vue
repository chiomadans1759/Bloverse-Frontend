<template>
  <div class="new-password-container">
    <navbar
      :showBackArrow="showBackArrow"
      :showNavigations="showNavigations"
      customClass="auth-nav"
      isTransparent
    />
    <div class="new-password-content d-flex flex-column justify-content-center align-items-center">
      <div>
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
          <Button customClass="btn btn-primary password-primary-button">Save</Button>
        </div>
      </div>
    </div>
    <div class="text-center m-3">
      <p>
        <span class="bloverse">Bloverse</span>
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
@import "./NewPasswordPage.scss";
</style>
