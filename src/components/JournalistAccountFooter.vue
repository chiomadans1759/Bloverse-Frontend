<template>
  <footer>
    <div class="text-center">
      <ul class="list-inline">
        <li class="list-inline-item">
          <a href>Terms</a>
        </li>
        <li class="list-inline-item">
          <a href>Privacy</a>
        </li>
        <li class="list-inline-item">
          <a href>Feedback</a>
        </li>
      </ul>

      <h5 class="text-secondary">{{current_year}} Bloverse. All rights reserved.</h5>
    </div>
  </footer>
</template>

<script>
export default {
  name: "journalist-account-footer",
  data() {
    return {
      current_year: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
</style>
