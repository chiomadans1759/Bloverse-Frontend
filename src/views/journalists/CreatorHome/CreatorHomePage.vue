<template>
  <main id="bl-creators" class="container-fluid p-0">
    <!-- Top Section Container Start -->
    <div class="top-section-container" :style="topSectionStyle" >
      <Navbar isTransparent whiteText/>
      <div class="container">
        <div class="welcome__link">
          <h1 class="title">Interactive stories from
            <br>the global community
          </h1>
          <p class="paragraph">Connecting creators to the people</p>
          <br>
          <div class="publish-link-container mb-3 mb-sm-0">
            <router-link to="/creators/apply" class="btn btn-default">Apply</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="left-container">
      <carousel
      :perPage = "perPage"
      navigationEnabled
      paginationActiveColor = "#096DD9"
      paginationColor = "#868686"
      :paginationSize = "paginationSize"
      :paginationPadding = "paginationPadding"
      :minSwipeDistance = "minSwipeDistance"
      :autoplayTimeout="4000"
      :autoplay = "autoplay"
      :loop = "loop"
    >
      <slide>
        <div class="left-container__photos">
         <img v-for="image in images" :src="image.src" :alt="image.name" :key="image.id">
        </div>
      </slide>
       <slide>
         <div class="left-container__photos">
          <img v-for="image in images" :src="image.src" :alt="image.name" :key="image.id">
        </div>
      </slide>
       <slide>
        <div class="left-container__photos">
          <img v-for="image in images" :src="image.src" :alt="image.name" :key="image.id">
        </div>
      </slide>
      </carousel>
      
    </div>
    <div class="metrics">
      <div class="container">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <div class="card">
              <div class="row text-center">
                <div class="col-md-4 col-12 col-sm-4 col-lg-4">
                  <h1>5.6m</h1>
                  <p>Content Published</p>
                </div>
                <div class="col-md-4 col-12 col-sm-4 col-lg-4">
                  <h1>5.6k</h1>
                  <p>Content Creator</p>
                </div>
                <div class="col-md-4 col-12 col-sm-4 col-lg-4">
                  <h1>1.8m</h1>
                  <p>Visitors</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    </div>
    <div class="playVideo">
      <div v-if="paused && !playing" class="video-button play" @click="play">
        <button v-if="paused && !playing">
          <i class="fas fa-play video-controls"></i>
          <p>Watch Video</p>
        </button>
      </div>
    </div>
    <div
      class="creator-video"
      ref="videoContainer"
      tabindex="0"
      @blur="closeVideo"
      @keydown.esc="closeVideo"
    >
      <video v-show="playing" ref="video" id="video-element" controls>
        <source src="@/assets/photocontest.mp4" type="video/mp4">
      </video>
    </div>
    <div class="copyright text-center mt-13 mb-0">
      <p class="title">
        <b>bloverse</b>
        <span class="sub-text">2018. All Right Reserved</span>
      </p>
    </div>
  </main>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import Navbar from "@/components/Navbar/Navbar.vue";
import Modal from "@/components/Modal/Modal";
import images from "../../../data/images.js";

export default {
  name: "CreatorHomePage",
  data() {
    return {
      playing: false,
      paused: true,
      images,
      perPage: 1,
      paginationSize: 3,
      paginationPadding: 5,
      minSwipeDistance: 0,
      autoplay: true,
      loop: true,
    };
  },
  components: { 
    Navbar,
    Modal,
    Carousel,
    Slide
  },
  methods: {
    play() {
      const { video, videoContainer } = this.$refs;

      videoContainer.focus();

      this.playing = true;
      this.paused = false;

      video.play();
    },
    closeVideo() {
      const { video } = this.$refs;

      this.playing = false;
      this.paused = true;

      video.pause();
    }
  },
  computed: {
    getImages() {
      return this.images;
    },
    topSectionStyle() {
      return { opacity: this.playing ? 0.4 : 1 };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./CreatorHomePage.scss";
</style>
