<template>
  <div>
    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>

import Footer from '@/components/Footer/Footer.vue';
import Navbar from '@/components/Navbar/Navbar.vue';

export default {
  components: { Footer, Navbar }
}
</script>

<style>
@import url('./../assets/css/utility.css');
</style>

