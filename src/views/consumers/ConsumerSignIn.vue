<template>
  <section >
    <template>
      <div class = "login-container">
        <Col :sm="12" :md="12" :xs="24" class="image">
          <p><span>Bloverse</span> </br>Interactive stories from the global community</p>
        </Col>
        <Col :md="12" :sm="12"  :xs="24">
          <Col offset="4" :sm="16" :md="16" :xs="16" class="auth-section" >
            <h1 id="page-title">Sign in</h1>
            <p class="join">Join Bloverse today.</p>
            <Button class="btn-social button" id="btn-google" long @click="googleAuth">
                <Icon id="google-icon" type=logo-google /> Sign up with Google
            </Button>
            <facebook-login
              id="btn-fb"
              loginLabel="Sign up with Facebook"
              logoutLabel="Sign out with Facebook"
              appId="416283189263206"
              @login="onFBLogin"
              @sdk-loaded="FBsdkLoaded"
              @logout="onFBLogout"
              long>
            </facebook-login>
          </Col>
        </Col>
        <Col :md="24" :sm="24"  :xs="24" class="footer">
          <ConsumerLoginFooter/>
        </Col>
      </div>
    </template>
  </section>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex';
import { Button,Row, Col, Icon, Input, Form, FormItem } from 'iview';
import ConsumerLoginFooter from '../../components/ConsumerLoginFooter.vue';
import BlankBase from '../../layouts/BlankBase';
import facebookLogin from '@/components/fb-auth/fb.vue';

export default {
  components: { Button, Row, Col, Icon, Input, Form, FormItem, BlankBase, ConsumerLoginFooter, facebookLogin},
  data: function(){
    return {
      user: {
        email: '',
        password: ''
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
      },
      fb_connected: false,
      FB: undefined
    }
  },
  methods: {
    getFBUserData() {
      this.FB.api('/me', 'GET', { fields: 'id, name, email' },
        userInformation => {
          let data = { access_token: userInformation.id, login_type: 'Facebook' };
          this.$store.dispatch('consumerLogin', data);
          this.$router.push('/web/country');
        }
      )
    },

    FBsdkLoaded(payload) {
      this.fb_connected = payload.isConnected
      this.FB = payload.FB
    },

    onFBLogin() {
      this.fb_connected = true
      this.getFBUserData()
    },

    onFBLogout() {
      this.fb_connected = false
    },

    googleAuth() {
      Vue.googleAuth().signIn((googleUser) => { 
        let data = { access_token: googleUser.Zi.access_token, login_type: 'Google' };
        this.$store.dispatch('consumerLogin', data);
        this.$router.push('/web/country');
      }, (error) => {
        alert("Sorry we couldn't authenticate you, kindly refresh the browser and try again");
      })
    }
  },
  computed: {
    ...mapState([
      'auth'
    ])
  }
}
</script>

<style scoped>
.join{
  font-size:17px;
  font-weight:600;
  padding-bottom:16px;
}

.button{
  margin-bottom:30px !important;
  padding:10px 0 !important;
  height: 3rem !important;
  border: none !important;
}

.login-container{
  padding:0;
  margin:0;
  height:90vh;
}

.footer{
  height:10vh;
  font-size:1rem;
  }

.image{
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./../../assets/signin.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height:100%;
  background-position:center;
  padding: 0;
  margin: 0;
  align-items:center;
  padding:4rem;
  display:flex;
  color:#fff;
  font-size:1.2rem;
}

.image span {
  font-size:6rem;
  font-weight: 500;
}

.auth-section {
  margin-top:20%;
}

@media only screen and (max-width: 600px) {
  .login-container {
    height:90vh;
  }

  .footer {
    height:10vh;
  }
}

@media only screen and (max-width: 840px) {
  .login-container{
    height:87vh;
  }

  .footer{
    height:13vh;
    padding:auto 0;
  }
}
</style>
