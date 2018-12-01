<template>
  <div class="related-posts-card">
    <div class="card-header">
      <h1 class="card-header-title">Related Posts</h1>
    </div>

    <div class="card-body">
      <div class="post">
        <div class="container">
          <div class="left"></div>

          <div class="right"></div>
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
  width: 100%;
  padding: 1rem 0rem;
}

.related-posts-card .left {
  float: left;
  width: 40%;
  padding: 0px 20px;
}

.related-posts-card .right {
  float: right;
  width: 60%;
  padding-top: 15px;
}
</style>
