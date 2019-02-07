<template>
  <main id="settings">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-sm-7 col-lg-6">
          <h3 class="pb-4">Settings</h3>
          <div class="card p-4">
            <h6 class="pb-3">Profile</h6>

            <router-link to="/edit/profile" class="text-capitalize">edit profile</router-link>
            <p class="text small">Update your information</p>

            <router-link to="/changepassword" class="text-capitalize mt-3">change password</router-link>
            <p class="text small">Update your information</p>

            <router-link to="/choosecountry" class="text-capitalize mt-3">customize country</router-link>
            <p class="text small">Update your information</p>

            <router-link to="/choosecategory" class="text-capitalize mt-3">customize category</router-link>
            <p class="text small">Update your information</p>

            <a data-toggle="modal" href="#feedback-modal" class="text-capitalize mt-3" v-if="!isCreator">give feedback</a>
            <p class="text small" v-if="!isCreator">Update your information</p>

            <router-link to="/creators/social-media" class="text-capitalize mt-3" v-if="!isCreator">Update Social Media</router-link>
            <p class="text small" v-if="!isCreator">Update your social media information</p>

            <p class="text-capitalize font-weight-bold pt-4 auth">authorization</p>

            <div class="pt-3 d-flex justify-content-between align-items-center" v-if="!isCreator">
              <div class="pr-2">
                <p class="text-capitalize">newsletter subscription</p>
                <p class="text small">Subscribe to receive article digest of your interest</p>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-sm btn-toggle active"
                  data-toggle="button"
                  aria-pressed="true"
                  autocomplete="off"
                >
                  <div class="square"></div>
                </button>
              </div>
            </div>

            <div class="pt-3 d-flex justify-content-between align-items-center" v-if="isCreator">
              <div class="pr-2">
               <router-link to="/creators/email-settings" class="text-capitalize">Manage Email Preferences</router-link>
                <p class="text small">Customize email notifications</p>
              </div>
            </div>

            <div class="pt-3 d-flex justify-content-between align-items-center" v-if="isCreator">
              <div class="pr-2">
                <p class="text-capitalize">switch to consumer account</p>
                <p class="text small">switch to consumer view</p>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-sm btn-toggle active"
                  data-toggle="button"
                  aria-pressed="true"
                  autocomplete="off"
                >
                  <div class="square"></div>
                </button>
              </div>
            </div>

            <div class="pt-3 d-flex justify-content-between align-items-center">
              <div>
                <p>Browser Push Notifications</p>
                <p class="text small">All notifications</p>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-sm btn-toggle active"
                  data-toggle="button"
                  aria-pressed="true"
                  autocomplete="off"
                >
                  <div class="square"></div>
                </button>
              </div>
            </div>

            <div class="pt-3 d-flex justify-content-between align-items-center" v-if="isCreator">
              <div>
                <p>Share Posts on Social Media</p>
                <p class="text small">Auto-share to all social media platforms</p>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-sm btn-toggle active"
                  data-toggle="button"
                  aria-pressed="true"
                  autocomplete="off"
                >
                  <div class="square"></div>
                </button>
              </div>
            </div>

            <div class="hr"></div>

            <div class="d-flex justify-content-between align-items-center" v-if="isCreator">
              <div>
                <p class="text-capitalize">Become a Content Consumer</p>
                <p class="text small mb-2">Publish your article to the world</p>
              </div>
              <div>
                <router-link to="#" class="btn btn-sm btn-primary text-capitalize">get started</router-link>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center" v-if="!isCreator">
              <div>
                <p class="text-capitalize">Become a Content Creator</p>
                <p class="text small mb-2">Publish your article to the world</p>
                <router-link to="/creators" class="text-capitalize">know more</router-link>
              </div>
              <div>
                <router-link
                  to="/creators/apply"
                  class="btn btn-sm btn-primary text-capitalize"
                >apply</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <modal
        target="feedback-modal"
        altTitle="Send Us Some Feedback"
        actionText="Send Feedback"
        dark
        subTitle="Found a bug? Have a suggestion?. Fill out the form below and we'll take a look!"
      >
        <div class="bl-modal-content">
          <p>Enter your feedback here!</p>
          <textarea class="form-control mb-2 p-1"></textarea>
          <label class="ml-1 mr-3">
            <input type="radio" name="feedback-type"> Bug
          </label>
          <label class="mr-3">
            <input type="radio" name="feedback-type"> Comment
          </label>
          <label class="mr-3">
            <input type="radio" name="feedback-type"> Other
          </label>
        </div>
      </modal>
    </div>
  </main>
</template>

<script>
import Modal from "@/components/Modal/Modal";

export default {
  components: { Modal },
  props: {
    isCreator: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./SettingsPage";
</style>

