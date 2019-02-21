<template>
  <main id="general-layout">
    <feed-header></feed-header>

    <section class="body">
      <feed-side-bar class="aside"></feed-side-bar>

      <div class="content">
        <transition name="fade" mode="out-in">
          <div class="px-lg-6">
            <router-view></router-view>
          </div>
        </transition>
      </div>
    </section>
  </main>
</template>

<script>
import FeedSideBar from "@/components/FeedSideBar.vue"
import FeedHeader from "@/components/FeedHeader.vue"

export default {
  components: { FeedHeader, FeedSideBar }
}
</script>

<style>
#general-layout {
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  font-family: "Montserrat", sans-serif;
  padding-bottom: 10rem;
}

#general-layout .body {
  width: 100% !important;
  position: absolute;
  top: 10vh;
  overflow-x: hidden;
}

#general-layout .body .aside {
  float: left;
  width: 18%;
}

#general-layout .body .content {
  float: right !important;
  width: 82% !important;
  padding-top: 2rem;
}
</style>

