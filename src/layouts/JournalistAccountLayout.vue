<template>
  <main id="journalist-account-layout">
    <JournalistAccountSidebar class="left" />
    
    <div class="right">
      <div class="container">
        <router-view class="px-lg-6"></router-view>
        <journalist-account-footer />
      </div>
    </div>
  </main>
</template>

<script>
import JournalistAccountSidebar from '@/components/JournalistAccountSidebar';
import JournalistAccountFooter from '@/components/JournalistAccountFooter';

export default {
  components: { 
    JournalistAccountSidebar, 
    JournalistAccountFooter 
  }
}
</script>

<style scoped>
#journalist-account-layout {
  width: 100%;
  height: auto;
}

#journalist-account-layout .left {
  float: left;
  width: 20%;
  height: 100%;
  position: fixed;
}

#journalist-account-layout .right {
  float: right;
  width: 80%;
}

#journalist-account-layout footer {
  height: 10rem;
  width: 100%;
  z-index: 1000;
}
</style>

