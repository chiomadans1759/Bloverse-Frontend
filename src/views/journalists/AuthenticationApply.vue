<template>
  <BaseAuthentication>
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
    <Form ref="applyForm" :model="applicant" class="auth-form" :rules="validateApplication">
      <h3 id="form-instruction">Fill the form below to apply as a journalist on Bloverse</h3>
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
          <FormItem prop="phone" :error="errors.phone">
              <Input class="my-input" v-model="applicant.phone" placeholder="Phone* e.g. +2348164488989 ">
                <Select v-model="code" slot="prepend" style="width: 80px">
                    <Option value="http">
                      <img src="https://res.cloudinary.com/naera/image/upload/v1532035571/bloverse/b_blue.png" style="height:15px"/> +234
                    </Option>
                    <Option value="https">https://</Option>
                </Select>
              </Input>
          </FormItem>
        </Col>
      </Row>
      <FormItem prop="linkedIn" :error="errors.linkedIn">
        <Input class="my-input" v-model="applicant.linkedIn" placeholder="Linkedln profle link*"  />
      </FormItem>
      <FormItem prop="twitter" :error="errors.twitter">
        <Input class="my-input" v-model="applicant.twitter" placeholder="Twitter profle link*"  />
      </FormItem>
      <FormItem prop="articles" :error="errors.articles">
        <Input class="my-input" v-model="applicant.articles[0]" placeholder="Link to written article one*"  />
      </FormItem>
      <FormItem>
        <Input class="my-input" v-model="applicant.articles[1]" placeholder="Link to written article two"  />
      </FormItem>
      <FormItem>
        <Input class="my-input" v-model="applicant.articles[2]" placeholder="Link to written article three"  />
      </FormItem>
      <Row type="flex" justify="space-between">
        <Col :sm="11" :xs="24">
          <FormItem prop="countryId" :error="errors.countryId">
            <Select class="my-select" placeholder="Country*" v-model="applicant.countryId" filterable>
              <Option  v-for="item in general.countries" :value="item.id" :key="item.id">{{ item.name }}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col :sm="11" :xs="24">
          <FormItem prop="categoryId" :error="errors.categoryId">
            <Select class="my-select" placeholder="Category*" v-model="applicant.categoryId" filterable>
              <Option  v-for="item in general.categories" :value="item.id" :key="item.id">{{ item.name }}</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
      <FormItem prop="terms">
        <Checkbox v-model="applicant.terms"><a id="terms" href="#" >I have agreed to terms and conditions</a></Checkbox>
      </FormItem>
      <Button class="my-btn btn-secondary" long @click.prevent="handleSubmit">SUBMIT</Button>
        <div id="login-here">already have an account?<br> 
          <router-link id="login-link" to=""> Log in here </router-link>
        </div>
    </Form>
   </Col>
  </BaseAuthentication>
</template>



<script>
  import BaseAuthentication from '../../layouts/BaseAuthentication';
  import CountryCode from '../../components/CountryCodeDrop.vue';
  import { Form, FormItem, Row, Col, Input, Select,Option, Checkbox, Modal, Alert, Button } from 'iview';
  import { mapState, mapActions } from 'vuex';
  //import Utility from '../../Utility.js';
export default {
  components: { Form, FormItem, Row, Col, Input, Select, Option,Checkbox, Modal, Alert, Button, BaseAuthentication, CountryCode },
  data: function(){
    return {
      isSuccess: false,
      serverResponse: {},
      errors: {},
      code: '',
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
        phone: [
          { required: true, message: 'Phone cannot be blank', trigger: 'blur' }
        ],
        linkedIn: [
          { required: true, message: 'You must Provide a linkedIn URL', trigger: 'blur' },
          { type: 'url', message: 'Please enter a valid URL', trigger: 'blur' }
        ],
        twitter: [
          { required: true, message: 'You must Provide a twitter profile URL', trigger: 'blur' },
          { type: 'url', message: 'Please enter a valid URL', trigger: 'blur' }
        ],
        countryId: [
          { required: true, type: 'integer', message: 'You must choose a country', trigger: 'change' }
        ],
        categoryId: [
          { required: true, type: 'integer', message: 'You must choose a category', trigger: 'change' }
        ],
        articles: [
          { required: true, type: 'array', min: 1, message: 'You must provide link to at least one post', trigger: 'blur' }, // BUG!!! Type URL cannot be used while type array is already in use
        ],
        terms: [
          {
            required: true, type: 'boolean', message: 'You have not agreed to our terms', trigger: 'change'
          }
        ]
      },
    }
  },
  computed: {
    applicant: {
      get(){
        return this.$store.state.auth.applicant;
      },
      set(props){
        this.$store.commit('setApplicant', props);
      }
    },
    ...mapState([
      'general',
    ])
  },
  methods: {
    handleSubmit: function() {
      this.errors = {}; // reset error
      console.log(this.applicant)
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
        phone_number: 'phone', 
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
        this.errors[varClient] = fieldErrors[0];
        // BUG !!!! Currently it sets the message but doesn't display the error message unless when a field is edited 
      })
      console.log(this.errors)
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
  mounted: async function(){ 
    console.log(this.general)
  }
}
</script>





<style>
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
</style>