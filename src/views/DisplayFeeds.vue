<template>
  <div>
    <FeedsHeader />
    <FeedsSection title="Latest Headlines" :posts="posts" />
    <TheFooter />
  </div>
  
</template>

<script>
  import data from '../data.js';
  import FeedsHeader from '../components/FeedsHeader.vue'
  import FeedsSection from '../components/FeedsSection.vue';
  import TheFooter from '../components/TheFooter.vue';
  export default {
    components: { FeedsSection, FeedsHeader, TheFooter },
    data() {
      return {
        posts: data.posts
      }
    }
  }
  
</script>