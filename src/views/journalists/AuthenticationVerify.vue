<template>
    <main class="auth-section">
      <Alert :type="alert.type" v-if="alert.show" show-icon>
        <template v-if="alert.type === 'success'">
          Verified!!!
          <span slot="desc">You have been verified, system is redirecting... </span>
        </template>

        <template v-else>
          Already Registered?
          <span slot="desc">It looks like you have been previously registrered. Click <router-link to="/creators/login">here to login</router-link></span>
        </template>
      </Alert>

      <div class="row justify-content-center pt-5">
        <div class="col-md-3 mt-5">
          <router-link to="/">
            <img src="@/assets/Logo.svg" style="width: 2.8rem;" alt class="img-logo mb-5">
          </router-link>
          
          <Form ref="tokenForm">
            <h4 class="text-dark mb-3">
              Enter code sent to you via email <br /> to continue.
            </h4>
            <FormItem required>
              <Input  v-model="token" placeholder="Enter token here" class="my-input" />
              <p class="text-dark">
                Code expires in 60 minutes.
              </p>
            </FormItem>
            <FormItem>
              <button 
              class="btn btn-primary btn-block" 
              @click="verifyToken" 
              :disabled="!token || processing">
                Continue
              </button>
              <!-- <Button class="my-btn" :class="{'btn btn-primary': true, 'btn-secondary': token}" @click="verifyToken" long :disabled="!token" :loading="processing"> Submit </Button> -->
            </FormItem>
          </Form>
        </div>
      </div>
    </main>
</template>

<script >
import { Row, Col, Button, Input, Form, FormItem, Alert } from "iview";
import Hashids from "hashids";
import { mapActions, mapState, mapMutations } from "vuex";

let hashids = new Hashids("SG.AKa2vomKT26KSV9yNHf-HQ.e-", 16);
export default {
  components: {
    Row,
    Col,
    Button,
    Input,
    Form,
    FormItem,
    Alert
  },
  data() {
    return {
      token: null,
      processing: false,
      alert: {
        show: false,
        type: "info"
      }
    };
  },
  computed: {
    ...mapState(["auth", "general"])
  },
  methods: {
    getIdFromToken: function() {
      //Unhash a Toekn(hashed ID) and return the ID
      let idArray = hashids.decode(this.token);
      return idArray[0];
    },
    isApplicantAccepted() {
      return this.auth.applicant.status === 2;
    },
    verifyToken: async function() {
      this.processing = true;
      if (this.token) {
        const id = this.getIdFromToken();
        await this.getApplicantById(id);
        if (this.auth.applicant && this.isApplicantAccepted()) {
          let hadRegistered = await this.applicantHasRegistered();
          if (hadRegistered) this.alert.type = "info";
          else {
            this.setShouldRegister(true);
            this.alert.type = "success";
            this.$router.push("setup");
          }
          this.alert.show = true;
        } else this.$Message.error("Invalid Token");
      } else {
        this.$Message.error("You did not supply a token!");
      }
      this.processing = false;
    },

    ...mapActions(["getApplicantById", "applicantHasRegistered"]),
    ...mapMutations(["setShouldRegister"])
  }
};
</script>


<style scoped>
.auth-verify {
  background-color: #f5f5f5;
  border: 1px solid #eeeeee;
  height: 100vh;
  width: 100vw;
}
</style>
