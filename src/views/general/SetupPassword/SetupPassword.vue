<template>
  <main id="bl-setup-password" class="container-fluid p-0 bl-setup-password">
    <navbar :showBackArrow="showBackArrow" :showNavigations="showNavigations" customClass="back-nav"/>
    <div class="container main-content">
      <div class="title">
        <h3>Password</h3>
        <p>Enter your password</p>
      </div>
      <div class="row setup-password-form">
        <form>
          <div class="form-group">
            <input type="password" class="form-control" id="password"
              aria-describedby="Password" placeholder="Password"
            >
          </div>
          <div class="form-group">
            <input type="password" class="form-control"
              id="confirm-password" placeholder="Confirm Password"
            >
          </div>
          <button type="button" class="btn btn-primary btn-block bl-form-btn"
            data-toggle="modal" href="#profile-details-modal"
          >
            Save
          </button>
        </form>
      </div>
    </div>
    <div class="footer-container">
      <p><span class="bloverse">bloverse</span> 2019. All Rights Reserved</p>
    </div>

    <modal
      target="profile-details-modal"
      altTitle="Profile Details"
      dark
      noBorderRadius
    >
      <profile-details />

      <profile-details-footer slot="footer" />
    </modal>

  </main>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue';
import Modal from '@/components/Modal/Modal.vue';
import ProfileDetails from '@/components/ProfileDetails/ProfileDetails.vue';
import ProfileDetailsFooter from '@/components/ProfileDetails/ProfileDetailsFooter.vue';

export default {
  name: 'SetupPassword',
  components: { Navbar, Modal, ProfileDetails, ProfileDetailsFooter },
  data() {
    return {
      showNavigations: false,
      showBackArrow: true
    }
  }
}
</script>

<style lang="scss" scoped>
 @import './SetupPassword.scss';
</style>
