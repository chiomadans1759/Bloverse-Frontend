<template>
  <main class="card p-0">
    <div class="card-header border-0">
      <div class="row pt-4">
        <div class="col">
          <h5 class="card-header-title text-uppercase">{{category.name}}</h5>
        </div>
        
        <div class="col-auto">
          <h6 class="text-secondary text-uppercase">2 days ago</h6>
        </div>
      </div>
    </div>
    
    <div class="card-body">
      <img class="post-img" :src="general.currentPost.image_url">
      
      <small class="img-descrip">This is a description of the picture above</small>
      <h1 class="post-title mt-4">{{general.currentPost.title}}</h1>
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
  data(){
    return{
      show: false
    }
  },
  watch:{
    category(){
      this.show = true;
    }
  },
  computed: {
    ...mapState(["general"]),

    category() {
      if (this.general.categories) {
        const postCategory = this.general.categories.find(
          category => category.id === this.general.currentPost.category
        );
        return postCategory;
      }
    }
  }
};
</script>

<style scoped>
.card-header {
  width: 100%;
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
  color: #666666;
  font-size: 12px;
  padding-bottom: 16px;
  text-transform: uppercase;
  font-weight: bold
}

.date-cat {
  color: #aaaaaa;
  font-size: 10px;
  padding-bottom: 16px;
  text-transform: uppercase;
  font-weight: bold
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

@media only screen and (max-width: 980px) {
 .card{
   margin-top: 3rem;
  }
}
</style>

