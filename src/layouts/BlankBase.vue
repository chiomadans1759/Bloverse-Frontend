<template>
  <!-- Helper Template for putting views with different layout structure but belongs to same parents logically under same parent route -->
  <main id="blank-base">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </main>
</template>

<style scoped>
#blank-base {
  height: 100vh;
  font-family: "Montserrat", sans-serif !important;
}
</style>
