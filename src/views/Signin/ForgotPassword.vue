<template>
  <div class="signin-container">
    <div class="top">
      <router-link to="/" class="router-link">
            <img class="logo" src="@/assets/Logo - White.svg" style="height: 40px" />
          </router-link>
    </div>
    <div class="content">
      <forgot-component></forgot-component>
    </div>
    <div class="bottom">
      <p><span class="bloverse">bloverse</span> 2018 All rights reserved</p>
    </div>
  </div>
</template>
<script>

import ForgotComponent from '@/components/SigninSection/forgot.vue';

export default {
  components: {
    ForgotComponent,
  }
}
</script>
<style lang="scss">
  @import './style.scss';
</style>
