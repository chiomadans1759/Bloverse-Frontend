<template>
  <main class="container-fluid bl-recommendations">
    <div class="bl-recommendations--header">
      <p class="font-weight-bold title">Recommendations</p>
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
      :autoplay = "autoplay"
      :loop = "loop"
    >
      <slide>
          <recommendation-card />
      </slide>
      <slide>
          <recommendation-card />
      </slide>
      <slide>
          <recommendation-card />
      </slide>
      <slide>
          <recommendation-card />
      </slide>
      <slide>
          <recommendation-card />
      </slide>
    </carousel>
  </main>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import RecommendationCard from './RecommendationCard.vue';

export default {
  name: 'Recommendations',
  components: { Carousel, Slide, RecommendationCard },
  data() {
    return {
      perPage: 3,
      paginationSize: 5,
      paginationPadding: 5,
      minSwipeDistance: 0,
      loop: true,
      autoplay: true,
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
@import './Recommendations.scss';
</style>
