<template>
  <main class="card">
    <img class="post-img" :src="general.currentPost.image_url">

    <div class="container">
      <small class="img-descrip">This is a description of the picture above</small>
      <h3 class="post-cat">{{category}}</h3>
      <h1 class="post-title">{{general.currentPost.title}}</h1>
      <ul class="post-keypoints">
        <li v-for="point in general.currentPost.keypoint" :key="point.id">{{point}}</li>
      </ul>
      <div class="post-content">
        <div class="post-content-body" v-html="general.currentPost.body"></div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "post-details",
  computed: {
    ...mapState(["general"]),

    category() {
      if (this.general.categories) {
        const postCategory = this.general.categories.find(
          category => category.id === this.general.currentPost.category
        );
        return postCategory.name;
      }
    }
  }
};
</script>

<style scoped>
.card {
  background-color: #ffffff;
  border: 1px solid #eeeeee;
}

.post-img {
  width: 100%;
  height: 398px;
  margin-bottom: 1rem;
  object-fit: cover;
}

.img-descrip {
  color: #aaaaaa;
  font-size: 11px;
}

.post-cat {
  margin: 3rem 0rem 1.5rem;
  color: #666666;
  font-size: 14px;
}

.post-keypoints li {
  list-style-type: circle;
  margin-left: 2rem;
  margin-top: 0.7rem;
  color: #aaaaaa;
}

.post-content {
  padding: 3rem 0rem;
}
</style>

