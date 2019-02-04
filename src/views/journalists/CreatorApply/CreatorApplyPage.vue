<template>
  <div class="container-fluid creator-apply">
    <div class="row p-3 ml-4">
      <span class="top-left-container d-flex justify-content-center align-items-center">
        <a href="/" class="d-flex justify-content-around">
          <i class="fal fa-long-arrow-left fa-2x"></i>
          <span class="back-text">Back</span>
        </a>
        <router-link to="/" class="router-link pl-4">
            <img class="nav-logo" src="@/assets/Logo.svg" />
        </router-link>
      </span>
    </div>
    <div class="row py-5 d-flex">
      <div class="offset-lg-4 col-lg-3 offset-md-3 col-md-6 col-sm-12">
        <div class="col-12">
          <h1 class="creator-apply__title">Apply</h1>
          <p class="creator-apply__sub-title pt-2">Join Bloverse as acontent creator</p>
        </div>
        <div class="col-12 pt-4">
          <div class="form-group">
            <input type="text" class="form-control" aria-describedby="firstName" placeholder="First Name*">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" aria-describedby="lastName" placeholder="Last Name*">
          </div>
          <div class="form-group">
            <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Email">
          </div>
          <div class="form-group">
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">+234</div>
              </div>
              <input type="number" class="form-control" id="inlineFormInputGroupUsername2" placeholder="000 000 0000">
            </div>
          </div>
          <div class="form-group">
            <select class="custom-select">
              <option selected>Lagos, Nigeria*</option>
              <option value="1">Mexico</option>
              <option value="2">UK</option>
              <option value="3">Ghana</option>
            </select>
          </div>
          <div class="form-group">
            <label for=""> Bloverse Young Voices?</label><br>

            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
              <label class="custom-control-label" for="customRadioInline1">No</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
              <label class="custom-control-label" for="customRadioInline2">Yes</label>
            </div>
          </div>
          <div class="form-group pb-5">
            <label for="" class="d-flex flex-column">
              <strong>Category</strong>
              <span>Ipsu m lorem torem di</span>
            </label>
            <select class="custom-select">
              <option selected>Choose category*</option>
              <option value="1">Mexico</option>
              <option value="2">UK</option>
              <option value="3">Ghana</option>
            </select>
            <ul>
              <li v-for="(input, index) in categoryInputs" v-bind:key="index" class="mt-2 d-flex justify-content-center align-items-center">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Category" v-model="input.one">
                <span @click="deleteField(index, 'category')" class="p-1"><i class="fal fa-trash-alt"></i></span>
              </li>
            </ul>
            <span class="float-right pt-1 link" @click="addField('category')">Add More Category</span>
          </div>
          <div class="form-group">
            <label for="" class="d-flex flex-column">
              <strong>Links</strong>
              <span>Ipsu m lorem torem di</span>
            </label>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Instagram Link">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="LinkedIn Link">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Twitter Link">
          </div>
          <div class="">
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Link to written article">
            <ul>
              <li v-for="(input, index) in articleInputs" v-bind:key="index" class="mt-2 d-flex justify-content-center align-items-center">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Link to written article" v-model="input.one">
                <span @click="deleteField(index, 'article')" class="p-1 delete-field"><i class="fal fa-trash-alt"></i></span>
              </li>
            </ul>
            <span class="float-right pt-2 pb-3 link" id="add-article" @click="addField('article')">Add More link To Written Article</span>
          </div>
          <div class="form-group">
            <Button customClass="btn btn-primary btn-block edit-btn mb-4">Apply</Button>

              <label class="pb-4">
                By creating an account, you agree to our
                <router-link to="/terms-and-conditions" class="sign-up-link-text">Terms</router-link>
                and
                <router-link to="/privacy-policies" class="sign-up-link-text">Privacy</router-link>
              </label>

              <div class="border p-3 bg-white creator-apply__login">
                <span class="">Have an account?
                  <router-link to="/login" class="signup-login-text">Login</router-link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Button from '@/components/Button/Button.vue';

export default {
  components: {
    Button
  },
  data() {
    return {
      articleInputs: [],
      categoryInputs: [],
    }
  },
  methods: {
    addField(type) {
      if (type === 'article') {
        this.articleInputs.push({
          one: '',
        });
      }

      if (type == 'category') {
        this.categoryInputs.push({
          one: '',
        })
      }
    },

    deleteField(index, type) {
      if (type === 'article') {
        this.articleInputs.splice(index, 1);
      }

      if (type == 'category') {
        this.categoryInputs.splice(index, 1);
      }
    }
  }
}
</script>

<style lang="scss">
@import './CreatorApplyPage';
</style>
