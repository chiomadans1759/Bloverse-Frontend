<template>
  <main class="post-feeds">
    <trending />

    <!-- <section class="text-center mt-5 pt-5">
      <preloader/>
      <h1 style="color: #aaaaaa;">LOADING CONTENT...</h1>
    </section> -->
    <display-feeds class="pt-5"></display-feeds>
  </main>
</template>

<script>
import Trending from "@/components/Trending.vue"
import DisplayFeeds from "@/components/DisplayFeeds.vue"
import Preloader from "@/components/preloader.vue"

export default {
  name: "post-feeds",
  components: { DisplayFeeds, Trending, Preloader }
}
</script>

