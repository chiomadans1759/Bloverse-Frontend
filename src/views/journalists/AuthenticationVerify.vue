<template>
  <BaseAuthentication>
    <Col :md="10" :xs="23" class="auth-section">
      <h1 id="page-title">Verify Your Token</h1>
      <Alert :type="alert.type" v-if="alert.show" show-icon>
        <template v-if="alert.type === 'success'">
          Verified!!!
          <span slot="desc">You have been verified, system is redirecting... </span>
        </template>
        <template v-else>
          Already Registered?
          <span slot="desc">It looks like you have been previously registrered. Click <router-link to="/journalist/login">here to login</router-link></span>
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
  </BaseAuthentication>
 
</template>

<script >
  import {Row, Col, Button, Input, Form, FormItem, Alert } from 'iview';
  import BaseAuthentication from '../../layouts/BaseAuthentication';
  import Hashids from 'hashids';
  import { mapActions, mapState, mapMutations } from 'vuex'


  let hashids = new Hashids("SG.AKa2vomKT26KSV9yNHf-HQ.e-", 16);
  export default {
  	components: {Row, Col, Button, Input, Form, FormItem, Alert, BaseAuthentication },
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
    computed: {
      ...mapState([
        'auth',
        'general'
      ])
    },   
    methods: {
      getIdFromToken: function(){
        //Unhash a Toekn(hashed ID) and return the ID
        let idArray = hashids.decode(this.token);
        return idArray[0];
      },
      isApplicantAccepted(){
        return this.auth.applicant.status === 2;
      },
      verifyToken: async function(){
        this.processing = true;
        if (this.token) {
          const id = this.getIdFromToken();
          await this.getApplicantById(id);
          if(this.auth.applicant && this.isApplicantAccepted()){
            let hadRegistered = await this.applicantHasRegistered();
            if(hadRegistered)
              this.alert.type = 'info';
            else{
              this.setShouldRegister(true);
              this.alert.type = 'success';
              this.$router.push('register')
            }             
            this.alert.show = true;
          }  
          else
            this.$Message.error('Invalid Token'); 
        } else {
            this.$Message.error('You did not supply a token!');
        }
        this.processing = false;
      },

      ...mapActions([
        'getApplicantById',
        'applicantHasRegistered'
      ]),
      ...mapMutations(['setShouldRegister'])
    },
  }
</script>


<style scoped>
.token{
  padding-top: 150px;
}

</style>