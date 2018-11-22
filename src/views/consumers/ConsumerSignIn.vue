<template> 
     <section >       
        <template>
            <div class = "container"> 
                <Col :sm="24" :md="12" :xs="24" class="image">               
                            <p><span>Bloverse</span> </br>Interactive stories from the global community</p> 
                </Col>
                
                <Col :md="12" :sm="24"  :xs="22">
                        <Col offset="4" :sm="12" :md="16" :xs="18" class="auth-section" >
                                <h1 id="page-title">Sign in</h1>
                                <p class="join">Join Bloverse today.</p>                 
                                <Button class="btn-social my-btn" id="btn-google" long @click="googleAuth"> 
                                    <Icon id="google-icon" type=logo-google /> Sign up with Google
                                </Button>
                                <facebook-login
                                  id="btn-fb"
                                  loginLabel="Sign up with Facebook"
                                  logoutLabel="Sign out with Facebook"
                                  appId="416283189263206"
                                  @login="onFBLogin"
                                  @logout="onFBLogout"
                                  @sdk-loaded="FBsdkLoaded" long>
                                </facebook-login>
                        </Col>
                </col>
            </div>                
        </template>
        <div class="footer">
           <ConsumerLoginFooter/> 
       </div>
    </section>    
</template>

<script>
import Vue from 'vue'

import { Button,Row, Col, Icon, Input, Form, FormItem } from 'iview';
import { mapState } from 'vuex'; 
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
      fb_user_name: '',
      fb_user_email: '',
      fb_personal_id: '',
      FB: undefined
    }
  },
  methods: {
    getFBUserData() {
      this.FB.api('/me', 'GET', { fields: 'id, name, email' },
        userInformation => {
          this.fb_personal_id = userInformation.id;
          this.fb_user_email = userInformation.email;
          this.fb_user_name = userInformation.name;
          alert('User successfully signed in with Facebook')
        }
      )
    },

    FBsdkLoaded(payload) {
      this.fb_connected = payload.isConnected
      this.FB = payload.FB
      if (this.fb_connected) {
        this.getFBUserData()
      }
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
        alert('User successfully signed in with Google')
      }, (error) => {
        // console.log(error)
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
  
  .join{
    font-size:17px;
    font-weight:600;
    padding-bottom:16px;
  }
  .my-btn{
    margin-bottom:30px;
    padding:10px 0;
    height: 3rem;
    border: none;
  }
  .container{
    padding:0;
    margin:0;    
    overflow:hidden;     
    height:90vh; 
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
    font-size:3rem;
    font-weight: 500;
}
.auth-section{
    margin-top:20%; 
}

@media only screen and (max-width: 600px) {
   .container{    
    overflow:auto;   
  }
}

</style>
