<template>
  <!--
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
  -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12">
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
    </div>
</template>


<script>
import { Button, Row, Col, Icon, Input, Form, FormItem, Checkbox } from "iview";
import { mapActions, mapState } from "vuex";

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
  },
  data: function() {
    return {
      isSubmitting: false,
      single: false,
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
  font-size: 18px;
  margin-top: 12px;
  text-align: center;
}

#register-link {
  color: #2f80ed;
}

.img-logo {
  height: 86px;
  margin-top: 10%;
  margin-bottom: 7%;
}

.col-md-7 img {
  float: right;
  position: relative;
  height: 100%;
}

.place_page {
  padding: 20px;
}
</style>;;
