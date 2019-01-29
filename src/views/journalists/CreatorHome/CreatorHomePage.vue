<template>
  <main id="bl-creators" class="container-fluid p-0">
    <!-- Top Section Container Start -->
    <div class="top-section-container">
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
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <video class="col-12" id="video-element" controls style="display: none;">
              <source src="@/assets/photocontest.mp4" type="video/mp4">
            </video>
            <div v-if="paused && !playing" class="video-button play">
              <button v-if="paused && !playing" @click="play">
                <i class="fas fa-play video-controls"></i>
                <p>Watch Video</p>
              </button>
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </div>
    <div class="copyright text-center mt-13">
      <p class="title">
        <b>bloverse</b>
        <span class="sub-text">2018. All Right Reserved</span>
      </p>
    </div>
      <modal
        target="feedback-modal"
        altTitle="Send Us Some Feedback"
        actionText="Send Feedback"
        dark
        subTitle="Found a bug? Have a suggestion?. Fill out the form below and we'll take a look!"
        >
        <div class="bl-modal-content">
          <p>Enter your feedback here!</p>
          <textarea class="form-control mb-2 p-1"></textarea>
          <label class="ml-1 mr-3"><input type='radio' name='feedback-type'>  Bug</label>
          <label class="mr-3"><input type='radio' name='feedback-type'>  Comment</label>
          <label class="mr-3"><input type='radio' name='feedback-type'>  Other</label>
        </div>
      </modal>
  </main>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Modal from "@/components/Modal/Modal";

export default {
  name: "CreatorHomePage",
  data() {
    return {
      playing: false,
      paused: true
    };
  },
  components: { 
    Navbar,
    Modal,
  },
  methods: {
    play: function() {
      const video = document.getElementById("video-element");
      video.style.display = "block";
      this.playing = true;
      this.paused = false;
      video.play();
    }
  },
  mounted() {
    const video = document.getElementById("video-element");
    const self = this;
    if (video) {
      video.onpause = function() {
        self.playing = false;
        self.paused = true;
      };
      video.onplay = function() {
        self.playing = true;
        self.paused = false;
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./CreatorHomePage.scss";
</style>
