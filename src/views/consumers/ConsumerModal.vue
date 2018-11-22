<template>
    <div>
      <Button @click="modal3 = true">Set the width</Button>
    <Modal
        v-model="modal3"
        title="Sorry for the Interruption"
        width="700">
        <p id="modal-body">We know you enjoy reading on Bloverse, and you have read 3 articles this month,
            You should sign up to enjoy unlimited access to all the articles.</p>
            <div id="modal-body-content">
                
        <button class="social-buttons modal-google"><img id="social-icon" src="https://res.cloudinary.com/aolfiligre/image/upload/v1540980946/icons8-google-48.png" alt="">  Sign up with Google</button>
        <button class="social-buttons modal-facebook"><img src="https://res.cloudinary.com/aolfiligre/image/upload/v1542735381/iconfinder_facebook_circle_color_107175.png" alt="" id="social-icon">   Sign up with Facebook</button>
      <span>  <p style="display:inline">Already have an account ?</p> &nbsp; <a href="#">Sign in.</a></span>
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
.ivu-modal-header p, .ivu-modal-header-inner {
    display: inline-block;
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color:white;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ivu-modal-header-inner {
color:#fff !important;
font-size: 1.2rem !important;
text-align: center;
margin-top: 5px;
height:50px
}
.ivu-modal-close .ivu-icon-ios-close {
color:white !important
}
.ivu-modal-header{
    background: #2F80ED;
    height:60px;
    padding:10px 0
}
#modal-body{
    text-align: center;
    font-size: 16px;
    padding:10px 35px
}
.ivu-modal-content{
    border-radius: 0 !important;
}
.ivu-modal-footer{
    display:none
}
#modal-body-content{
    height:200px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly
}
.social-buttons{
    width: 40%;
    height: 40px;
    background: #fff;
    border:1px solid #E6E8EC;
  display: flex;
  align-items: center;
  font-size: 16px;
  
   
}
#social-icon{
    width:24px;
    height: 24px;
   margin:0 25px
  
}
@media screen and (max-width: 360px) {
.social-buttons{
   width:80%;
   text-align: center
}
}
@media screen and (max-width: 600px) {
.social-buttons{
    width:80%;
       text-align: center
}
}


</style>
