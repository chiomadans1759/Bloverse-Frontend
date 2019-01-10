<template>
    <div>
      <h2 class="welcome-text">Welcome back</h2>
      <br/>
      <h2 class="login-text">Login With</h2>
      <br/><br/>
      <div class="social-login">
        <Button>
          <img src="@/assets/facebook-logo-light.svg" />
        </Button>
        <br/>
        <Button>
          <img src="@/assets/google-text-logo.png" height="25" width="60" />
        </Button>
      </div>
      <br />
      <p>Or</p>
      <br />
      <div class="basic-login">
        <input type="email" placeholder="Email" class="input" />
        <br/><br/>
        <input type="password" placeholder="Password" class="input" />
        <br/><br/>
        <p class="forgot-password-link">
          <a>Forgot password ?</a>
        </p>
        <br/>
        <Button customClass="login-button">Login</Button>
        <br/><br/>
        <Button customClass="signup-button">
          <h2 class="new-bloverse-text">New to bloverse? <span>Sign Up</span></h2>
        </Button>
      </div>
      <br/><br/>
      <h2 class="creator-text">Content creator? <a class="apply-now-text">Apply now</a></h2>
    </div>
</template>
<script>
import Button from '../button/button.vue';

export default {
  name: 'SigninComponent',
  components: {
    Button,
  }
}
</script>
<style lang="scss">
  @import './style.scss';
</style>
