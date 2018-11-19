<template>
  <BaseAuthentication >
    <Col :sm="18" :md="10" :xs="22" class="auth-section">
      <Modal
       v-model="isSuccess"
       :width="726"
       id="success-modal">
        <Alert type="success">Success!</Alert>
        <p>Your application has been sent to bloverse. A message will be sent to your mail to continue the verification and approval process in 48hrs.</p>
        <div slot="footer"></div>
      </Modal>
    <h1 id="page-title">Apply</h1> 
    <Form ref="applyForm" :model="applicant" class="auth-form container" :rules="validateApplication">
      <h3 id="form-instruction">Fill the form below to apply as a content provider on Bloverse</h3>
      <Row type="flex" justify="space-between">
        <Col :sm="11" :xs="24">
          <FormItem prop="firstName" :error="errors.firstName">
            <Input class="my-input" v-model="applicant.firstName" placeholder="First name*"  />
          </FormItem>
        </Col>
        <Col :sm="11" :xs="24">
          <FormItem prop="lastName" :error="errors.lastName">
            <Input class="my-input" v-model="applicant.lastName" placeholder="Last name*" />
          </FormItem>
        </Col>
      </Row>
      <Row type="flex" justify="space-between">
        <Col :sm="11" :xs="24">
          <FormItem prop="email" :error="errors.email">
            <Input class="my-input" v-model="applicant.email" placeholder="Email*"  />
          </FormItem>
        </Col>
        <Col :sm="11" :xs="24">
          <FormItem prop="phone" :error="errors.phoneNumber">
              <select v-model="applicant.phoneCode" class="code-dropdown">
              <option class="country-dropdown"  v-for="(val, index) in countriesCodeFlag" :value="val.code" :key="index">
                 <img :src="val.imgURL" style="height:15px, background:url"/> {{ val.code }}   
              </option>
            </select>
             <input class="my-input" v-model="applicant.phoneNumber" placeholder="Digits after code here " />
          </FormItem>
        </Col>
      </Row>
        
      <FormItem prop="linkedIn" :error="errors.linkedIn">
        <Input class="my-input" v-model="applicant.linkedInUsername" placeholder="Linkedln profile username"  >
            <span slot="prepend">https://www.linkedin.com/in/</span>
        </input>
      </FormItem>
      
      <FormItem prop="twitter" :error="errors.twitter">
        <Input class="my-input" v-model="applicant.twitterUsername" placeholder="Twitter profile username"  >
            <span slot="prepend">https://www.twitter.com/</span>
        </input>
      </FormItem>
       <FormItem prop="articles" :error="errors.articles" v-for="(value, index)  in 3" :key="value">
        <Input class="my-input" v-model="applicant.articleURLs[index]" placeholder="Link to written article">
            <Select slot="prepend" v-model="applicant.articleProtocols[index]" style="width: 80px">
              <Option value="https://">https://</Option> 
              <Option value="http://">http://</Option>
            </Select>
        </input>
      </FormItem>
      <Row type="flex" justify="space-between">
        <Col :sm="11" :xs="24">
          <FormItem prop="countryId" :error="errors.countryId">
           <v-select :options="optionCountry" label="name" placeholder="Country*" class="my-select" v-model="applicant.countryId">
            </v-select>
          </FormItem>
        </Col>
        <Col :sm="11" :xs="24">
          <FormItem prop="categoryId" :error="errors.categoryId">
            <v-select :options="category" label="name" placeholder="Category*" class="my-select" v-model="applicant.categoryId">
            </v-select>
          </FormItem>
        </Col>
      </Row>
      <!--<FormItem prop="terms">
        <Checkbox v-model="applicant.terms"><a id="terms" href="#" >I have agreed to terms and conditions</a></Checkbox>
      </FormItem>-->
      <Button class="my-btn btn-secondary" long @click.prevent="handleSubmit">SUBMIT</Button>
        <div id="login-here">Already have an account?<br> 
          <router-link id="login-link" to="login"> Log in here </router-link>
        </div>
    </Form>
   </Col>
  </BaseAuthentication>
</template>

<script>
import { Form, FormItem, Row, Col, Input, Checkbox, Modal, Alert, Button, Select, Option } from 'iview';
import { mapState, mapActions } from 'vuex';
import vSelect from 'vue-select';
import countryFlags from '../../countryFlags.js';
import BaseAuthentication from '../../layouts/BaseAuthentication';
//import Utility from '../../Utility.js';
export default {
  components: { Form, FormItem, Row, Col, Input,Checkbox, Modal, Alert, Button, BaseAuthentication, vSelect, Select, Option },
  data: function(){
    return {
      isSuccess: false,
      serverResponse: {},
      errors: {},
      code: '+1',
      validateApplication: {
        firstName: [
          { required: true, message: 'Firstname cannot be blank', trigger: 'blur' }
        ],
        lastName: [
          { required: true, message: 'Lastname cannot be blank', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Email cannot be blank', trigger: 'blur' },
          { type: 'email', message: 'The email is not valid', trigger: 'blur' }
        ],
        phoneNumber: [
          { required: true, message: 'Phone cannot be blank', trigger: 'blur' }
        ],
        countryId: [
          { required: true, type: 'object', message: 'You must choose a country', trigger: 'change' }
        ],
        categoryId: [
          { required: true, type: 'object', message: 'You must choose a category', trigger: 'change' }
        ],
        /*terms: [
          {
            required: true, type: 'boolean', message: 'You have not agreed to our terms', trigger: 'change'
          }
        ]*/
      },
    }
  },
  computed: {
    countriesCodeFlag() {
      let sorted = countryFlags.sort((a, b) => {
        if (a.code > b.code) return 1;
        if (a.code == b.code) return 0;
        if (a.code < b.code) return -1;
      })

      return sorted;
    },
    applicant: {
      get(){
        return this.$store.state.auth.applicant;
      },
      set(props){
        this.$store.commit('setApplicant', props);
      }
    },
    optionCountry(){
      return this.general.countries;
    },
    category(){
      return this.general.categories;
    },
    // phoneCode(){
    //   return this.countriesCodeFlag;
    //   console.log(phoneCode)
    // },
    ...mapState([
      'general',
    ])
  },
  methods: {
    handleSubmit: function() {
      this.errors = {}; // reset error
      this.$refs.applyForm.validate(async (valid) => {
        if (valid) {
          let applied = await this.apply();

          if(applied === true) this.handleSuccess();
          else if(applied.errors) this.handleError(applied.errors);
          else 
            this.$Message.error('Something went wrong, this may be an issue with your network connectivity. You may try to reload the page'); 
        } else {
          this.$Message.error('Some Forms fields were not filled correctly!');
        }
      })
    },
    handleError(errors){
      let fieldErrors, varClient;

      let clientServer = { 
        first_name: 'firstName', 
        last_name: 'lastName', 
        email: 'email', 
        phone_number: 'phoneNumber', 
        linkedin_url: 'linkedIn', 
        twitter_url: 'twitter', 
        articles: 'articles', 
        country: 'countryId',
        category: 'categoryId'
      };
      Object.keys(errors).forEach((field)=>{
        fieldErrors = errors[field]; //get the server errors for a field
        varClient = clientServer[field]; // get the variable name on front end from the client server map
        /* This should set the error for a formItem and also cause the validation state of the form change to error while it also displays the message */
        this.$set(this.errors, varClient, fieldErrors[0])
      })
      this.$Message.error('Some Forms fields were not filled correctly!');
    },
    handleSuccess(){
      this.isSuccess = true;
      this.$refs.applyForm.resetFields();
    },
    ...mapActions([
      'apply'
    ]),

  },
  created: function(){ 
    this.applicant.phoneCode = '+1';
    this.applicant.articleProtocols = ['https://', 'https://', 'https://']
  },
}
</script>

<style>
.country-dropdown{
 display: flex;
 justify-content: space-between; 
 align-items: center
}
#success-modal .ivu-modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#success-modal .ivu-alert {
  text-align: center;
  width: 80%;
  font-size: 24px;
  padding: 1.5rem;
  background-color: white;
  color: #6FCF97;
}
#success-modal p {
  font-size: 18px;
  margin: 1rem 0 3rem; 
  color: #828282;
}
@media screen and (min-width:768px) {
  #success-modal p {
    width: 80%;
  }
  #success-modal .ivu-alert {
    width: 60%;
  }
}
/*#section-register > * {
  border: 1px solid red;
}*/
#terms{
  padding-left:20px;
  font-size:14px;
}
#login-here{
  display:flex;
  justify-content: flex-end;
  flex-direction: row;
  font-size: 18px;
  margin-top: 12px;
}
#login-link{
  color:#2F80ED;
}
.country-code{
  display:flex;
}
.code-dropdown{
  width: 80px;
  height: 36px;
  background: #fff;
}
</style>
