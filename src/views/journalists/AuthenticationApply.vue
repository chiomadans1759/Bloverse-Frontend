<template>
    <main class="main-apply" id="auth-apply">
      <Modal v-model="isSuccess" :width="726" id="success-modal">
        <Alert type="success">Success!</Alert>
        <p>
          Your application has been sent to bloverse. A message will be sent to your mail to
          continue the verification and approval process in 48hrs.
        </p>
        <div slot="footer"></div>
      </Modal>

      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <router-link to="/" class="router-link">
              <img class="logo" src="@/assets/Logo.svg" style="height: 40px" />
            </router-link>
            <h3 class="mt-2 mb-5">Join Bloverse as a content creator</h3>

            <Form ref="applyForm" :model="applicant" :rules="validateApplication">
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
                    <input class="my-input" type="number" v-model="applicant.phoneNumber" placeholder="Digits after code here " />
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
                  <FormItem prop="country" :error="errors.countryId">
                  <v-select :options="general.countries" label="name" placeholder="Country*" class="my-select" v-model="applicant.country">
                    </v-select>
                  </FormItem>
                </Col>
                <Col :sm="11" :xs="24">
                  <FormItem prop="category" :error="errors.categoryId">
                    <v-select :options="general.categories" label="name" placeholder="Category*" class="my-select" v-model="applicant.category">
                    </v-select>
                  </FormItem>
                </Col>
              </Row>
              <!--<FormItem prop="terms">
                <Checkbox v-model="applicant.terms"><a id="terms" href="#" >I have agreed to terms and conditions</a></Checkbox>
              </FormItem>-->
              <button class="btn btn-primary btn-block" @click.prevent="handleSubmit">SUBMIT</button>
              <div class="my-3 text-secondary">
                <h5>
                  By clicking apply, you agree to <a href="#" class="text-link">Terms</a> and <a href="#" class="text-link">Privacy</a>
                </h5>
              </div>
              <div class="text-secondary">
                <h5>Have an account? <router-link id="login-link" to="creators/login"> Log in here </router-link></h5>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
import {
  Form,
  FormItem,
  Row,
  Col,
  Input,
  Checkbox,
  Modal,
  Alert,
  Button,
  Select,
  Option
} from "iview";
import { mapState, mapActions } from "vuex";
import vSelect from "vue-select";
import countryFlags from "../../countryFlags.js";

export default {
  components: {
    Form,
    FormItem,
    Row,
    Col,
    Input,
    Checkbox,
    Modal,
    Alert,
    Button,
    vSelect,
    Select,
    Option
  },
  data: function() {
    return {
      isSuccess: false,
      serverResponse: {},
      errors: {},
      code: "+1",
      validateApplication: {
        firstName: [
          {
            required: true,
            message: "Firstname cannot be blank",
            trigger: "blur"
          }
        ],
        lastName: [
          {
            required: true,
            message: "Lastname cannot be blank",
            trigger: "blur"
          }
        ],
        email: [
          { required: true, message: "Email cannot be blank", trigger: "blur" },
          { type: "email", message: "The email is not valid", trigger: "blur" }
        ],
        phoneNumber: [
          { required: true, message: "Phone cannot be blank", trigger: "blur" }
        ],
        country: [
          {
            required: true,
            type: "object",
            message: "You must choose a country",
            trigger: "change"
          }
        ],
        category: [
          {
            required: true,
            type: "object",
            message: "You must choose a category",
            trigger: "change"
          }
        ]
      }
    };
  },
  computed: {
    countriesCodeFlag() {
      let sorted = countryFlags.sort((a, b) => {
        if (a.code > b.code) return 1;
        if (a.code == b.code) return 0;
        if (a.code < b.code) return -1;
      });
      return sorted;
    },
    applicant: {
      get() {
        return this.$store.state.auth.applicant;
      },
      set(props) {
        this.$store.commit("setApplicant", props);
      }
    },
    ...mapState(["general"])
  },
  methods: {
    handleSubmit: function() {
      this.errors = {}; // reset error
      this.$refs.applyForm.validate(async valid => {
        if (valid) {
          let applied = await this.apply();
          if (applied === true) this.handleSuccess();
          else if (applied.errors) this.handleError(applied.errors);
          else
            this.$Message.error(
              "Something went wrong, this may be an issue with your network connectivity. You may try to reload the page"
            );
        } else {
          this.$Message.error("Some Forms fields were not filled correctly!");
        }
      });
    },
    handleError(errors) {
      let fieldErrors, varClient;
      let clientServer = {
        first_name: "firstName",
        last_name: "lastName",
        email: "email",
        phone_number: "phoneNumber",
        linkedin_url: "linkedIn",
        twitter_url: "twitter",
        articles: "articles",
        country: "countryId",
        category: "categoryId"
      };
      Object.keys(errors).forEach(field => {
        fieldErrors = errors[field]; //get the server errors for a field
        varClient = clientServer[field]; // get the variable name on front end from the client server map
        /* This should set the error for a formItem and also cause the validation state of the form change to error while it also displays the message */
        this.$set(this.errors, varClient, fieldErrors[0]);
      });
      this.$Message.error("Some Forms fields were not filled correctly!");
    },
    handleSuccess() {
      this.isSuccess = true;
      this.$refs.applyForm.resetFields();
      this.$store.commit("clearApplicant")
    },
    handleAdd() {
      if (this.applicant.articleURLs.length < 3) {
        this.applicant.articleURLs.push("");
      }
    },
    ...mapActions(["apply"])
  },
  created: function() {
    this.applicant.phoneCode = "+1";
    this.applicant.articleProtocols = ["https://", "https://", "https://"];
  }
};
</script>

<style>
.main-apply {
  height: 100vh;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .main-apply {
    height: auto;
  }
}

@media screen and (min-width: 768px) {
  .main-apply {
    height: 100vh;
  }
}

.my-select {
  background-color: #ffffff;
}

#add-article-btn {
  background: transparent;
}

#add-btn-container {
  margin: 0 28.5rem 1rem 0;
}

@media screen and (max-width: 768px) {
  #add-btn-container {
    margin: 0 2rem 1rem 0;
  }
}

@media screen and (min-width: 766px) {
  #add-btn-container {
    margin: 0 17.5rem 1rem 0;
  }
}

@media only screen and (width: 375px) {
  #add-btn-container {
    margin: 0 2rem 1rem 0;
  }
}

@media only screen and (width: 360px) {
  #add-btn-container {
    margin: 0 2rem 1rem 0;
  }
}

#phone-input {
  width: 19rem;
  border: 0.1rem solid #bdbdbd;
  border-radius: 0.5rem;
  color: #000000;
}

@media screen and (min-width: 20rem) {
  #phone-input {
    width: 10rem;
  }
}

@media screen and (min-width: 64rem) {
  #phone-input {
    width: 17rem;
  }
}

@media screen and (min-width: 90rem) {
  #phone-input {
    width: 11.5rem;
  }
}

.country-dropdown {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  color: #6fcf97;
}

#success-modal p {
  font-size: 18px;
  margin: 1rem 0 3rem;
  color: #828282;
}

#apply-btn {
  height: 2rem;
  background-image: linear-gradient(to right, #003ce1, #2f80ed);
  color: #ffffff;
  font-size: 1rem;
}

@media screen and (min-width: 768px) {
  #success-modal p {
    width: 80%;
  }
  #success-modal .ivu-alert {
    width: 60%;
  }
}

#terms {
  padding-left: 20px;
  font-size: 14px;
}

#login-here {
  font-size: 1.1rem;
  margin-top: 0.75rem;
  color: #000000;
}

#form-instruction {
  margin: 2rem 1rem 1.5rem 0;
}

@media screen and (max-width: 768px) {
  #form-instruction {
    margin-top: 3rem;
  }
}

#login-link {
  color: #5d8ffc;
}

.country-code {
  display: flex;
}

.code-dropdown {
  width: 80px;
  height: 34px;
  background: #fff;
}

@media screen and (min-width: 48rem) {
  .code-dropdown {
    width: 5rem;
  }
}
</style>
