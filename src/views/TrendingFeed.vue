<template>
  <main class="post-feeds">
    <trending />
    <display-feeds class="pt-5"></display-feeds>
  </main>
</template>

<script>
import Trending from "@/components/Trending.vue"
import DisplayFeeds from "@/components/DisplayFeeds.vue"

export default {
  name: "post-feeds",
  components: { DisplayFeeds, Trending }
}
</script>

<style scoped>

</style>
