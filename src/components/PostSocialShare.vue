<template>
  <main class="card" id="social-share-card">
    <div class="card-body pt-4 pb-2">
      <div class="row">
        <div class="col-4 pt-2">
          <h3>Share on</h3>
        </div>
        <div class="col-8" style="margin-left:-1rem;">
          <social-buttons :slug="slug" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SocialButtons from '@/components/SocialButtons'

export default {
  name: "post-social-share",
  props: ["slug"],
  components: { SocialButtons },
};
</script>

