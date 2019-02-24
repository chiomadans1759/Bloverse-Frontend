<template>
  <main id="feed-card">
    <div class="row">
      <div class="col-md-3">
        <img class="rounded-0" :src="post.image_url">
      </div>

      <div class="col-md-9 py-1">
        <h5 class="card-category text-secondary mb-2">{{ category }}</h5>
        <router-link :to="`/posts/${post.slug}`" class="post-title">
          <h4><b>{{ post.title }}</b></h4>
        </router-link>

        <div>
          <ul v-if="post.category != 7" class="list-unstyled mt-3 ml-1 keypoints">
            <li class="text-capitalize mb-1" v-for="(keypoint, index) in post.keypoint" :key="index">
              {{index+1}}. &nbsp; {{keypoint | truncate(75)}}
            </li>
          </ul>

          <ul v-else class="list-unstyled mt-4">
            <li class="mb-1">
              <i class="fal fa-camera-retro"></i>
              &nbsp;&nbsp;{{post.device_type}}
            </li>
            <li>
              <i class="fal fa-map-marker-alt"></i>
              &nbsp;&nbsp;{{post.location}}
            </li>
          </ul>
        </div>

        <div class="mt-4">
          <ul class="list-inline">
            <li class="list-inline-item">
              <img :src="post.author.image_url" class="author-img rounded-circle">
              <span class="ml-2">{{post.author.first_name}} {{post.author.last_name}}</span>
            </li>

            <li class="list-inline-item mx-5">
              <i class="fal fa-clock"></i>
                {{post.published | customizedTime}}
            </li>

            <li class="list-inline-item">
              <i class="fal fa-eye" style="opacity:0.4;"></i>
                {{post.views}}
            </li>
          </ul>
        </div>
      </div>
    </div>
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
  height: auto;
  margin-bottom: 1rem;
  border-bottom: 1px solid #cccccc;
  padding: 1rem 0rem 2rem;
}

#feed-card img {
  width: 100%;
  height: 10rem;
  object-fit: cover;
}

#feed-card .post-title {
  color: #333333;
}

#feed-card .post-title:hover {
  color: #2d8cf0;
}

#feed-card .keypoints li {
  font-size: 11px;
}

#feed-card .author-img {
  width: 25px;
  height: 25px;
}

@media only screen and (max-width: 980px) { 
  #feed-card .card-category {
    margin-top: 1rem;
  }
}
</style>
