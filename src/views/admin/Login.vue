<template>
  <Row type="flex" justify="center">
    <Col span="6" class="loginTemplate">
      <div class="loginInput"> Admin Login  </div>
      <div style="padding: 20px; margin-top: 20px">
        <Form ref="logInForm" :model="user" :rules="logInRules">
          <FormItem prop="email" >
            <Input type="text" v-model="user.email" placeholder="Email">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="user.password" placeholder="Password">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem style="margin:0 auto">
              <Button type="primary" @click="handleSubmit" long>Signin</Button>
          </FormItem>
        </Form>
      </div>
    </Col>
  </Row>	
</template>

<script>
  import { Row, Col, Form, Icon, Button, Input, FormItem } from 'iview';
  import { mapActions } from 'vuex';

  export default {
    components: {
      Row, Col, Form, Icon, Button, Input, FormItem,
    },
    data() {
      return {
        user: {
          email: null,
          password: null,
        },
        logInRules: {
          email: [
            { required: true, message: 'Email field is required', trigger: 'blur' },
            { type: 'email', message: 'Please enter a valid email' },
          ],
          password: [
            { required: true, message: 'Please fill in the password.', trigger: 'blur' },
            {
              type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur',
            },
          ],
        },
        serverResponse: null,
      };
    },
    methods: {
      handleSubmit() {
        this.$refs.logInForm.validate(async (valid) => {
          if (valid) {
            let loggedIn = await this.login(this.user);
            if(loggedIn === true)
              this.handleSuccess()
            else
              this.handleError();
          } else {
            this.$Message.error('There is an error in your input!');
          }
        });
      },
      handleSuccess(){
        this.$Message.success('You have been successfully logged in, system is redirecting to dashboard...');
        this.$router.push('/admin');
      },
      handleError(){
        this.user.password = null;
        this.$Message.error('Username or Password does not match');
      },
      ...mapActions([
        'login'
      ]),
    },
  }
</script>

<style>
  /* Styles should be here */
  .loginTemplate {
    border: 1px solid #eaeaea;
    background-color: white;
    margin: 20px;
    margin-top:50px;
    color: white;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  }
  .loginInput{
    padding:10px;
    font-weight: bold;
    height: 20%;
    background: #417690;
    line-height: 40px; 
    text-align: center;
    width:100%;
  };
</style>