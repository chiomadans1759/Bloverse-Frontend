<template>
  <div>
    <Navbar isLogin="isLogin" />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter';
import Navbar from '@/components/Navbar/Navbar.vue';

export default {
  components: { TheFooter, Navbar },
  data() {
    return {
      isLoginL: true
    }
  }
}
</script>

<style>
@import url('./../assets/css/utility.css');
</style>

