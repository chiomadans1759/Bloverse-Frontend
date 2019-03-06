<template>
  <main class="card text-white photoContestCard d-flex justify-content-end" :style="{backgroundImage: 'url(' + contestImage + ')'}">
    <div class="card-img-overlay photoContestCard--overlay">
      <div class="content photoContestCard--overlay__content">
        <p class="card-text font-weight-bold photoContestCard--text">
          Lorem ipsum dolor sit amet, vel accumsan
        </p>
        <p class="card-text photoContestCard--username mt-3">
          <a class="btn btn-primary initials" href="#" role="button">JD</a>
          <span class="name">Johndoe</span>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import contestImage from "../../assets/photo-contest-1.jpg";

export default {
  name: 'Photocontest',
  data() {
    return {
      contestImage,
    };
  },
}
</script>

<style lang='scss' scoped>
@import './Photocontestcard.scss';
</style>
