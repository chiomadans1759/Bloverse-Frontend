<template>
  <main id="bl-author-card">
    <div class="d-none d-md-block d-lg-block">
      <div class="row">
        <div class="col-md-2 align-self-center p-0">
          <img class="author-image img-fluid" src="@/assets/smiling-author.jpg" />
        </div>
        <div class="col-md-10">
          <p class="author-name text-truncate">
            By JohnDoe
          </p>
          <p class="message text-truncate">
            Greeting to the sun
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
#bl-author-card {
  position: fixed;
  right: 2.5rem;
  bottom: 1.5rem;
  width: 12.125rem;
  .author-image {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
  }
  .author-name {
    font-size: 1rem;
    color: #ffffff;
  }
  .message {
    font-size: 0.875rem;
    color: rbga(255, 255, 255, 0.65);
  }
}
</style>
