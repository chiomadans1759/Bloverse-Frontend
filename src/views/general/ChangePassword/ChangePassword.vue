<template>
  <main id="bl-change-password" class="container-fluid p-0 bl-change-password">
    <navbar :showBackArrow="showBackArrow" :showNavigations="showNavigations" customClass="back-nav"/>
    <div class="container main-content">
      <div class="row change-password-form">
        <form>
          <div class="form-group bl-form-header">
            <h3>Change Password</h3>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="old-password"
              aria-describedby="oldPassword" placeholder="Old Password"
            >
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="new-password"
              aria-describedby="newPassword" placeholder="New Password"
            >
          </div>
          <div class="form-group">
            <input type="password" class="form-control"
              id="confirm-password" placeholder="Confirm Password"
            >
          </div>
          <button type="submit" class="btn btn-primary btn-block bl-form-btn">
            Save
          </button>
        </form>
      </div>
    </div>
    <div class="footer-container">
      <p><span class="bloverse">bloverse</span> 2019. All Rights Reserved</p>
    </div>
  </main>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue';

export default {
  name: 'ChangePassword',
  components: { Navbar },
  data() {
    return {
      showNavigations: false,
      showBackArrow: true,
    }
  }
}
</script>

<style lang="scss" scoped>
 @import './ChangePassword.scss';
</style>

