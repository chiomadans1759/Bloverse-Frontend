<template>
  <!--<BaseAuthentication>
<Col :sm="18" :md="10" :xs="22" class="auth-section">
  <h1 id="page-title">Sign in</h1>
   <Row type="flex" justify="space-between" id="btn-social-grp">
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
  <p class="p-or">OR</p> 
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
  </BaseAuthentication>-->
  <BaseAuthentication>
    <!-- <div class="well"></div> -->
    <!-- <Col :sm="18" :md="10" :xs="22" class="auth-section"></Col> -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="well">
            <div class="row">
              <div class="col-md-5">
                <div class="place_page">
                  <Row type="flex" justify="center">
                    <img :src="require('@/assets/Asset 1.svg')" alt class="img-logo">
                  </Row>

                  <Form
                    ref="loginForm"
                    class="auth-form login-form"
                    :model="user"
                    :rules="loginValidate"
                  >
                    <FormItem prop="email">
                      <Input
                        class="my-input"
                        v-model="user.email"
                        size="large"
                        placeholder="E-mail*"
                      />
                    </FormItem>
                    <FormItem prop="password">
                      <Input
                        class="my-input"
                        type="password"
                        v-model="user.password"
                        placeholder="Password*"
                      />
                    </FormItem>
                    <FormItem>
                      <div class="row">
                        <div class="col-md-6">
                          <Checkbox v-model="single">Remmember Me</Checkbox>
                        </div>
                        <div class="col-md-6">
                          <Button
                            class="my-btn btn-main"
                            :disabled="this.isSubmitting"
                            @click="handleLogin"
                            long
                          >{{ isSubmitting ? 'Submitting...' : 'LOG IN' }}</Button>
                        </div>
                      </div>
                      <div class="row extra__action--auth">
                        <div class="col-md-6">
                          <p class="text-left">
                            <router-link id="login-link" to="apply">Register Now</router-link>
                          </p>
                        </div>
                        <div class="col-md-6">
                          <p class="text-right">Forgot Password ?</p>
                        </div>
                      </div>
                    </FormItem>
                  </Form>
                </div>
              </div>
              <div class="col-md-7">
                <img :src="require('@/assets/Images.png')" class="img-responsive">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
  </BaseAuthentication>
</template>


<script>
import { Button, Row, Col, Icon, Input, Form, FormItem, Checkbox } from "iview";
import { mapActions, mapState } from "vuex";

import BaseAuthentication from "../../layouts/BaseAuthentication";

export default {
  components: {
    Button,
    Row,
    Col,
    Icon,
    Input,
    Form,
    Checkbox,
    FormItem,
    BaseAuthentication
  },
  data: function() {
    return {
      isSubmitting: false,
      user: {
        email: "",
        password: "",
        single: false
      },
      loginValidate: {
        email: [
          { required: true, message: "Email cannot be empty", trigger: "blur" },
          { type: "email", message: "Not a valid email", trigger: "blur" }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    ...mapState(["auth"])
  },
  methods: {
    handleLogin: function() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          this.isSubmitting = true;
          let success = await this.login(this.user);
          this.isSubmitting = false;
          if (success === true) {
            this.$Message.success("You have been successfully logged in");
            let username = this.auth.loggedInUser.userName;
            this.$router.push(`/creators/${username}/dashboard`);
          } else
            this.$Message.error({
              content: "Username and password does not match",
              duration: 5,
              closable: true
            });
        } else {
          this.$Message.error("Some fields were not filled");
        }
      });
    },
    ...mapActions(["login"])
  }
};
</script>


<style scoped>
#register-here {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  font-size: 18px;
  margin-top: 12px;
  text-align: center;
}

#register-link {
  color: #2f80ed;
}

.well {
  background: #fff !important;
  box-shadow: 0 2px 15px #d0d0d06e !important;
  border-radius: 20px;
  padding: 0;
  margin: 80px 0px;
}
.img-logo {
  height: 86px;
  margin-top: 10%;
  margin-bottom: 7%;
}
.col-md-7 img {
  float: right;
  position: relative;
  border-radius: 0px 20px 20px 0px;
}
.place_page {
  padding: 20px;
  margin-left: 25%;
}
.extra__action--auth {
  margin-top: 2%;
}
.row.extra__action--auth p {
  font-family: montserrat;
  font-size: 13px;
  margin-top: 9%;
}
.row input {
  font-size: 14px;
}

.row button {
  font-size: 14px !important;
}
.row {
  font-family: montserrat !important;
}
</style>;;
