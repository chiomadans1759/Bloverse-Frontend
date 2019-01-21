<template>
  <main class="card text-white photoContestCard">
    <img src="@/assets/photo-contest-1.jpg" class="card-img" alt="trend image">
    <div class="card-img-overlay photoContestCard--overlay">
      <div class="content photoContestCard--overlay__content">
        <p class="card-text font-weight-bold photoContestCard--text">
          Lorem ipsum dolor sit amet, vel accumsan
        </p>
        <p class="card-text photoContestCard--username">
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
@import './photocontestcard.scss';
</style>
