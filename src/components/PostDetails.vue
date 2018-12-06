  <template>
  <main class="card">
    <div class="card-header">
       <h3 class="post-cat">{{category}}</h3>
     <h3 class="date-cat">2 days ago</h3>
    </div>
    
    <img class="post-img" :src="general.currentPost.image_url">
      
    <div class="container">
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
  padding:16px 24px 0;
  margin-top: 15px;
  border-radius: 4px
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center
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

