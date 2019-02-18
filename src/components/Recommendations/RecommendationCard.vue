<template>
  <main :class="['card', 'recommendation-card', customClass]">
    <img src="@/assets/photo-4.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Category</h5>
      <div class="card-text recommendation-card--content">
        <p class="font-weight-bold recommendation-card--content__text">
          <router-link to="/posts/rere">Some quick example text to build on the card title and make up the bulk of the card's content.
          Some quick example text to build on the card title and make up the bulk of the card's content.
          Some quick example text to build on the card title and make up the bulk of the card's content.</router-link>
        </p>
        <p class="recommendation-card--content__username" v-if="type === 'consumer'">
          <span class="time">1 min ago</span>
        </p>
        <p class="recommendation-card--content__username" v-else>
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
        <div class="col-5 row others centerEle">
          <div class="col-9 likes">
            <p class="thumbs-up centerEle" @click="toggleLike()" v-show="!likePost">
              <i class="fal fa-thumbs-up"></i>
              <span class="count">18</span>
            </p>
            <p class="thumbs-up centerEle" @click="toggleLike()" v-show="likePost">
              <i class="fas fa-thumbs-up"></i>
              <span class="count">18</span>
            </p>
            <p class="thumbs-down centerEle" @click="toggleDislike()" v-show="!dislikePost">
              <i class="fal fa-thumbs-down"></i>
              <span class="count">1</span>
            </p>
            <p class="thumbs-down centerEle" @click="toggleDislike()" v-show="dislikePost">
              <i class="fas fa-thumbs-down"></i>
              <span class="count">1</span>
            </p>
          </div>
          <div class="col-3 ellipsis">
            <span
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              @click="positionDropdownArrow"
            >
              <i class="fal fa-ellipsis-h"></i>
            </span>
            <div :class="['dropdown-menu', 'bl-dropdown-menu', { 'top-dropdown': !dropdownArrowDown , 'bottom-dropdown': dropdownArrowDown }]" aria-labelledby="dropdownMenuReference" ref="dropdown">
              <div class="d-flex bl-dropdown-menu__countries">
                <div class="favourite-countries">
                     <p class="dropdown-item country">Report Post</p>
                    <hr>
                    <hr>
                    <p class="dropdown-item country pt-3" v-show="isConsumer">
                      <i class="fal fa-times"></i>
                      <span class="count">Remove</span>
                    </p>
                    <p class="dropdown-item country">
                      <i class="fal fa-plus "></i>
                      <span class="count">Creators Profile</span>
                    </p>
                    <p class="dropdown-item country">
                      <i class="fal fa-comment-dots "></i>
                      <span class="count">Comment
                        <span class="badges">5</span>
                      </span>
                    </p>
                    <p class="dropdown-item country hidden-lg-down pb-3">
                      <i class="fal fa-share"></i>
                      <span class="count">Share
                        <span class="badges">5</span>
                      </span>
                    </p>
                    <p class="dropdown-item country toggle-bookmark"  v-show="!addBookmark && !isConsumer" @click="toggleBookmark()">
                      <i class="fal fa-bookmark"></i>
                      <span class="count">Read Later</span>
                    </p>
                    <p class="dropdown-item country toggle-bookmark" v-show="addBookmark && !isConsumer" @click="toggleBookmark()">
                      <i class="fas fa-bookmark"></i>
                      <span class="count">Read Later</span>
                    </p>
                    <hr>
                    <hr>
                    <p class="dropdown-item country toggle-story" v-show="!readStory" @click="toggleReadStory()">
                      <i class="fal fa-book-open"></i>
                      <span class="count">Read Story</span>
                    </p>
                    <p class="dropdown-item country toggle-story" v-show="readStory" @click="toggleReadStory()">
                      <i class="fas fa-book-open"></i>
                      <span class="count">Read Story</span>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "RecommendationCard",
  props: {
    type: {
      type: String
    },
    customClass: {
      type: String,
      required: false
    },
    isConsumer: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      likePost: false,
      dislikePost: false,
      addBookmark: false,
      readStory: false,
      dropdownArrowDown: false
    };
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
    toggleBookmark() {
      this.addBookmark = !this.addBookmark;
    },
    toggleReadStory() {
      this.readStory = !this.readStory;
    },
    positionDropdownArrow() {
      const dropdownEle = this.$refs.dropdown;
      this.dropdownArrowDown = false;

      const dropdownPositon = dropdownEle.getAttribute('x-placement');
      if (dropdownPositon === 'top-start') {
        this.dropdownArrowDown = true;
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./RecommendationCard.scss";
</style>
