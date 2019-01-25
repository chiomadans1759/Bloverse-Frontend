<template>
  <main id="bl-postcard" class="card bl-postcard">
    <div class="card-body bl-postcard-body">
      <div class="card-title row title">
        <div class="col-9 row title--text">
          <span class="col-3">category</span>
          <p class="col-5 col-sm-6 font-weight-bold description">
            <router-link to="/posts/rere">Lorem ipsum dolor sit amet, vel accumsan iberaviss extttttt, ea nec elaboraret interpret
            Lorem ipsum dolor sit amet, vel accumsan iberaviss ex, ea nec elaboraret interpret
            Lorem ipsum dolor sit amet, vel accumsan iberaviss ex, ea nec elaboraret interpret</router-link>
          </p>
          <p class="col-4 col-sm-3 username">
            <a class="btn btn-primary initials" href="#" role="button">SM</a>
            &nbsp;
            <span class="font-weight-normal name">Johndoe</span>
            &nbsp;
            <span class="time">1 min ago</span>
          </p>
        </div>
        <div class="col-3 title--image"
          :style="{backgroundImage: 'url(' + feedCardImage + ')'}"
        >
        </div>
      </div>
      <div class="card-text keypoints" v-show="showKeypoints">
        <span class="font-weight-bold text-capitalize">keypoint</span>
        <ul class="keypoints--lists">
          <li>Phasellus iaculis nequeghjhjjkjjkjkhjk</li>
          <li>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with</li>
          <li>Vestibulum laoreet porttitor sem</li>
        </ul>
      </div>
      <div class="card-text row actions">
        <div class="col-5 col-sm-7 col-md-5 col-lg-7 views">
          <i class="fal fa-eye"></i>
          <span class="count">123</span>
        </div>
        <div class="col-7 col-sm-5 col-md-7 col-lg-5 row others">
          <div class="col-7 col-sm-4 likes">
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
          <div class="col-3 col-sm-7 comments">
            <p class="coment">
              <i class="fal fa-comment-dots"></i>
              <span class="count">67</span>
            </p>
            <p class="share">
              <i class="fal fa-share"></i>
              <span class="count">1</span>
            </p>
            <div class="ellipsis">
              <span class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
              >
                <i class="fal fa-ellipsis-h"></i>
              </span>
              <div class="dropdown-menu bl-dropdown-menu" aria-labelledby="dropdownMenuReference">
                <div class="d-flex bl-dropdown-menu__countries">
                  <div class="favourite-countries">
                    <p class="dropdown-item country">
                      <i class="fal fa-comment-dots"></i>
                      <span class="count">67</span>
                    </p>
                    <p class="dropdown-item country">
                      <i class="fal fa-share"></i>
                      <span class="count">67</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="showKeypoints" class="col-2 col-sm-1 toggle-keypoints"
            @click="toggleKeypoints()"
          >
            <i class="fal fa-angle-up"></i>
          </div>
          <div v-show="!showKeypoints" class="col-2 col-sm-1 toggle-keypoints"
            @click="toggleKeypoints()"
          >
            <i class="fal fa-angle-down"></i>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import feedCardImage from '../../assets/post-card-image.jpg';

export default {
  name: 'PostCard',
  data() {
    return {
      feedCardImage,
      showKeypoints: false,
      likePost: false,
      dislikePost: false,
    }
  },
  methods: {
    toggleKeypoints() {
      this.showKeypoints = !this.showKeypoints;
    },
    toggleLike() {
      this.likePost = !this.likePost;
      this.dislikePost = false;
    },
    toggleDislike() {
      this.dislikePost = !this.dislikePost;
      this.likePost = false;
    }
  },
  computed: {
    keypointToggleIcon() {
      return this.showKeypoints ? 'fa-angle-down' : 'fa-angle-up';
    },
  }
}
</script>

<style lang="scss" scoped>
  @import './PostCard.scss';
</style>
