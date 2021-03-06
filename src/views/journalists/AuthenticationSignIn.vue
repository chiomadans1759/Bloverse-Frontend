<template>
  <div id="auth-sign-in">
    <div class="row">
      <div class="col-md-5">
        <div class="container pl-lg-6 pr-lg-5">
          <img src="@/assets/Logo.svg" style="width: 2.8rem;" alt class="img-logo">
          <p id="sign-c">Sign in to continue</p>
          <Form ref="loginForm" class="auth-form login-form" :model="user" :rules="loginValidate">
            <FormItem prop="email">
              <Input type="email" v-model="user.email" size="large" placeholder="E-mail*"/>
            </FormItem>
            <FormItem prop="password">
              <Input size="large" type="password" v-model="user.password" placeholder="Password*"/>
            </FormItem>
            <FormItem>
              <div class="row">
                <div class="col-12">
                  <button
                    type="button"
                    class="btn btn-primary btn-block"
                    :disabled="this.isSubmitting"
                    @click="handleLogin"
                  >{{ isSubmitting ? 'Submitting...' : 'LOG IN' }}</button>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col">
                  <p class="text-left">New to Bloverse?
                    <router-link class="btn-link" to="/creators/apply" @click.native="close()">Apply</router-link>
                  </p>
                </div>

                <div class="col-auto">
                  <router-link class="btn-link" to="/creators/forgot-password" @click.native="close()">Forgot Password</router-link>
                </div>
              </div>
            </FormItem>
          </Form>
        </div>
      </div>
      <div class="col-md-7">
        <img src="@/assets/Images.png" id="auth-bg">
      </div>
    </div>
  </div>
</template>

<script>
import { Button, Row, Col, Icon, Input, Form, FormItem, Checkbox } from "iview";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  components: {
    Button,
    Row,
    Col,
    Icon,
    Input,
    Form,
    Checkbox,
    FormItem
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
    ...mapMutations(["setModal"]),

    handleLogin: function() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          this.isSubmitting = true;
          let success = await this.login(this.user);
          this.isSubmitting = false;
          if (success === true) {
            this.setModal({ show: false });
            this.$Message.success("You have been successfully logged in");
            let username = this.auth.loggedInUser.username;
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
    ...mapActions(["login"]),
    close() {
      this.setModal({ show: false, currentComponent: "" });
    }
  }
};
</script>

<style scoped>
#auth-sign-in {
  width: 100%;
}

#auth-sign-in .row {
  height: 100%;
}

#auth-sign-in .img-logo {
  height: 86px;
  margin-top: 25%;
  margin-bottom: 7%;
}

#auth-sign-in button.btn-primary {
  height: 3rem !important;
}

#auth-sign-in #auth-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-left: 0.1rem;
}

#sign-c {
  font-size: 16px;
  margin-bottom: 1rem;
}

@media only screen and (max-width: 980px) {
  #auth-sign-in .img-logo {
    margin-top: 10%;
  }

  .col-md-7 {
    display: none;
  }
}
</style>
