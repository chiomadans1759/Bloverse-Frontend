<template>
  <main class="container-fluid bl-trends">
    <div class="bl-trends--header">
      <p class="font-weight-bold title">Trending</p>
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
        <trend />
      </slide>
      <slide>
        <trend />
      </slide>
      <slide>
        <trend />
      </slide>
      <slide>
        <trend />
      </slide>
      <slide>
        <trend />
      </slide>
      <slide>
        <trend />
      </slide>
      <slide>
        <trend />
      </slide>
      <slide>
        <trend />
      </slide>
      <slide>
        <trend />
      </slide>
      <slide>
        <trend />
      </slide>
    </carousel>
  </main>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import Trend from './Trend';

export default {
  name: 'Trends',
  components: { Carousel, Slide, Trend },
  data() {
    return {
      perPage: 2,
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
@import './Trends.scss';
</style>
