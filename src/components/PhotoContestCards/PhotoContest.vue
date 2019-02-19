<template>
  <main class="container-fluid bl-photoContest">
    <div class="bl-photoContest--header">
      <p class="font-weight-bold title">Photo Contest</p>
      <p class="subtitle">
        Lorem ipsum dolor sit amet, vel accumsan
      </p>
    </div>
    <carousel
      :perPage = "perPage"
      navigationEnabled
      paginationActiveColor = "#096DD9"
      paginationColor = "#868686"
      :paginationSize = "paginationSize"
      :paginationPadding = "paginationPadding"
      :minSwipeDistance = "minSwipeDistance"
      :navigationNextLabel = "navigationNextLabel"
      :navigationPrevLabel = "navigationPrevLabel"
      :autoplayTimeout="4000"
      :autoplay = "autoplay"
      :loop = "loop"
    >
      <slide>
        <photo-contest-card />
      </slide>
      <slide>
        <photo-contest-card />
      </slide>
      <slide>
        <photo-contest-card />
      </slide>
      <slide>
        <photo-contest-card />
      </slide>
      <slide>
        <photo-contest-card />
      </slide>
      <slide>
        <photo-contest-card />
      </slide>
      <slide>
        <photo-contest-card />
      </slide>
    </carousel>
  </main>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import PhotoContestCard from './PhotoContestCard';

export default {
  name: 'PhotoContest',
  components: { Carousel, Slide, PhotoContestCard },
  data() {
    return {
      perPage: 3,
      paginationSize: 5,
      paginationPadding: 5,
      minSwipeDistance: 0,
      autoplay: true,
      loop: true,
      navigationNextLabel: `
      <span style="font-size: 20px; color: #000000; cursor: pointer;">
        <i class="fal fa-caret-circle-right"></i>
      </span>
      `,
      navigationPrevLabel: `
      <span style="font-size: 20px; color: #000000; cursor: pointer;">
        <i class="fal fa-caret-circle-left"></i>
      </span>
      `,
    }
  }
}
</script>

<style lang='scss' scoped>
@import './Photocontest.scss';
</style>
