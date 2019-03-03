<template>
  <main id="journalist-account-layout">
    <JournalistAccountNav />
    <div class="container py-5">
      <router-view class="px-lg-6 mt-5"></router-view>
    </div>
    <JournalistAccountFooter v-if="currentRoute == 'journalist-dashboard'" />
  </main>
</template>

<script>
import JournalistAccountNav from "@/components/JournalistAccountNav"
import JournalistAccountFooter from "@/components/JournalistAccountFooter"

export default {
  components: {
    JournalistAccountNav,
    JournalistAccountFooter
  },
  computed: {
    currentRoute() {
      return this.$route.name
    }
  }
};
</script>

<style scoped>
#journalist-account-layout {
  width: 100%;
  height: auto;
  overflow: auto;
  padding-bottom: 20rem;
  height: 100vh;
  font-family: 'Montserrat', sans-serif !important;
  background-color: #edf2f9;
}
</style>

