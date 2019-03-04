<template>
  <main id="blank-layout">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </main>
</template>

<script>
export default {
  name: "blank-layout"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

#blank-layout {
  width: 100%;
  height: auto;
  background-color: #ffffff !important;
}
</style>

