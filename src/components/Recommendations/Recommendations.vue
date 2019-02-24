<template>
  <main class="container-fluid bl-recommendations">
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
      perPage: 4,
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
