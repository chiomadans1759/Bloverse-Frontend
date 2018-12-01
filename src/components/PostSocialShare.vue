<template>
  <main class="social-share-card">
    <div class="container">
      <div class="left">
        <h3>Share on:</h3>
      </div>

      <div class="right">
        <ul class="list-inline">
          <li>
            <a href>
              <i class="fa fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href>
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href>
              <i class="fa fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "post-social-share",
  props: {
    author: Object
  }
};
</script>

<style scoped>
.social-share-card {
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  padding: 2rem 0rem;
}

.left {
  float: left;
  width: 40%;
}

.left h3 {
  font-size: 16px;
  color: #666666;
}

.right {
  float: right;
  width: 60%;
}
</style>

