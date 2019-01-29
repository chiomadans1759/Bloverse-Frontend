<template>
  <main class="card text-white trendCard">
    <img src="@/assets/photo-4.jpg" class="card-img" alt="trend image">
    <div class="card-img-overlay trendCard--overlay">
      <div class="content trendCard--overlay__content">
        <p class="card-title trendCard--title">Category</p>
        <p class="card-text font-weight-bold trendCard--text">
          <router-link to="/posts/demo">Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec elaboraret interpret</router-link>
        </p>
        <p class="card-text trendCard--username">
          <a class="btn btn-primary initials" href="#" role="button"></a>
          <span class="name">John Doe</span>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Trend'
}
</script>

<style lang='scss' scoped>
@import './Trend.scss';
</style>
