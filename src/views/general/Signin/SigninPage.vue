<template>
  <div class="main-container">
    <div class="top">
      <div>
        <span class="top-left-container">
          <a href="/">
            <i class="fal fa-long-arrow-left fa-2x"></i>
            <span>Back</span>
          </a>
          <router-link to="/" class="router-link">
            <img class="logo" src="@/assets/Logo - White.svg" />
          </router-link>
        </span>
      </div>
    </div>
    <div class="content">
      <signin-component></signin-component>
    </div>
    <div class="bottom">
      <p><span class="bloverse">bloverse</span> 2018 All rights reserved</p>
    </div>
  </div>
</template>
<script>
import SigninComponent from '@/components/SigninSection/SigninSection.vue';


export default {
  components: {
    SigninComponent,
  }
}
</script>

<style lang="scss">
  @import './SigninPage.scss';
</style>
