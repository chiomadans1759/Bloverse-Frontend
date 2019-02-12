<template>
  <main id="bl-social-media" class="container-fluid p-0 bl-social-media">
    <navbar :showBackArrow="showBackArrow" :showNavigations="showNavigations" customClass="back-nav"/>
    <div class="container main-content">
      <div class="row social-media-form">
        <form>
          <div class="form-group bl-form-header">
            <h3>Update Social Media</h3>
          </div>
          <div class="form-group">
            <label for="facebook">Facebook</label>
            <input type="text" class="form-control" id="facebook"
              aria-describedby="facebook" placeholder="https://facebook.com/username"
            >
          </div>
          <div class="form-group">
            <label for="twitter">Twitter</label>
            <input type="text" class="form-control" id="twitter"
              aria-describedby="twitter" placeholder="https://twitter.com/username"
            >
          </div>
          <div class="form-group">
            <label for="linkedin">LinkedIn</label>
            <input type="text" class="form-control" id="linkedin"
              aria-describedby="linkedin" placeholder="https://linkedin.com/username"
            >
          </div>
          <div class="form-group text-right pr-3 add-link">
            <span><i class="fas fa-plus mr-1"></i> Add</span>
          </div>
          <br />
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
  name: 'SocialMedia',
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
@import "./SocialMediaPage";
</style>
