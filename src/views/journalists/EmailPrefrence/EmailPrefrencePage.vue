<template>
  <main id="manage-email">
    <navbar
      :showBackArrow="showBackArrow"
      :showNavigations="showNavigations"
      customClass="back-nav"
    />
    <div class="container py-4">
      <div class="offset-md-3 col-md-6">
        <div class="row">
          <h1>
            <strong>Manage Email Preferences</strong>
          </h1>
        </div>
        <div class="row pt-5">
          <div class="card p-4">
            <div class="pt-3 d-flex justify-content-between align-items-center pb-3">
              <div class="pr-2">
                <p class="text-capitalize title">Bloverse Article Digest</p>
                <p class="text small">Discover top, new articles based on your selected categories.</p>
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
            <div class="pt-3 d-flex justify-content-between align-items-center pb-3">
              <div class="pr-2">
                <p class="text-capitalize title">Recommendations</p>
                <p class="text small">Discover trending, related articles that might interest you.</p>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-sm btn-toggle active"
                  data-toggle="button"
                  aria-pressed="true"
                  autocomplete="on"
                >
                  <div class="square"></div>
                </button>
              </div>
            </div>
            <div class="pt-3 d-flex justify-content-between align-items-center pb-3">
              <div class="pr-2">
                <p class="text-capitalize title">Photo Contest</p>
                <p class="text small">Discover top, new articles based on your selected categories.</p>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-sm btn-toggle active"
                  data-toggle="button"
                  aria-pressed="true"
                  autocomplete="on"
                >
                  <div class="square"></div>
                </button>
              </div>
            </div>
            <div class="pt-3 d-flex justify-content-between align-items-center pb-3">
              <div class="pr-2">
                <p class="text-capitalize title">News & Announcements</p>
                <p
                  class="text small"
                >Stay updated on new features and products that’ll improve your experience.</p>
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
          </div>
        </div>
      </div>
    </div>
    <div class="footer-container">
      <p>
        <span class="bloverse">bloverse</span> 2019. All Rights Reserved
      </p>
    </div>
  </main>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";

export default {
  name: "EmailSettings",
  components: { Navbar },
  data() {
    return {
      showNavigations: false,
      showBackArrow: true
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./EmailPrefrencePage";
</style>
