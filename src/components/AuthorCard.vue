<template>
  <main class="author-card">
    <!-- <div class="card-header">
      <h1 class="card-header-title">about author</h1>
    </div> -->
    <div class="card-body">
        <img :src="author.image_url" alt="Author's Image" id="authors-img">
      </div>

      <div class="right">
        <h2 id="authors-fullname">{{author.first_name}} {{author.last_name}}</h2>
        <!-- <p id="authors-about">{{author.about}}</p>
        <router-link to="/" id="author-link">Find out more</router-link> -->
      </div>
 
  </main>
</template>

<script>
export default {
  name: "author-card",
  props: {
    author: Object
  }
};
</script>

<style scoped>
.author-card {
  /* background-color: #ffffff;
  border: 1px solid #eeeeee;
  height: 17rem;
  margin-top: 15px */
  display:flex;
  align-items: center;
  width:100%;
  margin: 35px 0 15px;

}

/* .author-card .card-header {
  border-bottom: 1px solid #eeeeee;
  padding: 1rem 2rem;
}

.author-card .card-header-title {
  font-size: 17px;
  text-transform: capitalize;
  color: #666666;
}

.author-card .card-body {
  width: 100%;
  padding: 1rem 0rem;
} */

/* .author-card .left {
  float: left;
  width: 40%;
  padding: 0px 20px;
} */

.author-card #authors-img {
  width: 40px;
  border-radius: 3px;
  height: 40px;
}


.author-card #authors-fullname {
  font-size: 14px;
  color: #000000;
  font-size: bolder;
  opacity: .85;
  padding-left: 1rem
}

.author-card #authors-about {
  margin-bottom: 1rem;
}

.author-card #author-link {
  color: #2f80ed;
}
</style>

