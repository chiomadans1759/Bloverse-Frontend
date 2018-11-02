<template>
  <div>
    <FeedsHeader />
    <router-view></router-view>
    <!-- <TheFooter /> -->
  </div>
  
</template>

<script>
  import FeedsHeader from '../components/FeedsHeader.vue'
  import TheFooter from '../components/TheFooter.vue';

  export default {
    components: { FeedsHeader, TheFooter },
  }
  
</script>