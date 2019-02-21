<template>
  <main id="trending-card">
    <div class="card rounded-0">
      <img class="card-img-top rounded-0" :src="post.image_url" alt="Card image cap">
      <div class="card-body px-0">
        <div class="container">
          <h5 class="card-title">{{category}}</h5>
          <router-link class="post-title" :to="`posts/${post.slug}`">
            <b class="card-text">
              {{post.title | truncate(50)}}
            </b>
          </router-link>
          <div class="row author mt-4">
            <div class="col-2">
              <img class="rounded-circle mr-3 mt-1" :src="post.author.image_url" alt>
            </div>

            <div class="col-10 pt-2">
              <span class="ml-2" id="desktop">
                {{`${post.author.first_name} ${post.author.last_name}` | truncate(30)}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "trending-card",
  props: {
    post: Object
  },
  computed: {
    ...mapState(["general"]),

    category() {
      if (this.general.categories) {
        const postCategory = this.general.categories.find(
          category => category.id === this.post.category
        );
        return postCategory.name;
      }
    }
  }
};
</script>

<style scoped>
#trending-card .card-img-top {
  height: 10rem;
}

#trending-card .card {
  box-shadow: none !important;
}

#trending-card .card .card-img-top {
  object-fit: cover;
}

#trending-card .card-body {
  height: 8rem;
}

#trending-card .post-title {
  color: #333333;
}

#trending-card .post-title:hover {
  color: #2d8cf0;
}

#trending-card .card .card-title {
  position: absolute;
  top: 11rem;
}

#trending-card .card .card-text {
  position: absolute;
  top: 12rem;
}

#trending-card .author {
  position: absolute;
  top: 14rem;
}

#trending-card .author img {
  width: 25px;
  height: 25px;
}
</style>
