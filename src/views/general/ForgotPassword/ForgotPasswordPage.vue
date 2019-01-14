<template>
  <div class="signin-container">
     <div class="top">
      <div>
        <span class="top-left-container">
          <a href="/">
            <i class="fal fa-long-arrow-left fa-2x"></i>
            <span>Back</span>
          </a>
          <router-link to="/" class="router-link">
            <img class="logo" src="@/assets/Logo - White.svg" />
          </router-link>
        </span>
      </div>
    </div>
    <div class="content">
      <div class="signinSection">
       <h2 class="welcome-text">Forgot Password</h2>
        <br/>
        <h2 class="login-text">Enter your email address and <br> we will send you a link to reset your password</h2>
        <br/>
      
        <div class="basic-login">
          <text-input
            id="email" name="email" type="email" placeholder="Email" 
            :value="email" :onChange="onChange" custom-class="text-input" />
          <br/><br/>
          <Button customClass="login-button">Send</Button>
          <br/>
          <div class="grid-container">
            <div class="grid-item">
              <hr class="hr-text" />
            </div>
            <div class="middle-grid-item"><p>Or</p></div>
            <div class="grid-item">
              <hr class="hr-text" />
            </div>
          </div>
          <br>
          <Button customClass="signup-button">
            <h2 class="new-bloverse-text">Create <router-link to="/creators/apply" class="router-link apply-now-text">
            new Account
          </router-link></h2>
          </Button>
        </div>
        <br/><br/>
    
      </div>
    </div>
    <div class="bottom">
      <p><span class="bloverse">bloverse</span> 2018 All rights reserved</p>
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
