<template>
  <main class="card text-white trendCard img-fluid d-flex justify-content-end" :style="{backgroundImage: 'url(' + trendImage + ')'}">
    <div class="bg-white trendCard--category p-2">
      <p>Category</p>
    </div>
    <div class="card-img-overlay trendCard--overlay">
      <div class="content trendCard--overlay__content">
        <p class="card-text font-weight-bold trendCard--text">
          <router-link to="/posts/demo">Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec elaboraret interpret</router-link>
        </p>
        <p class="card-text trendCard--username mt-3">
          <a class="btn btn-primary initials" href="#" role="button">JD</a>
          <span class="name">Johndoe</span>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import trendImage from "../../assets/photo-4.jpg";

export default {
  name: 'Trend',
  data() {
    return {
      trendImage,
    };
  },
}
</script>

<style lang='scss' scoped>
@import './Trend.scss';
</style>
