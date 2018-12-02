<template>
  <div class="related-posts-card">
    <div class="card-header">
      <h1 class="card-header-title">Related Posts</h1>
    </div>

    <div class="card-body">
      <div class="post">
        <div class="row">
          <div class="col-xs-5">
            <img src="@/assets/random-imgs/1.jpg" alt="">
          </div>

          <div class="col-xs-7">
            <router-link to="">
              <h2>30 crazy facts about shoes that will blow your mind...</h2>
            </router-link>

            <p>2 days ago</p>
          </div>
        </div>
      </div>

      <div class="post">
        <div class="row">
          <div class="col-xs-5">
            <img src="@/assets/random-imgs/2.jpg" alt="">
          </div>

          <div class="col-xs-7">
            <router-link to="">
              <h2>How Tanazania is upgrading the lives of children...</h2>
            </router-link>

            <p>2 days ago</p>
          </div>
        </div>
      </div>

      <div class="post">
        <div class="row">
          <div class="col-xs-5">
            <img src="@/assets/random-imgs/3.jpg" alt="">
          </div>

          <div class="col-xs-7">
            <router-link to="">
              <h2>The stylish men of West African regions are...</h2>
            </router-link>

            <p>2 days ago</p>
          </div>
        </div>
      </div>

      <div class="post">
        <div class="row">
          <div class="col-xs-5">
            <img src="@/assets/random-imgs/4.jpg" alt="">
          </div>

          <div class="col-xs-7">
            <router-link to="">
              <h2>Attractions that will make you fall in love w...</h2>
            </router-link>

            <p>2 days ago</p>
          </div>
        </div>
      </div>

      <div class="post">
        <div class="row">
          <div class="col-xs-5">
            <img src="@/assets/random-imgs/5.jpg" alt="">
          </div>

          <div class="col-xs-7">
            <router-link to="">
              <h2>New ford 3 has the VW Golf and Ford Focus in s...</h2>
            </router-link>

            <p>3 days ago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "related-posts"
};
</script>

<style scoped>
.related-posts-card {
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  min-height: 17rem;
}

.related-posts-card .card-header {
  border-bottom: 1px solid #eeeeee;
  padding: 1rem 2rem;
}

.related-posts-card .card-header-title {
  font-size: 17px;
  text-transform: capitalize;
  color: #666666;
}

.related-posts-card .card-body {
  min-height: 50rem;
  padding: 1rem 0rem;
}

.related-posts-card .post {
  width: 100%;
  padding: 1rem 2rem;
}

.related-posts-card .post img {
  width: 100%;
  height: 10rem;
  object-fit: cover;
}

.related-posts-card .post h2 {
  font-size: 15px;
  color: #333333;
  margin: 1rem 0rem;
}

.related-posts-card .post h2:hover {
  color: #2f80ed;
}

.related-posts-card .post p {
  color: #666666;
  font-size: 13px;
}
</style>
