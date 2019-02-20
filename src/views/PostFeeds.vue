<template>
  <main class="post-feeds">
    <feed-header></feed-header>

    <section class="content-body">
      <feed-side-bar class="aside"></feed-side-bar>
      <div class="feeds">
        <div class="px-lg-6">
          <trending />
          <display-feeds class="mt-5 pt-5"></display-feeds>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import FeedSideBar from "@/components/FeedSideBar.vue"
import FeedHeader from "@/components/FeedHeader.vue"
import Trending from "@/components/Trending.vue"
import DisplayFeeds from "@/components/DisplayFeeds.vue"

export default {
  name: "post-feeds",
  components: { FeedHeader, FeedSideBar, DisplayFeeds, Trending }
}
</script>

<style scoped>
.post-feeds {
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  font-family: "Montserrat", sans-serif;
  padding-bottom: 10rem;
}

.post-feeds .content-body {
  width: 100% !important;
  position: absolute;
  top: 10vh;
  overflow-x: hidden;
}

.post-feeds .content-body .aside {
  float: left;
  width: 18%;
}

.post-feeds .content-body .feeds {
  float: right;
  width: 82%;
  padding-top: 2rem;
}
</style>
