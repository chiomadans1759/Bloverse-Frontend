<template>
  <main :class="['card', 'recommendation-card', customClass]">
    <img src="@/assets/signin.jpg" class="card-img-top recom-card" alt="...">
    <div class="card-body">
      <h5 class="card-title text-primary p-1">Category</h5>
      <div class="card-text recommendation-card--content">
        <p class="font-weight-bold recommendation-card--content__text">
          <router-link to="/posts/rere">Some quick example text to build on the card...
          </router-link>
        </p>
        <p class="recommendation-card--content__username" v-if="type === 'consumer'">
          <span class="time">1 min ago</span>
        </p>
        <div class="recommendation-card--content__username mt-4" v-else>
          <div class="small-avatar rounded-circle d-flex justify-content-center align-items-center p-2 text-white">JD</div>
          <span class="font-weight-bold name text-primary">Johndoe</span>
          <span class="time">1 min ago</span>
        </div>
        <div class="mt-3 views">
           <h6 class="d-flex justify-content-start align-items-center">
             <small class="mt-0 font-weight-bold"> 4k Views</small>
             <i class="fas fa-circle text-primary dot mx-2"></i>
             <small class="font-weight-bold">64 Comments</small>
            </h6>
        </div>
      </div>
      </div>
      <hr>
      <div class="actions">
        <div class="likes others d-flex justify-content-around">
          <div class="thumbs-up centerEle" @click="toggleLike()" v-show="!likePost">
            <div class="border rounded-circle icon-circle d-flex justify-content-center align-items-center text-primary p-2">
              <i class="fal fa-thumbs-up fa-1x"></i>
            </div>
            <span class="count">18</span>
          </div>
          <div class="thumbs-up centerEle" @click="toggleLike()" v-show="likePost">
            <div class="border rounded-circle icon-circle d-flex justify-content-center align-items-center text-primary p-2">
              <i class="fas fa-thumbs-up fa-1x"></i>
            </div>
            <span class="count">18</span>
          </div>
          <div class="thumbs-down centerEle" @click="toggleDislike()" v-show="!dislikePost">
            <div class="border rounded-circle icon-circle d-flex justify-content-center align-items-center text-primary p-2">
              <i class="fal fa-thumbs-down fa-1x"></i>
            </div>
            <span class="count">4</span>
          </div>
          <div class="thumbs-down centerEle" @click="toggleDislike()" v-show="dislikePost">
            <div class="border rounded-circle icon-circle d-flex justify-content-center align-items-center text-primary p-2">
              <i class="fas fa-thumbs-down fa-1x"></i>
            </div>
            <span class="count">4</span>
          </div>
          <div class="thumbs-down centerEle border-left pl-3 py-0">
            <div class="border rounded-circle icon-circle d-flex justify-content-center align-items-center text-primary p-2">
              <i class="fal fa-reply"></i>
            </div>
            <span class="count">11</span>
          </div>
          <div class="ellipsis">
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
