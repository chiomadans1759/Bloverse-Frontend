<template>
  <main id="auth-apply">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <router-link to="/" class="router-link">
            <img class="logo" src="@/assets/Logo.svg" style="height: 40px" />
          </router-link>
          <h3 class="mt-3 mb-5">Join Bloverse as a content creator</h3>
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
                <FormItem prop="phone" :error="errors.number">
                    <select v-model="applicant.code" class="code-dropdown app_select_style">
                    <option class="country-dropdown"  v-for="(val, index) in countriesCodeFlag" :value="val.code" :key="index">
                      <img :src="val.imgURL" style="height:15px, background:url"/> {{ val.code }}
                    </option>
                  </select>
                  <input class="my-input app_input_style" type="text" v-model="applicant.number" placeholder="Digits after code here " />
                </FormItem>
              </Col>
            </Row>

            <div class="row">
              <div class="col-5">
                <h4>Bloverse young voices</h4>
              </div>

              <div class="col-7 mb-4">
                <div class="form-check form-check-inline">
                  <input @click.prevent="toggleYoungVoices(true)" class="form-check-input" type="radio" :checked="young_voices == true">
                  <label class="form-check-label" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                  <input @click.prevent="toggleYoungVoices(false)" class="form-check-input" type="radio" :checked="young_voices == false">
                  <label class="form-check-label" for="inlineRadio2">No</label>
                </div>
              </div>
            </div>

            <FormItem prop="linkedIn" :error="errors.linkedIn" v-if="young_voices == false">
              <Input class="my-input" v-model="applicant.linkedInUsername" placeholder="Linkedln profile username" >
                  <span slot="prepend">https://www.linkedin.com/in/</span>
              </Input>
            </FormItem>
            <FormItem prop="twitter" :error="errors.twitter" v-if="young_voices == false">
              <Input class="my-input" v-model="applicant.twitterUsername" placeholder="Twitter profile username" >
                  <span slot="prepend">https://www.twitter.com/</span>
              </Input>
            </FormItem>
            <FormItem v-show="young_voices == false" prop="articles" :error="errors.articles" v-for="(value, index) in 3" :key="value">
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
                <v-select
                  :options="general.countries"
                  label="name"
                  placeholder="Country*"
                  class="my-select"
                  v-model="applicant.country">
                </v-select>
                </FormItem>
              </Col>
              <Col :sm="11" :xs="24" v-if="young_voices == false">
                <FormItem prop="category" :error="errors.categoryId">
                  <v-select :options="general.categories" label="name" placeholder="Category*" class="my-select" v-model="applicant.category">
                  </v-select>
                </FormItem>
              </Col>
              <Col :sm="11" :xs="24" v-if="young_voices == true">
                <FormItem prop="university" :error="errors.university">
                  <v-select :options="universities" label="institution" placeholder="University*" class="my-select" v-model="applicant.university">
                  </v-select>
                </FormItem>
              </Col>
            </Row>
            <button class="btn btn-primary btn-block" @click.prevent="handleSubmit">SUBMIT</button>
            <div class="my-3 text-secondary">
              <h5>
                By clicking apply, you agree to
                <router-link to="/terms-and-conditions" class="text-link">Terms</router-link> 
                and <router-link to="/privacy-policies" class="text-link">Privacy</router-link>
              </h5>
            </div>
            <div class="text-secondary">
              <h5>Have an account? <login-button style="margin-top: -0.2rem;"/></h5>
            </div>
        </Form>
      </div>
    </div>
    </div>

    <!-- Success Modal -->
    <div class="modal fade pt-5" id="successModal" data-keyboard="false" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="successModalLabel" aria-hidden="true">
      <div class="modal-dialog pt-5" role="document">
        <div class="modal-content mt-5">
          <div class="modal-body py-5">
            <h3 class="mb-3">
              <strong>Your application has been sent to bloverse.</strong>
            </h3> 
            <h5>
              A message will be sent to your mail to
              continue the verification and approval process in 48hrs.
            </h5>
          </div>
          <div class="modal-footer py-3">
            <button type="button" class="btn btn-primary" @click.prevent="navigateToHome">
              Okay
            </button>
          </div>
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
import LoginButton from "@/components/LoginButton"
import { mapState, mapActions } from "vuex";
import vSelect from "vue-select";
import countryFlags from "../../countryFlags.js";
import universities from '@/utils/universities.js';

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
    Option,
    LoginButton
  },
  watch: {//watch for changes in the applicant number
    'applicant.number': function(newValue){
      const result = newValue.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "");
      this.$nextTick(() => this.applicant.number = result);  
    },

    'applicant.country': function() {
      if(this.young_voices == true) {
        let index = universities.findIndex(obj => obj.country == this.applicant.country.name);
        if(index > -1) {
          let unis
          universities.forEach((v, i, arr) => {
            unis = arr[index].universities
          })
          this.universities = unis
        }
      }
    }
  },
  data() {
    return {
      isSuccess: false,
      serverResponse: {},
      errors: {},
      code: "+1",
      countries: {},
      categories: {},
      young_voices: false,
      universities: [],
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
        number: [
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
          if (!this.validateArticleURLS()) {
            return
          }
          let applied = await this.apply();
          if (applied == true) {
            this.handleSuccess();
          }else if (applied.errors) {
            this.handleError(applied.errors);
          }else {
            this.$Message.error(
              "Something went wrong, this may be an issue with your network connectivity. You may try to reload the page"
            );
          }
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
        phone_number: "number",
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
      // eslint-disable-next-line 
      $("#successModal").modal("show");
      this.applicant = null;
      this.$refs.applyForm.resetFields();
      this.$store.commit("clearApplicant");
    },

    handleAdd() {
      if (this.applicant.articleURLs.length < 3) {
        this.applicant.articleURLs.push("");
      }
    },

    validateArticleURLS() {
      const applicantUrls = this.applicant.articleURLs.filter(Boolean)
      if ([...(new Set(applicantUrls))].length !== applicantUrls.length) {
        this.$Message.error("Links to written articles cannot be identical");

        return false
      }

      return true
    },

    ...mapActions(["apply"]),

    async setCountries() {
      let res = await this.general.countries;
      this.countries = res.splice(0, 1);
    },

    async setCategories() {
      let res = await this.general.categories;
      this.categories = res.splice(0, 1);
    },

    navigateToHome() {
      // eslint-disable-next-line 
      $("#successModal").modal("hide");
      this.$router.push("/creators");
    },

    toggleYoungVoices(state) {
      this.young_voices = state
    }
  },
  created: function() {
    this.setCountries()
    this.setCategories()
    this.applicant.code = "+1";
    this.applicant.articleProtocols = ["https://", "https://", "https://"];
  }
};
</script>

<style>
#auth-apply {
  background: #f5f5f5;
  padding: 1rem 0rem 3rem;
}

#auth-apply .alert-success {
  border-radius: 4px;
  background-color: #009400;
  border-color: #009400;
}

.app_input_style{
  margin-left: 2px;
  width: 78%;
  border: 1px solid #dcdcdc;
}

.app_select_style{
  border: 1px solid #dcdcdc;
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

  .app_input_style{
    margin-left: 0px;
    width: 68%;
    border: 1px solid #dcdcdc;
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

<style>
.dropdown-toggle:after {
  display: none !important;
}
</style>
