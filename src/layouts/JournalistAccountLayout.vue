<template>
  <main id="journalist-account-layout">
    <JournalistAccountSidebar class="left"/>
    <div class="right">
      <div class="mobile">
        <router-link to="/" class="router-link">
          <img class="logo" src="@/assets/Logo.svg" style="height: 40px">
        </router-link>
      </div>
      <router-view class="px-lg-6"></router-view>
    </div>
  </main>
</template>

<script>
import JournalistAccountSidebar from "@/components/JournalistAccountSidebar";

export default {
  components: {
    JournalistAccountSidebar
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
}

#journalist-account-layout .left {
  float: left;
  width: 20%;
  height: 100%;
  position: fixed;
  z-index: 1000;
}

#journalist-account-layout .right {
  float: right;
  width: 80%;
  height: auto !important;
  z-index: 10;
}

.mobile {
  display: none;
}

@media screen and (max-width: 600px) {
  .mobile {
    display: block;
    margin-top: .5rem;
    text-align: center;
  }
}
</style>

