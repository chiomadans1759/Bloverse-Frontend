<template>
  <main class="social-share-card">
    <div class="container">
      <div class="left">
        <h3>Share on:</h3>
      </div>

      <div class="right">
        <ul class="list-inline">
          <li>
            <button @click="doShare('facebook')">Facebook</button>
          </li>
          <li>
            <button>Twitter</button>
          </li>
          <li>
            <button>LinkedIn</button>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "post-social-share",
  props: ['slug'],
  methods: {
    doShare(media){
      switch(media){
      case 'facebook':
        FB.ui({ // eslint-disable-line no-undef
          method: 'share',
          display: 'popup',
          href: `${this.$BASE_URL}/redirect/${this.slug}`,
        }, function(response){});
        break;
      default:
        alert('Funtionality not available')
      }
    }
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

.right ul li a {
  font-size: 13px;
}
</style>

