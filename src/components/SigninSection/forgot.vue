
<template>
    <div class="signinSection">
     <h2 class="welcome-text">Forgot Password</h2>
      <br/>
      <h2 class="login-text">Enter your email address and <br> we will send you a link t reset your password</h2>
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
          <h2 class="new-bloverse-text">Create <span>new Account</span></h2>
        </Button>
      </div>
      <br/><br/>
  
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
  @import './style.scss';
</style>
<style scoped="true">
  .welcome-text {
    font-size: 1.5rem;
    font-weight: 900 !important;
}
.login-text {
    font-size: 0.9rem !important;
    line-height: 23px;
}
</style>
