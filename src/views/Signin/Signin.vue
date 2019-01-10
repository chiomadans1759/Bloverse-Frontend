<template>
  <div class="signin-container">
    <div class="top">
      <router-link to="/" class="router-link">
            <img class="logo" src="@/assets/Logo - White.svg" style="height: 40px" />
          </router-link>
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
import SigninComponent from '@/components/SigninSection/Signin.vue';

export default {
  components: {
    SigninComponent,
  }
}
</script>
<style lang="scss">
  @import './style.scss';
</style>
