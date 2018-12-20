<template>
  <div>
    <TheHeader />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter';
import TheHeader from '@/components/TheHeader'

export default {
  components: { TheFooter, TheHeader }
}
</script>

<style>
@import url('./../assets/css/utility.css');
</style>

