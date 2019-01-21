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
  methods: {
    doShare(media) {
      switch (media) {
      /* eslint-disable */
      case "facebook":
        FB.ui( // eslint-disable-line no-undef
          {
            method: "share",
            display: "popup",
            href: `${this.$BASE_URL}redirect/${this.slug}`
          },
          function(response) {
            // Count facebook share here
          }
        );
        break;
      case "twitter":
        twttr.events.bind("tweet", function(event) { // eslint-disable-line no-undef
          // Count tweet here
        });
        break;
      default:
        alert("Funtionality not available");
      }
    }
  }
};
</script>

