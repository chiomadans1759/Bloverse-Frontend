<template>
  <!-- Helper Template for putting views with different layout structure but belongs to same parents logically under same parent route -->
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>
