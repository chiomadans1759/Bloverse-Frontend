<template>
  <div class="footer-container">
    <p><span class="bloverse">Bloverse</span> {{year}}. All rights reserved</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>


<style lang="scss">
@import "./Footer.scss";
</style>
