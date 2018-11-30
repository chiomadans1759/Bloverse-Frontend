<template>
  <div>
    <FeedsHeader />
    <router-view></router-view>
    <FeedsFooter/>
  </div>
  
</template>

<script>
import FeedsHeader from '../components/FeedsHeader.vue'
import FeedsFooter from '../components/FeedsFooter.vue';

export default {
  components: { FeedsHeader, FeedsFooter },
}
  
</script>
