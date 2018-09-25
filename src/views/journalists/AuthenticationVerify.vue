<template>
<Col :md="10" :xs="23" class="auth-section">
  <h1 id="page-title">Verify Your Token</h1>
  <Alert :type="alert.type" v-if="alert.show" show-icon>
    <template v-if="alert.type === 'success'">
      Verified!!!
      <span slot="desc">You have been verified, system is redirecting... </span>
    </template>
    <template v-else>
      Already Registered?
      <span slot="desc">It looks like you have been previously registrered. Click <router-link to="/signin">here to login</router-link></span>
    </template>
    

    
  </Alert>

  <Form ref="tokenForm" class="auth-form" v-else>
    <FormItem required>
      <Input  v-model="token" placeholder="Enter token here" class="my-input" />
    </FormItem>
    <FormItem>
      <Button class="my-btn" :class="{'btn-secondary': token}" @click="verifyToken" long :disabled="!token" :loading="processing"> Submit </Button>
    </FormItem>
  </Form>
</Col>

 
</template>

<script >
  import {Row, Col, Button, Input, Form, FormItem, Alert } from 'iview';
  import Hashids from 'hashids';
  import { mapMutations } from 'vuex'


  let hashids = new Hashids("SG.AKa2vomKT26KSV9yNHf-HQ.e-", 16);
  export default {
  	components: {Row, Col, Button, Input, Form, FormItem, Alert },
  	data () {
      return {
        token: null,
        processing: false,
        alert: {
          show: false,
          type: 'info'
        }
      }
    },   
    methods: {
      getIdFromToken: function(){
        //Unhash a Toekn(hashed ID) and return the ID
        let idArray = hashids.decode(this.token);
        console.log(idArray);
        return idArray[0];
      },
      getApplicantById: async function(id){
        try {
          let response = await this.$http.get(`/api/v1/applicants/${id}/`)
          return response.data.data.applicant;
        }catch(error){
          return null;
        }
      },
      isAccepted: function(applicant){
        return applicant && applicant.status === 2;
      },
      isAUser: function(applicant){
        //Checks if an applicant had previously setup account as user
        //curently returns false but will be dynamic once endpoint is ready
        return false;
      },
      verifyToken: async function(){
        this.processing = true;
        if (this.token) {

          const id = this.getIdFromToken();
          const applicant = await this.getApplicantById(id);
          if(this.isAccepted(applicant)){
            const isAUser = this.isAUser(applicant)
            this.alert.type = isAUser ? 'info' : 'success';
            this.alert.show = true;
            if(!isAUser){
              let { first_name: firstName, last_name: lastName, email, phone_number: phone, category, country } = applicant;
              this.updateUser({firstName, lastName, email, phone, category, country});
              this.$router.push('register');
            }
            
          }
          else
            this.$Message.error('Invalid Token'); 
        } else {
            this.$Message.error('You did not supply a token!');
        }
        this.processing = false;
      },

      ...mapMutations([
        'updateUser'
      ]),
    },
  }
</script>


<style scoped>
.token{
  padding-top: 150px;
}

</style>