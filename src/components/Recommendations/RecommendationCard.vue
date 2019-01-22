<template>
  <main class="card recommendation-card">
    <img src="@/assets/photo-4.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Category</h5>
      <div class="card-text recommendation-card--content">
        <p class="font-weight-bold recommendation-card--content__text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
          Some quick example text to build on the card title and make up the bulk of the card's content.
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <p class="recommendation-card--content__username">
            <a class="btn btn-primary initials" href="#" role="button"></a>
            <span class="font-weight-bold name">Johndoe</span>
            <span class="time">1 min ago</span>
        </p>
      </div>
      <div class="card-text row actions">
        <div class="col-7 views">
          <i class="fal fa-eye"></i>
          <span class="count">123</span>
        </div>
        <div class="col-5 row others">
          <div class="col-9 likes">
            <p class="thumbs-up" @click="toggleLike()" v-show="!likePost">
              <i class="fal fa-thumbs-up"></i>
              <span class="count">18</span>
            </p>
            <p class="thumbs-up" @click="toggleLike()" v-show="likePost">
              <i class="fas fa-thumbs-up"></i>
              <span class="count">18</span>
            </p>
            <p class="thumbs-down" @click="toggleDislike()" v-show="!dislikePost">
              <i class="fal fa-thumbs-down"></i>
              <span class="count">1</span>
            </p>
            <p class="thumbs-down" @click="toggleDislike()" v-show="dislikePost">
              <i class="fas fa-thumbs-down"></i>
              <span class="count">1</span>
            </p>
          </div>
          <div class="col-3 ellipsis">
            <i class="fal fa-ellipsis-h"></i>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'RecommendationCard',
  data() {
    return {
      likePost: false,
      dislikePost: false,
    }
  },
  components: { Carousel, Slide },
  methods: {
    toggleLike() {
      this.likePost = !this.likePost;
      this.dislikePost = false;
    },
    toggleDislike() {
      this.dislikePost = !this.dislikePost;
      this.likePost = false;
    },
  }
}
</script>

<style lang='scss' scoped>
@import './RecommendationCard.scss';
</style>
