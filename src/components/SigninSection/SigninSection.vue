<template>
    <div class="mainSection">
      <h2 class="welcome-text">Welcome back</h2>
      <br/><br/>
      <h2 class="intro-text">Login With</h2>
      <br/>
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
      <div class="grid-container">
        <div class="grid-item">
          <hr class="hr-text" />
        </div>
        <div class="middle-grid-item"><p>Or</p></div>
        <div class="grid-item">
          <hr class="hr-text" />
        </div>
      </div>
      <br />
      <div class="form-section">
        <text-input
          id="email" name="email" type="email" placeholder="Email" 
          :value="email" :onChange="onChange" custom-class="text-input" />
        <br/><br/>
        <text-input
          id="password" name="password" type="password" placeholder="Password" 
          :value="password" :onChange="onChange" custom-class="text-input" />
        <br/><br/>
        <p class="forgot-password-link">
          <router-link to="/forgotpassword">Forgot password ?</router-link>
        </p>
        <br/>
        <Button customClass="primary-button">Login</Button>
        <br/><br/>
        <Button customClass="secondary-button">
          <h2 class="new-bloverse-text">New to bloverse? 
            <router-link to="/register" class="signup-text">Sign Up</router-link>
          </h2>
        </Button>
      </div>
      <br/><br/>
      <h2 class="creator-text">Content creator? 
        <router-link to="/creators/apply" class="router-link apply-now-text">
          Apply
        </router-link>
      </h2>
    </div>
</template>
<script>
import Button from '../button/button.vue';
import TextInput from '../TextInput/TextInput.vue';

export default {
  name: 'SigninComponent',
  data() {
    return {
      email: '',
      password: ''
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
  @import './SigninSection.scss';
</style>
