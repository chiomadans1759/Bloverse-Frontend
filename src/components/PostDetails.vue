<template>
  <main class="card p-0" id="post-details">
    <section v-if="!post">
      <img src="@/assets/placeholders/post.svg" alt="">
    </section>
    <div>
      <div class="card-header border-0">
        <div class="row pt-4">
          <div class="col">
            <h5 class="card-header-title text-uppercase" v-if="show">{{category.name}}</h5>
          </div>
          <div class="col-auto">
            <h6
              class="text-secondary text-uppercase"
            >{{post.created | customizedTime}}</h6>
          </div>
        </div>
      </div>
      <!-- card body -->
      <div class="card-body">
        <img class="post-img" :src="post.image_url">

        <h1 class="post-title mt-4">{{post.title}}</h1>
        <ul class="post-keypoints">
          <li
            v-for="point in post.keypoint"
            v-if="point"
            :key="point.id"
          >{{point}}</li>
        </ul>
        <div class="post-content">
          <div class="post-content-body" v-html="post.body"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "post-details",
  props: ["post"],
  data() {
    return {
      show: false,
      imageShow: false
    };
  },
  watch: {
    category: {
      handler: function(newItem) {
        this.show = true;
      },
      deep: true
    }
  },
  computed: {
    ...mapState(["general", "auth"]),
    category() {
      if (this.general.categories) {
        const postCategory = this.general.categories.find(
          category => category.id === this.post.category
        );
        return postCategory;
      }
    }
  }
};
</script>

<style scoped>
.post-content-body {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  object-fit: contain;
}
.post-content-body img {
  display: flex;
  width: 100%;
  justify-content: space-between;
  object-fit: contain;
}
#post-details .card-header {
  width: 100%;
}
#post-details .card-header .card-header-title {
  display: block;
}
#post-details .post-img {
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  object-fit: cover;
}
.card-body {
  margin-top: -1rem;
}
#post-details .img-descrip {
  color: #aaaaaa;
  font-size: 11px;
}
#post-details .post-cat {
  color: #666666;
  font-size: 12px;
  padding-bottom: 16px;
  text-transform: uppercase;
  font-weight: bold;
}
#post-details .date-cat {
  color: #aaaaaa;
  font-size: 10px;
  padding-bottom: 16px;
  text-transform: uppercase;
  font-weight: bold;
}
#post-details .post-keypoints li {
  list-style-type: circle;
  margin-left: 2rem;
  margin-top: 0.7rem;
  color: #aaaaaa;
}
#post-details .post-content {
  padding: 3rem 0rem;
}
@media only screen and (max-width: 980px) {
  #post-details .card {
    margin-top: 3rem;
  }
}
</style>
