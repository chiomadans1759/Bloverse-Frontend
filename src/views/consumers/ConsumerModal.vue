<template>
  <div>
    <Button @click="modal3 = true">Login</Button>
    <Modal
      v-model="modal3"
      title="Sorry for the Interruption"
      width="1050"
      :styles="{top: '20px'}">
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
