<template>
  <Col :md="22" :xs="24">
    <Row type="flex" justify="space-between" align="middle">
      <Col :md="8" :xs="24" id="photo-wrapper">
        <DisplayPhoto :value="user.imageUrl" :canEdit="true" />
      </Col>
      <Col :md="12" :xs="24">
        <Form ref="stepTwoForm" :model="user" :rules="validateUserFields">
          <FormItem prop="username">
            <Input class="my-input" v-model="user.username" placeholder="Username*" />
          </FormItem>
          <Row type="flex" justify="space-between">
            <Col :md="11" :xs="24">
              <FormItem prop="password">
                <Input class="my-input" type="password" v-model="user.password" placeholder="Password*" />
              </FormItem>
            </Col>
            <Col :md="11" :xs="24">
              <FormItem prop="confirmPassword" :error="passwordError">
                <Input class="my-input" type="password" v-model="user.confirmPassword" placeholder="Confirm Password*" /> 
              </FormItem>
            </Col>
          </Row>
          <FormItem prop="gender">
            <Select class="my-select" v-model="user.gender">  
              <Option v-for="item in genders" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>
          <FormItem prop="about">
            <Input class="my-input" v-model="user.about" type="textarea" :rows="6" placeholder="About..." />
          </FormItem>
          <FormItem>
            <Button class="my-btn btn-main" long @click="submitUser">SAVE</Button>
          </FormItem>
        </Form>
      </Col>
      
    </Row>
  </Col>
</template>

<script>
  import { Row, Col, Button, Icon, Input, Select, Option, Form, FormItem } from 'iview';
  import { mapState } from 'vuex';
  import DisplayPhoto from './DisplayImage'
  export default {
    components: { Row, Col, Button, Icon, Input, Select, Option, Form, FormItem, DisplayPhoto },
    props: { user: Object },
    data: function(){
      return {
        genders: [
          {
            value: 1,
            label: 'MALE'
          },
          {
            value: 2,
            label: 'FEMALE'
          }
        ],
        validateUserFields: {
          username: [
            {required: true, message: 'Choose a username', trigger: 'blur' },
          ],
          password: [
            { required: true, message: 'Provide a password you can remember', trigger: 'blur' },
          ],
          confirmPassword: [
            { required: true, message: 'Type your password Again', trigger: 'blur' },
          ],
          gender: [
            { required: true, type: 'integer', message: 'You have to choose a gender', trigger: 'blur' },
          ],
          about: [
            { required: true, message: 'Tell us about yourself', trigger: 'blur' },
          ]
        },

      }
    },
    computed: {
      passwordError: function(){
        if(this.user.confirmPassword){
          if(this.user.confirmPassword !== this.user.password){
            return 'Passwords do not match'
          }
        }
        return null;
      },
    },
    methods: {
      submitUser(){
        this.$refs.stepTwoForm.validate( async (valid) => {
          if(valid){
            this.$emit('done');
          }else{
            this.$Message.error('This is an error in the form');
          }
        })
        
      }
    }
  }
</script>

<style>
  #photo-wrapper {
    height: 320px;
  }
</style>