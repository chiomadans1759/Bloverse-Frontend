<template>
    <Modal
        v-model="showModal"
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
                <div id="modal-header-top">
                <img src="@/assets/Logo.svg" alt="">
                <h2 id="brand-name">bloverse</h2>
              </div>
              <h3>Sign in to continue</h3>
                <input class="modal-button modal-email" placeholder="Email"> </input>
                <input class="modal-button modal-password" placeholder="Password" type="password"></input>
                <div id="modal-footer-end">
                <a href="">Forgot password?</a>
                <button id="modal-login-button">Login</button>
                </div>
                <h4>New to Bloverse? <a href=""> Sign up</a></h4>
            </div>
           </div>
           <div id="modal-right">
               <img src="@/assets/Images.png" alt="">
           </div>
        </div>
    </Modal>
</template>

<script>
import { Row, Col,Button, Modal } from 'iview';

export default {
  components: { Row, Col, Button, Modal },
  name: "login-modal",
  props: ['showModal'],
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
@import url('https://fonts.googleapis.com/css?family=Comfortaa');

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
#loginmodal-mainbody{

    height:90vh;
    display: flex;

}
#modal-left{
    flex:1
}
#modal-right{
    flex:1;
       border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

}
#modal-right img{
    width:100%;
    height:100%;
    object-fit: cover;
    object-position: 60%;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    
}
#modal-header-top h2{
    font-family: 'comfortaa';
    padding-left: 10px;
    font-size: 30px;
    padding-top: 10px;
    color:#096DD9;
 
}
#modal-login img{
    width:32px;
    height: 53px;

}
#modal-login{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:60%;
    margin: 80px auto
    
}
#modal-login h3{
    font-size: 16px;
    display: flex;
    width: 100%;
    margin-bottom: 25px;
    font-weight: bolder;
    opacity: .85;

}
.modal-button{
    height:40px;
    width: 100%;
    margin-bottom: 20px;
    padding-left:15px;
      /* text-indent: 15px; */
      font-size: 14px;
      border-radius: 4px;
       background: #fff;
    border:1px solid #E6E8EC;
      

}
#modal-header-top{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width:100%;
    margin-bottom: 20px
}
#modal-footer-end{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 30px
}
#modal-footer-end a{
    font-size: 14px;
    color: #096DD9
}

#modal-login-button{
    padding:10px 20px;
background-image: linear-gradient(left, #2F80ED, #003CE1);
border-radius: 4px;
color:white;
border:none;
font-size: 14px
}
#modal-login h4{
    font-size: 14px;
    float: left;
    width:100%
    
}
/* .ivu-modal-header-inner {
color:#fff !important;
font-size: 1.2rem !important;
text-align: center;
margin-top: 5px;
height:50px
} */
/* .ivu-modal-close .ivu-icon-ios-close {
color:white !important
} */
.ivu-modal-body{
    padding: 0 !important
}
.ivu-modal-close{
    position: absolute !important;
    top: 1.5rem !important;
    left: 1.5rem;
}
.ivu-modal-close .ivu-icon-ios-close {
    font-size: 36px;
    font-weight: 600;
    color:black !important
}
.ivu-modal-header{
    /* background: #2F80ED;
    height:60px;
    padding:10px 0; */
    border-radius:8px  !important;
    display: none;
}
#modal-body{
    text-align: center;
    font-size: 16px;
    padding:10px 35px
}
.ivu-modal-content{
    border-radius:8px  !important;
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
#modal-right{
    display: none
}
#modal-login{
    width:80%;
    justify-content: center;
   
}
#loginmodal-mainbody{
    height: 70vh
}
}
@media screen and (max-width: 600px) {
#modal-right{
    display: none
}
#modal-login{
    width:80%;
    justify-content: center;
    
}
#loginmodal-mainbody{
    height: 70vh
}
}


</style>
