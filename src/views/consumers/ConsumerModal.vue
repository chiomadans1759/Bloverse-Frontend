<template>
    <div>
      <Button @click="modal3 = true">Login</Button>
    <Modal
        v-model="modal3"
        title="Sorry for the Interruption"
        width="1050"
        :styles="{top: '20px'}">
        <!-- <p id="modal-body">We know you enjoy reading on Bloverse, and you have read 3 articles this month,
            You should sign up to enjoy unlimited access to all the articles.</p> -->
            <!-- <div id="modal-body-content">
                
        <button class="social-buttons modal-google"><img id="social-icon" src="https://res.cloudinary.com/aolfiligre/image/upload/v1540980946/icons8-google-48.png" alt="">  Sign up with Google</button>
        <button class="social-buttons modal-facebook"><img src="https://res.cloudinary.com/aolfiligre/image/upload/v1542735381/iconfinder_facebook_circle_color_107175.png" alt="" id="social-icon">   Sign up with Facebook</button>
      <span>  <p style="display:inline">Already have an account ?</p> &nbsp; <a href="#">Sign in.</a></span>
        </div> -->
        <!-- <i class="far fa-times"></i> -->
        <div id="loginmodal-mainbody">
           <div id="modal-left">
            <div id="modal-login">
                <img src="@/assets/Logo.svg" alt="">
                <input class="modal-button modal-email" placeholder="Email"> </input>
                <input class="modal-button modal-password" placeholder="Password" type="password"></input>
                <div id="modal-footer-end">
                <a href="">Forgot password?</a>
                <button id="modal-login-button">Login</button>
                </div>
            </div>
           </div>
           <div id="modal-right">
               <img src="@/assets/Images.png" alt="">
           </div>
        </div>
    </Modal>
    </div>
</template>

<script>
import { Row, Col,Button, Modal } from 'iview';

export default {
  components: { Row, Col, Button, Modal },
  data () {
    return {
      modal3: false
    }
  },
  methods: {
    ok () {
      this.$Message.info('Clicked ok');
    },
    cancel () {
      this.$Message.info('Clicked cancel');
    }
  }
}
</script>

<style>


</style>
