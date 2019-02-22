<template>
  <div id="bl-socail-media" class="my-4">
    <p class="mb-2 social-title" :class="title"><strong>Social Media</strong></p>
    <div class="d-flex flex-wrap">
      <div class="mr-2">
        <div class="border rounded p-2 mb-1 d-flex align-items-center">
          <img class="social-icon" :class="customSocialIconStyle"
            src="@/assets/facebook-square.svg"
            alt="facebook"
          />
          <h6 class="social-text text-center pl-2">Facebook</h6>
        </div>
      </div>
      <div class="mr-2">
        <div class="border rounded p-2 mb-1 d-flex align-items-center">
          <img class="social-icon" :class="customSocialIconStyle"
            src="@/assets/twitter-square.svg"
            alt="facebook"
          />
          <h6 class="social-text text-center pl-2">Twitter</h6>
        </div>
      </div>
      <div class="mr-2">
        <div class="border rounded p-2 mb-1 d-flex align-items-center">
          <img class="social-icon" :class="customSocialIconStyle"
            src="@/assets/instagram-square.svg" alt="facebook"
          />
          <h6 class="social-text text-center pl-2">Instagram</h6>
        </div>
      </div>
      <div class="mr-2">
        <div class="border rounded p-2 mb-1 d-flex align-items-center">
          <img class="social-icon" :class="customSocialIconStyle"
            src="@/assets/linkedin-square.svg" alt="facebook" 
          />
          <h6 class="social-text text-center pl-2">Linkedin</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'socialMedia',
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    customSocialIconStyle: {
      type: String,
      required: false,
      default: "",
    }
  }
}
</script>

<style lang="scss" scoped>
 @import './SocialMedia.scss';
</style>

