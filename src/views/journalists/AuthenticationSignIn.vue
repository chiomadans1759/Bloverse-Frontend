<template>
  <BaseAuthentication>
<Col :sm="18" :md="10" :xs="22" class="auth-section">
  <h1 id="page-title">Sign in</h1>
  <!-- <Row type="flex" justify="space-between" id="btn-social-grp">
    <Col :sm="11" :xs="24">
      <Button class="btn-social my-btn" id="btn-google" long> 
        <Icon id="google-icon" type=logo-google />
        Google
      </Button>
    </Col>
    <Col :sm="11" :xs="24"> 
      <Button class="btn-social my-btn" id="btn-facebook" long>Facebook</Button>
    </Col>
    <Col :sm="11" :xs="24">
      <Button class="btn-social my-btn" id="btn-linkedln" long>Linkedln</Button> 
    </Col>
    <Col :sm="11" :xs="24">
      <Button class="btn-social my-btn" id="btn-twitter" long>Twitter</Button>
    </Col>
  </Row>
  <p class="p-or">OR</p> -->
  <Form ref="loginForm" class="auth-form login-form" :model="user" :rules="loginValidate">
    <FormItem prop="email">
      <Input class="my-input" v-model="user.email" size="large" placeholder="E-mail*" />
    </FormItem>
    <FormItem prop="password">
      <Input class="my-input" type="password" v-model="user.password" placeholder="Password*"/>
    </FormItem>
    <FormItem>
      <Button class="my-btn btn-main" :disabled="this.isSubmitting" @click="handleLogin" long>
        {{ isSubmitting ? 'Submitting...' : 'LOG IN' }}
      </Button>
    </FormItem>
  </Form>
  
  <div id="register-here">Not Yet on Bloverse? <br> 
    <router-link id="login-link" to="apply"> Register Here </router-link>
  </div>
</Col>
  </BaseAuthentication>
</template>


<script>
  
import { Button,Row, Col, Icon, Input, Form, FormItem } from 'iview';
import { mapActions, mapState } from 'vuex';


import BaseAuthentication from '../../layouts/BaseAuthentication';

export default {
  components: { Button, Row, Col, Icon, Input, Form, FormItem, BaseAuthentication },
  data: function(){
    return {
      isSubmitting: false,
      user: {
        email: 'aniekan.inynag@bloverse.com',
        password: 'pass123'
      },
      loginValidate: {
        email: [
          { required: true, message: 'Email cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Not a valid email', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          {
            type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur',
          },
        ],
      }

    }
  },
  computed: {
    ...mapState([
      'auth'
    ])
  },
  methods: {
    handleLogin: function(){
      this.$refs.loginForm.validate(async valid=>{
        if(valid){
          this.isSubmitting = true;
          let success = await this.login(this.user)
          this.isSubmitting = false;
          if(success === true){
            this.$Message.success('You have been successfully logged in');
            let username = this.auth.loggedInUser.userName;
            this.$router.push(`/creators/${username}/dashboard`)
          }else
            this.$Message.error({
              content: 'Username and password does not match',
              duration: 5,
              closable: true
            });
        }else{
          this.$Message.error('Some fields were not filled');
        }
      })
    },
    ...mapActions([
      'login'
    ])
  }

}
</script>


<style scoped>

  #register-here{
    display:flex;
    justify-content: flex-end;
    flex-direction: row;
    font-size: 18px;
    margin-top: 12px;
    text-align: center;
  }

  #register-link{
    color:#2F80ED;
  }


</style>;;
