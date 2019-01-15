<template>
  <main id="feed-card">
    <router-link :to="`/posts/${post.slug}`">
      <div class="card" v-if="post.category === 7">
        <img class="card-img-top" :src="post.image_url">
        <div class="card-body">
          <h5 class="card-titlee">{{ category }}</h5>
          <p class="card-text">{{ post.title }}</p>
          <div class="foott">
            <div class="further">
              <img :src="post.author.image_url" class="author-imgg">
              <span class="detailss">
                {{post.author.first_name}} {{post.author.last_name}}
                <p>{{post.published | customizedTime}}</p>
              </span>
            </div>
            <h6 class="right">
              <i class="fal fa-eye" style="opacity:0.4;"></i>
              {{post.views}}
            </h6>
          </div>
        </div>
        <div class="overlay">
          <p>{{post.title}}</p>
          <ul class="travel-deets">
            <li>
              <i class="fas fa-camera-retro"></i>
              &nbsp;&nbsp;{{post.device_type}}
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              &nbsp;&nbsp;{{post.location}}
            </li>
          </ul>
          <p class="read-more">
            <router-link :to="`posts/${post.slug}`">
              <h5>READ STORY</h5>
            </router-link>
          </p>
        </div>
      </div>
      <div class="card" v-else>
        <img class="card-img-top" :src="post.image_url">
        <div class="card-body">
          <h5 class="card-title">{{ category }}</h5>
          <p class="card-text">{{ post.title | truncate(50) }}</p>
          <div class="foott">
            <div class="further">
              <img :src="post.author.image_url" class="author-imgg">
              <span class="detailss">
                {{post.author.first_name}} {{post.author.last_name}}
                <p>{{post.published | customizedTime}}</p>
              </span>
            </div>
            <h6 class="right">
              <i class="fal fa-eye" style="opacity:0.4;"></i>
              {{post.views}}
            </h6>
          </div>
        </div>
        <div class="overlay">
          <ul class="overlay-content">
            <!--Display all keypoints if available  -->
            <h3
              v-if="post.keypoint[0] && post.keypoint[1] && post.keypoint[2] || post.keypoint[0] || post.keypoint[1] || post.keypoint[2]"
            >{{post.title}}</h3>
            <h2
              v-if="post.keypoint[0] && post.keypoint[1] && post.keypoint[2] || post.keypoint[0] || post.keypoint[1] || post.keypoint[2]"
            >Keypoints</h2>
            <li v-if="post.keypoint[0]">
              <i class="fas fa-circle" style="font-size: 8px;"></i>
              &nbsp;{{post.keypoint[0] | truncate(75)}}
            </li>
            <li v-if="post.keypoint[1]">
              <i class="fas fa-circle" style="font-size: 8px;"></i>
              &nbsp;{{post.keypoint[1] | truncate(75)}}
            </li>
            <li v-if="post.keypoint[2]">
              <i class="fas fa-circle" style="font-size: 8px;"></i>
              &nbsp;{{post.keypoint[2] | truncate(75)}}
            </li>
          </ul>
          <p class="read-more">
            <router-link :to="`posts/${post.slug}`">
              <h5>READ STORY</h5>
            </router-link>
          </p>
          <h4
            class="empty-class"
            v-if="!post.keypoint[0] && !post.keypoint[1] && !post.keypoint[2]"
          >No KeyPoints Available for this post</h4>
        </div>
      </div>
    </router-link>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "feed-card",
  props: {
    post: Object
  },
  computed: {
    ...mapState(["general"]),
    category() {
      const { categories } = this.general;
      const postCategory = categories ? categories.find(category => 
        category.id === this.post.category) : {};
      return postCategory.name || undefined;
    }
  },
};
</script>

<style scoped>
  #feed-card {
    margin-top: 4rem;
  }

  #feed-card .card {
    height: 394px;
    width: 100%;
    border-radius: none;
    margin-bottom: -2rem;
  }

  #feed-card .card:hover {
    transition: 0.5s ease;
    cursor: pointer;
  }

  #feed-card .card-img-top {
    height: 220px;
    width: 100%;
    border-radius: 0;
    object-fit: cover;
  }

  #feed-card .card-title {
    text-transform: uppercase;
    font-size: 13px;
    color: #353535;
  }

  #feed-card .card-titlee {
    text-transform: uppercase;
    font-size: 13px;
    color: #096dd9;
  }

  #feed-card .card-text {
    font-size: 16px;
    color: #34323d;
    opacity: 85%;
    text-transform: capitalize;
    height: 64px;
    font-weight: 600;
  }

  #feed-card .author-imgg {
    width: 34px;
    height: 34px;
    object-fit: cover;
  }

  #feed-card .foott {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }

  #feed-card .foott .further {
    display: flex;
    justify-content: space-between;
  }

  #feed-card .foott .right {
    color: #353535 !important;
    font-size: 12px;
    margin-top: 0.6rem;
  }

  #feed-card .foott span {
    margin-left: 0.5rem;
    color: #353535;
    font-size: 12px;
    font-weight: 500;
  }

  #feed-card .foott p {
    color: #353535;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    opacity: 0.4;
  }

  #feed-card .overlay .empty-class {
    text-align: center;
    font-size: 19px;
    margin-top: 10rem;
    color: #fff;
  }

  #feed-card .overlay p {
    text-align: left;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-left: 3rem;
    margin-top: 2rem;
  }

  #feed-card .overlay .travel-deets {
    list-style-type: none;
    color: #fff;
    text-align: left;
    margin-left: 3rem;
    margin-top: 5rem;
  }
  #feed-card .overlay .travel-deets li {
    color: #fff;
    font-size: 15px;
    margin-bottom: 2rem;
  }

  #feed-card .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 392px;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(13, 13, 15, 0.849);
    overflow-x: none;
  }

  #feed-card .overlay-content h3 {
    font-size: 16px;
    margin-bottom: 1rem;
    text-transform: capitalize;
    margin-top: 1rem;
    font-weight: bold;
  }

  #feed-card .overlay-content h2 {
    font-size: 16px;
    margin-bottom: 1rem;
    text-transform: capitalize;
    margin-top: 1rem;
    font-weight: bold;
  }

  #feed-card .overlay .overlay-content li {
    margin-bottom: 1rem;
  }

  #feed-card .read-more {
    margin-left: 16rem !important;
    position: absolute;
    bottom: 0 !important;
    margin-bottom: 1.5rem;
  }

  #feed-card .overlay-content #consumer-keypoints {
    margin-bottom: 1rem;
  }

  #feed-card .overlay-content {
    color: white;
    font-size: 20px;
    position: absolute;
    margin-left: 2.2rem;
    left: 43%;
    top: 46%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 12.6px;
    width: 95%;
    list-style-type: none;
  }

  #feed-card:hover .overlay {
    opacity: 1;
  }
</style>
