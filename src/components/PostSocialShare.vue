<template>
  <main class="card" id="social-share-card">
    <div class="card-body pt-4 pb-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="notranslate" style="display: none;">
        <symbol id="facebook-icon" viewBox="0 0 49.652 49.652">
          <path d="M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826    C49.652,11.137,38.516,0,24.826,0z M31,25.7h-4.039c0,6.453,0,14.396,0,14.396h-5.985c0,0,0-7.866,0-14.396h-2.845v-5.088h2.845    v-3.291c0-2.357,1.12-6.04,6.04-6.04l4.435,0.017v4.939c0,0-2.695,0-3.219,0c-0.524,0-1.269,0.262-1.269,1.386v2.99h4.56L31,25.7z    "></path>
        </symbol>
    
        <symbol id="twitter-icon" viewBox="0 0 49.652 49.652">
          <path d="M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826    C49.652,11.137,38.516,0,24.826,0z M35.901,19.144c0.011,0.246,0.017,0.494,0.017,0.742c0,7.551-5.746,16.255-16.259,16.255    c-3.227,0-6.231-0.943-8.759-2.565c0.447,0.053,0.902,0.08,1.363,0.08c2.678,0,5.141-0.914,7.097-2.446    c-2.5-0.046-4.611-1.698-5.338-3.969c0.348,0.066,0.707,0.103,1.074,0.103c0.521,0,1.027-0.068,1.506-0.199    c-2.614-0.524-4.583-2.833-4.583-5.603c0-0.024,0-0.049,0.001-0.072c0.77,0.427,1.651,0.685,2.587,0.714    c-1.532-1.023-2.541-2.773-2.541-4.755c0-1.048,0.281-2.03,0.773-2.874c2.817,3.458,7.029,5.732,11.777,5.972    c-0.098-0.419-0.147-0.854-0.147-1.303c0-3.155,2.558-5.714,5.713-5.714c1.644,0,3.127,0.694,4.171,1.804    c1.303-0.256,2.523-0.73,3.63-1.387c-0.43,1.335-1.333,2.454-2.516,3.162c1.157-0.138,2.261-0.444,3.282-0.899    C37.987,17.334,37.018,18.341,35.901,19.144z"></path>
        </symbol>

        <!-- <symbol id="linkedin-icon" viewBox="0 0 49.652 49.652">
          <path d="M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z"></path>
          <path d="M2 12h6v18h-6v-18z"></path>
          <path d="M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
        </symbol> -->
      </svg>

      <div class="row">
        <div class="col-4 pt-2">
          <h3>Share on</h3>
        </div>

        <div class="col-8" style="margin-left:-1rem;">
          <ul class="list-inline">
            <li class="list-inline-item">
              <button @click="doShare('facebook')">
                <svg height="34" width="34" class="social-icon">
                  <use id="fb" xlink:href="#facebook-icon" />
                </svg>
              </button>
            </li>
            <li class="list-inline-item ml-2">
              <a @click="doShare('twitter')" :href="`https://twitter.com/intent/tweet?url=${this.$BASE_URL}redirect/${this.slug}`" data-lang="en" data-show-count="false">
                <svg height="34" width="34" class="social-icon">
                  <use id="twitter" xlink:href="#twitter-icon" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "post-social-share",
  props: ['slug'],
  methods: {
    doShare(media){
      switch(media){
      case 'facebook':
        FB.ui({ // eslint-disable-line no-undef
          method: 'share',
          display: 'popup',
          href: `${this.$BASE_URL}redirect/${this.slug}`,
        }, function(response){
          // Count facebook share here
        });
        break;
      case 'twitter':
        twttr.events.bind('tweet', function (event) { // eslint-disable-line no-undef
          // Count tweet here
        });
        break;
      default:
        alert('Funtionality not available')
      }
    }
  }
};
</script>

<style scoped>
button {
  background: transparent;
  border: none;
}

.social-icon use#fb {
  fill: #3b5998;
}

.social-icon use#twitter {
  fill: #1da1f2;
}

.social-icon use#linkedin {
  fill: #0077b5;
}
.share-card h3 {
  padding-left: 14px;
}
</style>

